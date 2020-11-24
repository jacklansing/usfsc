/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx, Spinner } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import LayoutAnimated from '../../components/utils/layout-animated';
import { getMembershipApps } from '../../lib/membershipAppRequests';
import { userPrivateRoute } from '../../lib/utils/usePrivateRoute';
import { motion } from 'framer-motion';
import formatPostDate from '../../lib/utils/formatPostDate';
import AnimatedLink from '../../components/utils/animated-link';
import AnimatedHeading from '../../components/utils/animated-heading';

interface Props {}

const MembershipApplications: React.FC<Props> = ({}) => {
  userPrivateRoute();
  const [membershipApps, setMembershipApps] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const membershipApps = await getMembershipApps();
      setMembershipApps(membershipApps);
      setLoading(false);
    })();
  }, []);

  return (
    <LayoutAnimated>
      <AnimatedHeading>Membership Applications</AnimatedHeading>
      <Box
        sx={{
          maxWidth: '600px',
          mx: 'auto',
        }}
      >
        {loading ? (
          <Spinner
            sx={{
              display: 'block',
              mx: 'auto',
              height: '150px',
              width: '150px',
              mt: '10%',
            }}
          />
        ) : (
          membershipApps.map((app) => (
            <AnimatedLink
              href={`/admin/review-membership/${app.id}`}
              key={app.id}
              variant="none"
              sx={{
                textDecoration: 'none',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 40px',
                cursor: 'pointer',
              }}
            >
              <h2
                sx={{
                  variant: 'headings.h3',
                  pr: 4,
                }}
              >
                {`${app.primary_applicant_first_name} ${app.primary_applicant_last_name}`}
              </h2>
              <p
                sx={{
                  opacity: 0.8,
                }}
              >
                {formatPostDate(app.created_at)}
              </p>
              <p>{app.application_reviewed ? '👍' : '❌'}</p>
            </AnimatedLink>
          ))
        )}
      </Box>
    </LayoutAnimated>
  );
};

export default MembershipApplications;
