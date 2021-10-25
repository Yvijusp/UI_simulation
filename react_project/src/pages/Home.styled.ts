import styled from 'styled-components';
import { StyledStrip } from '../components/Strip/Strip.styled';

export const HeaderWrapper = styled.section``;

export const Header = styled.section`
  display: flex;

  padding: 80px 0 128px 0;
`;

export const HeaderText = styled.div`
  padding: 82px 0;
  margin-right: 52px;

  h1 {
    margin-bottom: 32px;
  }

  button {
    margin-bottom: 48px;
  }
`;

export const OpenTime = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 13.05px;

    span {
      font-size: var(--paragraph-sm);
      color: #939191;
    }
    p {
      font-size: var(--paragraph-med);
      font-weight: 600;
      line-height: 175%;
    }
  }
`;

export const HeaderImage = styled.div`
  padding: 0 30px;
  position: relative;

  width: 50%;

  img {
    width: 605px;
    height: 632px;
  }

  ${StyledStrip}:first-child {
    position: absolute;
    top: 81px;
    left: -10px;
  }

  ${StyledStrip}:last-child {
    position: absolute;
    bottom: 70px;
    right: -20px;
  }
`;

export const QuoteWrapper = styled.section`
  background-color: var(--steelgrey-color);
`;

export const Quote = styled.section`
  display: flex;
  padding: 128px 0;
`;

export const QuoteLeft = styled.div`
  margin-right: 71px;
  width: 50%;

  h2 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 53px;
  }

  div {
    margin-bottom: 32px;
  }

  span {
    margin-left: calc(47px + 16px);
    a {
      text-decoration: none;
      color: var(--black-color);
      font-size: var(--paragraph-med);
      font-weight: 600;
    }

    svg {
      margin-left: 21px;
    }
  }
`;

export const QuoteRight = styled.div`
  width: 50%;
  padding: 0 30px;

  h3 {
    margin-bottom: 32px;
  }

  input {
    margin-bottom: 4px;
  }

  input:last-of-type {
    margin-bottom: 48px;
  }
`;

export const ProcessWrapper = styled.section`
  padding: 128px 0;
`;

export const Process = styled.section`
  display: flex;
`;

export const ProcessLeft = styled.div`
  width: 50%;
  padding-right: 131px;

  h2 {
    margin-bottom: 16px;
  }

  p {
    opacity: 0.6;
    margin-bottom: 48px;
    max-width: 437px;
  }
`;

export const ProcessRight = styled.div`
  width: 50%;
`;

export const OfferWrapper = styled.section`
  background-color: #f2f2f2;
  padding: 128px 0;
`;

export const Offer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OfferHeader = styled.div`
  text-align: center;
  padding: 0 270px;
`;

export const OfferGrid = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

export const OfferFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 1288px;
  margin-top: 32px;
  p {
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      color: var(--black-color);
      font-size: var(--paragraph-med);
      font-weight: 600;
      margin-right: 16px;
    }
  }
`;

export const ExperienceWrapper = styled.section`
  background-color: #fafafa;
  padding: 48px 0;
`;

export const ExperienceBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BrandsWrapper = styled.section`
  padding: 128px 0;
  h3 {
    text-align: center;
    margin-bottom: 41.21px;
  }
`;

export const BrandsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const TestimonialsWrapper = styled.section`
  padding: 128px 0;
  background: #f2f2f2;

  h3 {
    text-align: center;
    width: 909px;
    margin: 0 auto 94px auto;
  }
`;
