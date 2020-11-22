/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import NextLink from 'next/link';
import MembershipForm from '../components/membership-form/membership-form';
import { motion } from 'framer-motion';
import LayoutAnimated from '../components/utils/layout-animated';

interface Props {}

const MembershipApplication: React.FC<Props> = ({}) => {
  return (
    <LayoutAnimated>
      <div
        sx={{
          width: ['318', '500px', '600px', '600px'],
          mx: 'auto',
          mt: 3,
        }}
      >
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h1 sx={{ textAlign: 'left', variant: 'headings.h2' }}>
            Membership Application
          </h1>
          <NextLink href={`/news`}>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              sx={{
                variant: 'text.postPreviewLink',
                mx: 0,
              }}
            >
              Home
            </motion.a>
          </NextLink>
        </div>
        <MembershipForm />
      </div>
    </LayoutAnimated>
  );
};

export default MembershipApplication;
