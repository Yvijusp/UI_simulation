import styled from 'styled-components';
import { Title01 } from '../../GlobalStyle';
import { Logo } from '../Feature/Feature.styled';

interface Props {
  primary?: boolean;
}

interface OverlayProps {
  color?: string;
  image?: string;
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

export const StyledOverlayCard = styled.div`
  position: relative;
  width: 640px;
  height: 629px;

  background: ${({ image }: OverlayProps) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;

  color: var(--white-color);

  h4:first-child {
    margin-bottom: 32px;
  }

  h4:last-child {
    padding: 0 10px 0 0;
    opacity: 0.7;
  }
`;

export const Overlay = styled.div`
  background-color: ${({ color }: OverlayProps) =>
    color === 'primary'
      ? 'rgba(248, 91, 41, 0.9)'
      : color === 'secondary'
      ? 'rgba(116, 67, 202, 0.9)'
      : color === 'dark'
      ? 'rgba(0, 0, 0, 0.9)'
      : 'transparent'};

  padding: 139px 99px;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const StyledFeatureCard = styled.div`
  height: 424px;
  width: 427px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 104px 66px 88px 66px;
  background-color: var(--white-color);

  ${Title01} {
    margin-bottom: 16px;
    text-align: center;
  }

  p {
    text-align: center;
    font-size: var(--paragraph-med);
    font-weight: 600;
    line-height: 175%;
    color: #232536;

    opacity: 0.6;
  }

  ${Logo} {
    background-color: #ffdace;
    margin-bottom: 24px;
    width: 64px;
    height: 64px;
  }
`;
