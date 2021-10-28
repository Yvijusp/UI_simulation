import styled from 'styled-components';
import { StyledServiceCard } from '../components/Cards/Card.styled';
import { Logo } from '../components/Feature/Feature.styled';
import { Title01 } from '../GlobalStyle';
import { wrapper } from './Services.styled';

export const ServicePageWrapper = styled.section`
  ${wrapper.header}

  h1 {
    margin-bottom: 96px;
  }
`;

export const ServiceContainer = styled.section`
  display: flex;
  gap: 96px;
`;

export const ServiceSideBar = styled.div`
  max-width: 328px;

  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const SideBarServices = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 26px;

  ${StyledServiceCard} {
    width: 264px;
    height: 158px;
  }
`;

export const SideBarFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;

  ${Logo} {
    background-color: #f5f5f5;
  }
`;

export const ServiceContent = styled.div`
  img {
    margin-bottom: 56px;
  }

  h4 {
    margin-bottom: 24px;
  }

  p {
    font-size: var(--paragraph-sm);
    font-weight: 600;
    line-height: 28px;
    color: var(--black-color);
    opacity: 0.6;
  }

  p:first-of-type {
    margin-bottom: 68px;
  }

  P:nth-of-type(2) {
    margin-bottom: 32px;
  }

  ${Title01} {
    margin-bottom: 24px;
  }
`;

export const ServiceContentEnd = styled.div`
  display: flex;
  align-items: center;

  span {
    display: block;
    font-size: var(--paragraph-med);
    font-weight: 600;
    line-height: 31.5px;
    color: var(--black-color);
    opacity: 0.6;
    margin-left: 32.46px;
  }
`;

export const Line = styled.div`
  border: 3px solid #1e1b1b;
  height: 112px;
`;
