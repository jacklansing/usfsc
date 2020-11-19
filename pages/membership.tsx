/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import MembershipForm from '../components/membership-form/membership-form';

interface Props {}

const Membership: React.FC<Props> = ({}) => {
  return (
    <main>
      <div
        sx={{
          width: ['318', '500px', '600px', '600px'],
          mx: 'auto',
          mt: 5,
        }}
      >
        <MembershipForm />
      </div>
    </main>
  );
};

export default Membership;
