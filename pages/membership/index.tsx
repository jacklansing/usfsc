/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import React from 'react';
import LayoutAnimated from '../../components/utils/layout-animated';
import Nav from '../../components/nav';
import Meta from '../../components/utils/meta';
import AnimatedLink from '../../components/utils/animated-link';
import AnimatedHeading from '../../components/utils/animated-heading';

interface Props {}

const Membership: React.FC<Props> = ({}) => {
  return (
    <LayoutAnimated>
      <Meta
        title="Membership | Uncle Sam Figure Skating Club"
        canonicalUrl="https://unclesamfsc.com/membership"
        ogUrl="https://unclesamfsc.com/membership"
        ogTitle="USFSC Membership"
        desc="Start here to begin renewing your US Figure Skating membership online or by downloading the application to be mailed or handed in."
      />
      <AnimatedHeading>US Figure Skating Club Application</AnimatedHeading>
      <Nav />
      <Box
        mx="auto"
        sx={{
          maxWidth: '90ch',
          overflow: 'hidden',
          marginBottom: 3,
        }}
      >
        <p sx={{ variant: 'text.body' }}>
          To renew your USFSC membership, you may complete the online form or
          download and print out the form to be mailed in.
        </p>
        <AnimatedLink
          href="/membership/membership-application"
          sx={{
            mt: 4,
            mb: 4,
          }}
        >
          Click Here to Complete the Application Online
        </AnimatedLink>
        <AnimatedLink href="/usfsc_membership_application.pdf">
          Click Here to Download the Application
        </AnimatedLink>
      </Box>
      <Box
        mx="auto"
        sx={{
          maxWidth: '90ch',
          overflow: 'hidden',
          marginTop: 5,
          textAlign: 'center',
        }}
      >
        <h2
          sx={{
            variant: 'headings.h2',
          }}
        >
          Looking for a basic skills program?
        </h2>
        <p sx={{ variant: 'text.body' }}>
          Check out{' '}
          <a
            sx={{ textDecoration: 'none' }}
            href="https://www.learntoskateusa.com/"
            target="_blank"
            rel="noreferrer"
          >
            Learn to Skate USA!
          </a>
        </p>
      </Box>
    </LayoutAnimated>
  );
};

export default Membership;
