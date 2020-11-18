/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

interface Props {}

const FloatingLogo: React.FC<Props> = ({}) => {
  return (
    <div
      sx={{
        maxWidth: 1366,
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
      }}
    >
      <div
        sx={{
          height: '300px',
          width: '300px',
          position: 'absolute',
          backgroundImage: 'url(/blob.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'fit',
          opacity: 0.8,
          top: -50,
          left: -100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={'/unc-sam-logo.png'}
          sx={{
            height: '150px',
          }}
        />
      </div>
    </div>
  );
};

export default FloatingLogo;
