/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import React from 'react';
import LayoutAnimated from '../components/utils/layout-animated';
import Nav from '../components/nav';
import Meta from '../components/utils/meta';
import AnimatedLink from '../components/utils/animated-link';
import AnimatedHeading from '../components/utils/animated-heading';

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
          href="/membership-application"
          sx={{
            mt: 4,
            mb: 4,
          }}
        >
          Click Here to Complete the Applicaiton Online
        </AnimatedLink>
        <AnimatedLink href="/usfsc_membership_application.pdf">
          Click Here to Download the Application
        </AnimatedLink>
      </Box>
    </LayoutAnimated>
  );
};

export default Membership;
