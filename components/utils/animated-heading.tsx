/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  /**
   * Animation delay. Defaults to 0.2
   */
  delay?: number;
}

/**
 * Animated h1 that slides and fades in.
 * Override styles using the sx prop.
 */
const AnimatedHeading: React.FC<Props> = ({
  delay = 0.2,
  children,
  ...props
}) => {
  return (
    <motion.h1
      initial={{ y: 64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: delay }}
      sx={{ textAlign: 'center', marginTop: 5, variant: 'headings.h1' }}
      {...props}
    >
      {children}
    </motion.h1>
  );
};

export default AnimatedHeading;
