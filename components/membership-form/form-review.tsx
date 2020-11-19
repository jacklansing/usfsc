/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import { useStateMachine } from 'little-state-machine';
import React, { FormEvent, useState } from 'react';
import { Button } from 'theme-ui';
import updateAction from '../../lib/utils/updateAction';
import FieldPreview from './field-preview';

import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

interface Props {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const FormReview: React.FC<Props> = ({ step, setStep }) => {
  const [error, setError] = useState(null);

  const { state } = useStateMachine(updateAction);

  if (step !== 4) {
    return null;
  }

  const formatMembershipType = (membershipType) => {
    const split = membershipType.split('-');
    let result = `${split[0][0].toUpperCase() + split[0].slice(1)} ($${
      split[1]
    }.00)`;
    return result;
  };

  const {
    primaryApplicant,
    secondaryApplicant,
    address,
    membershipType,
  } = state.data;

  if (step !== 4) {
    return null;
  }

  const finalSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      // Submit membership application without payment received
      let membershipData: any = {
        membership_type: membershipType.split('-')[0],
        address_line_one: address.addressPrimary,
        address_line_two: address.addressSecondary || '',
        address_state: address.state,
        address_city: address.city,
        address_postal_code: address.postalCode,
        primary_applicant_previous_membership:
          primaryApplicant.previousMembershipNumber,
        primary_applicant_first_name: primaryApplicant.firstName,
        primary_applicant_last_name: primaryApplicant.lastName,
        primary_applicant_age: primaryApplicant.age,
        primary_applicant_dob: primaryApplicant.dateOfBirth,
      };

      if (secondaryApplicant.firstName.length > 0) {
        membershipData = {
          ...membershipData,
          secondary_applicant_previous_membership:
            secondaryApplicant.previousMembershipNumber || '',
          secondary_applicant_first_name: secondaryApplicant.firstName || '',
          secondary_applicant_last_anme: secondaryApplicant.lastName || '',
          secondary_applicant_age: secondaryApplicant.age || '',
          secondary_applicant_dob: secondaryApplicant.dateOfBirth || '',
        };
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/membership-applications`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(membershipData),
        },
      );
      const resData = await res.json();
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems: [{ price: 'price_1HHxlPIKEd7Nl0FwtfvssiOg', quantity: 1 }],
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/canceled`,
        clientReferenceId: resData.id.toString(),
      });

      if (error) {
        setError(error);
      }
    } catch (e) {
      setError(e);
    }
  };

  return (
    <section sx={{ mb: 5 }}>
      <h1>Application Review</h1>
      <ReviewSection>
        <ReviewLabelContainer>
          <h2 sx={{ variant: 'headings.h4' }}>Membership Type</h2>
          <Button variant="contained" onClick={() => setStep(1)}>
            Edit
          </Button>
        </ReviewLabelContainer>
        <FieldPreview
          label="Membership"
          value={formatMembershipType(state.data.membershipType)}
        />
      </ReviewSection>
      <ReviewSection>
        <ReviewLabelContainer>
          <h2 sx={{ variant: 'headings.h4' }}>Member Info</h2>
          <Button variant="contained" onClick={() => setStep(2)}>
            Edit
          </Button>
        </ReviewLabelContainer>
        <FieldPreview
          label="Previous Membership Number"
          value={primaryApplicant.previousMembershipNumber || 'N/A'}
          divider
        />
        <FieldPreview
          label="First Name"
          value={primaryApplicant.firstName}
          divider
        />
        <FieldPreview
          label="Last Name"
          value={primaryApplicant.lastName}
          divider
        />
        <FieldPreview label="Age" value={primaryApplicant.age} divider />
        <FieldPreview
          label="Date of Birth"
          value={primaryApplicant.dateOfBirth}
        />
      </ReviewSection>
      {!secondaryApplicant.firstName ? null : (
        <ReviewSection>
          <ReviewLabelContainer>
            <h2 sx={{ variant: 'headings.h4' }}>Add'l Member Info</h2>
            <Button variant="contained" onClick={() => setStep(2)}>
              Edit
            </Button>
          </ReviewLabelContainer>
          <FieldPreview
            label="Previous Membership Number"
            value={secondaryApplicant.previousMembershipNumber || 'N/A'}
            divider
          />
          <FieldPreview
            label="First Name"
            value={secondaryApplicant.firstName}
            divider
          />
          <FieldPreview
            label="Last Name"
            value={secondaryApplicant.lastName}
            divider
          />
          <FieldPreview label="Age" value={secondaryApplicant.age} divider />
          <FieldPreview
            label="Date of Birth"
            value={secondaryApplicant.dateOfBirth}
          />
        </ReviewSection>
      )}
      <ReviewSection>
        <ReviewLabelContainer>
          <h2 sx={{ variant: 'headings.h4' }}>Address</h2>
          <Button variant="contained" onClick={() => setStep(3)}>
            Edit
          </Button>
        </ReviewLabelContainer>
        <FieldPreview
          label="Address Line 1"
          value={address.addressPrimary}
          divider
        />
        <FieldPreview
          label="Address Line 2"
          value={address.addressSecondary}
          divider
        />
        <FieldPreview label="City" value={address.city} divider />
        <FieldPreview label="State" value={address.state} divider />
        <FieldPreview label="Postal Code" value={address.postalCode} />
      </ReviewSection>
      <div sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          type="button"
          variant="contained"
          onClick={() => setStep(step - 1)}
        >
          &larr; Back
        </Button>
        <form onSubmit={(e) => finalSubmit(e)}>
          <Button type="submit" variant="contained">
            Submit Application
          </Button>
        </form>
      </div>
    </section>
  );
};

const ReviewLabelContainer: React.FC<{}> = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      flexFlow: 'row no-wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: '0, 0 50%',
    }}
  >
    {children}
  </Box>
);

const ReviewSection: React.FC<{}> = ({ children }) => (
  <Box
    sx={{
      padding: 3,
      backgroundColor: '#fff',
      border: 1,
      borderRadius: 1,
      marginBottom: [2, 3, 4],
      boxShadow: 2,
      minWidth: '320px',
      maxWidth: '1300px',
    }}
  >
    {children}
  </Box>
);

export default FormReview;