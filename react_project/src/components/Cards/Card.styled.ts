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

export const StyledTeamCard = styled.div`
  width: 405px;
  height: 432px;
  position: relative;
`;

export const TeamCardBody = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;

  text-align: center;
  height: 116px;
  background-color: #161616;
  color: white;
  padding: 24px;

  p {
    margin-top: 4px;
    font-size: var(--paragraph-sm);
    opacity: 0.7;
  }
`;
