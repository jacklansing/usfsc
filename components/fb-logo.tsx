/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {}

const FBLogo: React.FC<Props> = ({}) => {
  return (
    <motion.a
      aria-label="facebook link"
      whileHover={{ scale: 1.6 }}
      href="https://www.facebook.com/unc.sam.14"
      target="_blank"
      rel="noreferrer"
      sx={{ display: 'inline' }}
    >
      <img
        sx={{
          display: 'inherit',
          height: '30px',
          mt: ['2px', null, null, null, null, '5px'],
          ml: [0, null, 2],
        }}
        src="f-logo.png"
      />
    </motion.a>
  );
};

export default FBLogo;
