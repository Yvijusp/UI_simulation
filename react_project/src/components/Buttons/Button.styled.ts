import styled from 'styled-components';

interface Props {
  primary?: boolean;
  secondary?: boolean;
}

export const StyledButton = styled.button`
  border: none;
  border-radius: 12px;
  cursor: pointer;
  padding: 16px 40px;

  background: ${({ primary, secondary }: Props) =>
    primary
      ? ` var(--primary-color)`
      : secondary
      ? `var(--black-color)`
      : `var(--primary-color)`};

  color: var(--white-color);
`;
