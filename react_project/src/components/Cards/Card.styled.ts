import styled from 'styled-components';

interface Props {
  primary?: boolean;
}

export const StyledServiceCard = styled.div`
  background-color: ${({ primary }: Props) =>
    primary ? `var(--primary-color)` : `var(--white-color)`};

  color: ${({ primary }: Props) =>
    primary ? `var(--white-color)` : `var(--black-color)`};

  width: 316px;
  height: 232px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ primary }: Props) =>
      primary ? `var(--white-color)` : `var(--black-color)`};

    width: 46px;
  }
`;
