import React from 'react';
import { Button as ThemeButton, ButtonProps, Spinner } from 'theme-ui';

interface ButtonOptions extends ButtonProps {
  props?: ButtonProps;
  variant: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  type?: 'button' | 'reset' | 'submit';
}

const SpinnerButton: React.FC<ButtonOptions> = ({
  children,
  isLoading = false,
  isDisabled = false,
  variant = 'contained',
  type = 'button',
  ...props
}) => {
  return (
    <ThemeButton
      type={type}
      variant={variant}
      disabled={isLoading || isDisabled}
      {...props}
    >
      {isLoading ? (
        <Spinner
          sx={{ color: 'white', height: '1.3em', verticalAlign: 'middle' }}
        />
      ) : (
        children
      )}
    </ThemeButton>
  );
};

export default SpinnerButton;
