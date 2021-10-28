import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
}

interface ArrowButtonProps {
  right?: boolean;
  left?: boolean;
}

export const StyledButton = styled.button`
  border: none;
  border-radius: 12px;
  cursor: pointer;
  padding: 16px 40px;

  background: ${({ primary, secondary }: ButtonProps) =>
    primary
      ? ` var(--primary-color)`
      : secondary
      ? `var(--black-color)`
      : `var(--primary-color)`};

  color: var(--white-color);
`;

export const StyledArrowButtons = styled.button`
  outline: none;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition: ease-in 200ms transform;

  :hover {
    transform: scale(1.1);
  }

  ${({ right }: ArrowButtonProps) =>
    right &&
    `
  background-color: var(--black-color);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 62px;
  height: 62px;
  

  svg {
    fill: var(--white-color);
    width:28px;
  }
  
 
  `}

  ${({ left }: ArrowButtonProps) =>
    left &&
    `
  width: 48px;
  height: 48px;
  background-color: var(--white-color);

  svg {
    width: 20px;
    transform: rotate(-180deg);
    fill: var(--black-color);
  }
  
  `}
`;
