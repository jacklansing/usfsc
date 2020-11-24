/** @jsxRuntime classic */
/** @jsx jsx */
import { useRouter } from 'next/router';
import React, { FormEvent, useEffect, useState } from 'react';
import { jsx, Box, Divider, Spinner, Button } from 'theme-ui';
import LayoutAnimated from '../../../components/utils/layout-animated';
import {
  getMembershipAppById,
  markMembershipAppReviewed,
} from '../../../lib/membershipAppRequests';
import { userPrivateRoute } from '../../../lib/utils/usePrivateRoute';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import SpinnerButton from '../../../components/utils/SpinnerButton';

interface Props {}

const ReviewMembership: React.FC<Props> = ({}) => {
  userPrivateRoute();
  const router = useRouter();
  const memberAppId = router.query.id;

  const [loading, setLoading] = useState(false);
  const [memberApp, setMemberApp] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const membershipApp = await getMembershipAppById(memberAppId as string);
      setMemberApp(membershipApp);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <Spinner
        sx={{
          display: 'block',
          mx: 'auto',
          height: '300px',
          width: '300px',
          mt: '10%',
        }}
      />
    );
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await markMembershipAppReviewed(memberApp.id);
      setSubmitting(false);
      router.push('/admin/membership-applications');
    } catch (e) {
      console.error(`Something went wrong marking application as reivewed`, e);
      setSubmitting(false);
    }
  };

  return (
    <LayoutAnimated>
      <Box
        sx={{
          my: 2,
          mx: 'auto',
          p: 4,
          width: '1200px',
        }}
      >
        <NextLink href={'/admin/membership-applications'} passHref>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            sx={{
              variant: 'text.postPreviewLink',
              borderRadius: 2,
              mr: 0,
              ml: 'auto',
              mb: 4,
              fontFamily: 'monospace',
            }}
          >
            &larr; Back
          </motion.a>
        </NextLink>
        {memberApp && (
          <React.Fragment>
            <h2>Application Type</h2>
            <Divider />
            <AppFieldGroup>
              <AppField
                title="Membership Type"
                value={memberApp.membership_type}
              />
              <AppField
                title="Submitted"
                value={new Date(memberApp.created_at).toLocaleDateString()}
              />
            </AppFieldGroup>
            <h2>Application Status</h2>
            <Divider />
            <AppFieldGroup>
              <AppField
                title="Payment Received"
                value={memberApp.payment_received ? 'Yes 👍' : 'No ❌'}
              />
              <AppField
                title="Review Status"
                value={
                  memberApp.application_reviewed ? 'Reviewed 👍' : 'Pending ⌚'
                }
              />
            </AppFieldGroup>
            <h2>Contact Info</h2>
            <Divider />
            <AppFieldGroup>
              <AppField title="Phone" value={memberApp.phone} />
              <AppField title="Email" value={memberApp.email} />
            </AppFieldGroup>
            <h2>Applicant Info</h2>
            <Divider />
            <AppFieldGroup>
              <AppField
                title="First Name"
                value={memberApp.primary_applicant_first_name}
              />
              <AppField
                title="Last Name"
                value={memberApp.primary_applicant_last_name}
              />
              <AppField title="Age" value={memberApp.primary_applicant_age} />
              <AppField
                title="Date of Birth"
                value={memberApp.primary_applicant_dob}
              />
            </AppFieldGroup>
            {!memberApp.secondary_applicant_first_name ? null : (
              <React.Fragment>
                <h2>Secondary Applicant Info</h2>
                <Divider />
                <AppFieldGroup>
                  <AppField
                    title="First Name"
                    value={memberApp.secondary_applicant_first_name}
                  />
                  <AppField
                    title="Last Name"
                    value={memberApp.secondary_applicant_last_name}
                  />
                  <AppField
                    title="Age"
                    value={memberApp.secondary_applicant_age}
                  />
                  <AppField
                    title="Date of Birth"
                    value={memberApp.secondary_applicant_dob}
                  />
                </AppFieldGroup>
              </React.Fragment>
            )}
            <h2>Address</h2>
            <Divider />
            <AppFieldGroup>
              <AppField
                title="Address Line 1"
                value={memberApp.address_line_one}
              />
              <AppField
                title="Address Line 2"
                value={memberApp.address_line_two}
              />
              <AppField title="City" value={memberApp.address_city} />
              <AppField title="State" value={memberApp.address_state} />
              <AppField
                title="Postal Code"
                value={memberApp.address_postal_code}
              />
              <div></div>
            </AppFieldGroup>
          </React.Fragment>
        )}
      </Box>
      <form onSubmit={(e) => handleSubmit(e)}>
        <SpinnerButton
          variant="contained"
          type="submit"
          isDisabled={submitting}
          isLoading={submitting}
          sx={{
            display: 'block',
            fontSize: 4,
            mb: 5,
            px: 3,
            mx: 'auto',
          }}
        >
          Mark As Reviewed
        </SpinnerButton>
      </form>
    </LayoutAnimated>
  );
};

interface AppFieldProps {
  title: string;
  value: string;
}

const AppField: React.FC<AppFieldProps> = ({ title, value }) => {
  return (
    <p>
      <strong>{title + ': '}</strong>
      {value}
    </p>
  );
};

const AppFieldGroup: React.FC<{}> = ({ children }) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 1,
      alignContent: 'center',
      mb: 4,
    }}
  >
    {children}
  </Box>
);

export default ReviewMembership;
