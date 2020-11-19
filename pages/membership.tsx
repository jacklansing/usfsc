/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import MembershipForm from '../components/membership-form/membership-form';
import { motion } from 'framer-motion';
import LayoutAnimated from '../components/utils/layout-animated';

interface Props {}

const Membership: React.FC<Props> = ({}) => {
  return (
    <LayoutAnimated>
      <div
        sx={{
          width: ['318', '500px', '600px', '600px'],
          mx: 'auto',
          mt: 5,
        }}
      >
        <MembershipForm />
      </div>
    </LayoutAnimated>
  );
};

export default Membership;
