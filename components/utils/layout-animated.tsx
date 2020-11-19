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
    >
      {children}
    </motion.main>
  );
};

export default LayoutAnimated;
