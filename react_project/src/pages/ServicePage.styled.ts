import styled from 'styled-components';
import { StyledServiceCard } from '../components/Cards/Card.styled';
import { Logo } from '../components/Feature/Feature.styled';
import { wrapper } from './Services.styled';

export const ServicePageWrapper = styled.section`
  ${wrapper.header}

  h1 {
    margin-bottom: 96px;
  }
`;

export const ServiceContainer = styled.section``;

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

export const ServiceContent = styled.div``;
