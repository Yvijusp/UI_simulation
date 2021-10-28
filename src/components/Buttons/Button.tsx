import React from 'react';
import { StyledButton } from './Button.styled';

type ButtonProps = {
  text: string;
  primary?: boolean;
  secondary?: boolean;
  clickHandler?: () => void;
};

const Button = ({ text, clickHandler, primary, secondary }: ButtonProps) => {
  return (
    <StyledButton
      onClick={clickHandler}
      primary={primary}
      secondary={secondary}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
