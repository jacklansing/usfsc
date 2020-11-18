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
          width: '33%',
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
