/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx, Spinner } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import LayoutAnimated from '../../components/utils/layout-animated';
import { getMembershipApps } from '../../lib/membershipAppRequests';
import { userPrivateRoute } from '../../lib/utils/usePrivateRoute';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import formatPostDate from '../../lib/utils/formatPostDate';

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
      <motion.h1
        initial={{ y: 64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        sx={{ textAlign: 'center', marginTop: 5, variant: 'headings.h1' }}
      >
        Membership Applications
      </motion.h1>
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
              height: '300px',
              width: '300px',
              mt: '10%',
            }}
          />
        ) : (
          membershipApps.map((app) => (
            <NextLink
              href={`/admin/review-membership/${app.id}`}
              passHref
              key={app.id}
            >
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
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
              </motion.a>
            </NextLink>
          ))
        )}
      </Box>
    </LayoutAnimated>
  );
};

export default MembershipApplications;
