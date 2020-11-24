/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import MembershipForm from '../components/membership-form/membership-form';
import LayoutAnimated from '../components/utils/layout-animated';
import Meta from '../components/utils/meta';
import AnimatedLink from '../components/utils/animated-link';

interface Props {}

const MembershipApplication: React.FC<Props> = ({}) => {
  return (
    <LayoutAnimated>
      <Meta
        title="Membership Application | Uncle Sam Figure Skating Club"
        canonicalUrl="https://unclesamfsc.com/membership-application"
        ogUrl="https://unclesamfsc.com/membership-application"
        ogTitle="USFSC Membership Application"
        desc="Application to renew your US Figure Skating membership via Uncle Sam Figure Skating Club."
      />
      <div
        sx={{
          width: ['318', '500px', '600px', '600px'],
          mx: 'auto',
          mt: 3,
          padding: [3, , , 0],
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
          <AnimatedLink
            href="/news"
            sx={{
              mx: 0,
            }}
          >
            Home
          </AnimatedLink>
        </div>
        <MembershipForm />
      </div>
    </LayoutAnimated>
  );
};

export default MembershipApplication;
