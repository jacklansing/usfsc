/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import React from 'react';
import AnimatedHeading from '../../components/utils/animated-heading';
import AnimatedLink from '../../components/utils/animated-link';
import LayoutAnimated from '../../components/utils/layout-animated';

interface Props {}

const PaymentCancelled: React.FC<Props> = ({}) => {
  return (
    <LayoutAnimated>
      <AnimatedHeading>Payment Canelled</AnimatedHeading>
      <Box
        sx={{
          maxWidth: '800px',
          mx: 'auto',
        }}
      >
        <p sx={{ textAlign: 'center', fontSize: 4 }}>
          If you're seeing this page, the application was submitted but your
          payment was cancelled.
        </p>
        <p sx={{ textAlign: 'center', fontSize: 4 }}>
          This should only happen if you intentionally backed out of the payment
          page. Feel free to submit another application with payment or contact
          us for more info.
        </p>
        <p sx={{ textAlign: 'center', fontSize: 4 }}>
          If you have any questions, or feel that you saw this page in error,
          please contact us at{' '}
          <a href="mailto:unclesamtroy@gmail.com">unclesamtroy@gmail.com</a>
        </p>
      </Box>
      <AnimatedLink href="/news">Click Here To Go Back Home</AnimatedLink>
    </LayoutAnimated>
  );
};

export default PaymentCancelled;
