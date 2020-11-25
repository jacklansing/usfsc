/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import React from 'react';
import AnimatedHeading from '../../components/utils/animated-heading';
import LayoutAnimated from '../../components/utils/layout-animated';
import AnimatedLink from '../../components/utils/animated-link';

interface Props {}

const PaymentSuccess: React.FC<Props> = ({}) => {
  return (
    <LayoutAnimated>
      <AnimatedHeading>Success!</AnimatedHeading>
      <Box
        sx={{
          maxWidth: '800px',
          mx: 'auto',
        }}
      >
        <p sx={{ textAlign: 'center', fontSize: 4 }}>
          You have successfully paid for your new membership!
        </p>
        <p sx={{ textAlign: 'center', fontSize: 4 }}>
          Once your membership has been processed, you will receive a follow-up
          email to let you know.
        </p>
        <p sx={{ textAlign: 'center', fontSize: 4 }}>
          If you have any questions, please feel free to contact us at{' '}
          <a href="mailto:unclesamtroy@gmail.com">unclesamtroy@gmail.com</a>
        </p>
      </Box>
      <AnimatedLink href="/news">Click Here To Go Back Home</AnimatedLink>
    </LayoutAnimated>
  );
};

export default PaymentSuccess;
