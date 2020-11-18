/** @jsxRuntime classic */
/** @jsx jsx */
import { Divider, jsx } from 'theme-ui';
import React from 'react';

interface Props {
  label: string;
  value: string;
  divider?: boolean;
}

const FieldPreview: React.FC<Props> = ({ label, value, divider = false }) => {
  return (
    <React.Fragment>
      <div>
        <p>{label}</p>
        <p>{value}</p>
      </div>
      {divider ? <Divider /> : null}
    </React.Fragment>
  );
};

export default FieldPreview;
