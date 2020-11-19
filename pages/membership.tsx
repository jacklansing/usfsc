/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';
import LayoutAnimated from '../components/utils/layout-animated';
import Nav from '../components/nav';

interface Props {}

const Membership: React.FC<Props> = ({}) => {
  return (
    <LayoutAnimated>
      <motion.h1
        initial={{ y: 64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        sx={{ textAlign: 'center', marginTop: 5, variant: 'headings.h1' }}
      >
        US Figure Skating Club Application
      </motion.h1>
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
        <NextLink href={`/membership-application`}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            sx={{
              variant: 'text.postPreviewLink',
              mt: 4,
              mb: 4,
            }}
          >
            Click Here to Complete the Applicaiton Online
          </motion.a>
        </NextLink>
        <NextLink href={`/usfsc_membership_application.pdf`}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            sx={{
              variant: 'text.postPreviewLink',
            }}
          >
            Click Here to Download the Application
          </motion.a>
        </NextLink>
      </Box>
    </LayoutAnimated>
  );
};

export default Membership;
