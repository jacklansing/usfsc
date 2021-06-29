/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import React from 'react';

interface Props {}

const LayoutAnimated: React.FC<Props> = ({ children }) => {
  return (
    <div sx={{ position: 'relative' }}>
      <div
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          width: '100vw',
          height: '35vh',
          backgroundImage:
            'linear-gradient(to bottom, #2980b9, #6dd5fa, #ffffff);',
        }}
      />
      <motion.main
        initial="initial"
        exit={{ opacity: 0 }}
        animate="animate"
        transition={{ delay: 0.2 }}
        sx={{
          padding: [3, , , 0],
          mx: 'auto',
          maxWidth: [null, '540px', '700px', '1100px', '1366px'],
          position: 'relative',
        }}
      >
        {children}
      </motion.main>
    </div>
  );
};

export default LayoutAnimated;
