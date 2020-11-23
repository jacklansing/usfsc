import { buffer } from 'micro';
import Cors from 'micro-cors';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27',
});

console.log('WEBHOOK API HIT!');

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
});

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let buf = await buffer(req);
  const sig = req.headers['stripe-signature']!;

  let stripeEvent: Stripe.Event;
  try {
    stripeEvent = stripe.webhooks.constructEvent(
      buf.toString(),
      sig,
      webhookSecret,
    );
  } catch (err) {
    // On error, log and return the error message.
    console.log(`❌ Error message: ${err.message}`);
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Only update application if this is a successful Stripe Checkout purchase
  if (stripeEvent.type === 'checkout.session.completed') {
    try {
      const eventObject = stripeEvent.data.object;
      // @ts-expect-errors
      const applicantId = eventObject.client_reference_id;

      const confirmPaymentRes = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/membership-applications/${applicantId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'confirm-payment-secret': process.env.CONFIRM_PAYMENT_SECRET,
          },
          body: JSON.stringify({
            payment_received: true,
          }),
        },
      );
      if (confirmPaymentRes.status === 200) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(400).json({ success: false });
      }
    } catch (e) {
      console.error(`Stripe payment confirmation failed with ${e}`);
      return res.status(400).json({ success: false });
    }
  }
};

export default cors(webhookHandler as any);
