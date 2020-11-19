/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Box } from 'theme-ui';

interface Props {}

const FieldContainer: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        variant: 'forms.fieldContainer',
      }}
    >
      {children}
    </Box>
  );
};

export default FieldContainer;
