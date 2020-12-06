/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import React from 'react';

interface Props {}

const LayoutAnimated: React.FC<Props> = ({ children }) => {
  return (
    <motion.main
      initial="initial"
      exit={{ opacity: 0 }}
      animate="animate"
      transition={{ delay: 0.2 }}
      sx={{
        padding: [3, , , 0],
        mx: 'auto',
        maxWidth: [null, '540px', '700px', '1100px', '1366px'],
      }}
    >
      {children}
    </motion.main>
  );
};

export default LayoutAnimated;
