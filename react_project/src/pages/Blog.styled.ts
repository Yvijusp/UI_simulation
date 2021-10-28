import styled from 'styled-components';
import F1 from '../assets/images/blog/f1car.png';
import { wrapper } from './Services.styled';

export const BlogHeaderWrapper = styled.section``;

export const BlogHeaderImage = styled.div`
  position: relative;
  background: url(${F1});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 624px;

  display: flex;
`;

export const BlogImageOverlay = styled.div`
  width: 867px;
  height: 100%;

  background: rgba(30, 27, 27, 0.8);
  color: var(--white-color);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlogHeaderContentContainer = styled.div`
  width: 1053px;
  padding: 128px 64px;

  background: #1e1b1b;
  mix-blend-mode: normal;
  opacity: 0.99;

  color: white;
`;

export const BlogHeaderContent = styled.div`
  padding-right: 375px;

  span:nth-child(1) {
    display: block;
    color: var(--primary-color);
    text-transform: uppercase;
    font-weight: 500;
    font-size: var(--paragraph-sm);
    line-height: 28px;

    letter-spacing: 0.24em;
    margin-bottom: 12px;
  }

  h4 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 48px;
    font-weight: 600;
    font-size: var(--paragraph-med);
    line-height: 175%;
  }

  button {
    margin-right: 32px;
  }

  div {
    span {
      opacity: 0.8;
      font-weight: 600;
      font-size: var(--paragraph-med);
      line-height: 175%;
    }
  }
`;

export const BlogFourWrapper = styled.section`
  ${wrapper.default}
  background-color: #F5F5F5;
`;

export const BlogFourSection = styled.section`
  display: flex;
  gap: 32px;
`;

export const BlogFourLeft = styled.div`
  padding: 32px;
  width: 537px;
  background-color: var(--white-color);

  img {
    max-width: 473px;
    margin-bottom: 32px;
  }

  h4 {
    margin-bottom: 16px;
  }

  p {
    color: #939191;
    font-size: var(paragraph-sm);
    font-weight: 600;
    line-height: 28px;
  }

  p:nth-of-type(1) {
    opacity: 0.8;
    margin-bottom: 16px;
  }
  p:nth-of-type(2) {
    color: #232536;
    opacity: 0.6;
    margin-bottom: 32px;
  }

  a {
    color: var(--black-color);
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: var(--paragraph-med);
    line-height: 175%;
    font-weight: 600;

    span {
      margin-right: 16px;
    }
  }
`;

export const BlogFourRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  max-width: 700px;
`;

export const BlogFullWrapper = styled.section`
  ${wrapper.default}
`;

export const BlogFullContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 64px 32px;
`;
