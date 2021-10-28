import styled from 'styled-components';
import { Title02 } from '../GlobalStyle';

const wrapper = {
  default: 'padding: 128px 0;',
  small: 'padding: 48px 0;',
  header: 'padding: 80px 0 128px 0;',
  bottom: 'padding: 0 0 128px 0',
};

export const HeaderWrapper = styled.section`
  ${wrapper.header}
`;

export const ServicesWrapper = styled.section`
  background-color: #f5f5f5;
  ${wrapper.default}
`;

export const ServicesContainer = styled.section`
  display: flex;
  gap: 32px;
`;

export const ServicesLeft = styled.div`
  background-color: var(--white-color);
  padding: 64px 48px;

  max-width: 624px;

  img {
    margin-bottom: 32px;
  }

  h3 {
    margin-bottom: 16px;
  }

  ${Title02} {
    color: var(--black-color);
    opacity: 0.6;

    margin-bottom: 32px;
  }

  a {
    color: var(--black-color);
    font-size: var(--paragraph-med);
    line-height: 175%;
    font-weight: 600;
    text-decoration: none;
    display: flex;
    align-items: center;

    span {
      margin-right: 16px;
    }
  }
`;

export const ServicesRight = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(2, 1fr);
`;

export const HowWrapper = styled.section`
  ${wrapper.default}
`;

export const HowContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const HowTop = styled.section`
  display: flex;
  justify-content: space-between;
  ${wrapper.bottom}
`;

export const HowTopLeft = styled.div`
  max-width: 500px;

  h3 {
    margin-bottom: 48px;
  }

  div {
    margin-bottom: 32px;
  }
  div:last-child {
    margin: 0;
  }
`;

export const HowTopRight = styled.div`
  display: flex;
  gap: 16px;

  img {
    height: 477px;
  }
`;

export const HowBottom = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const HowBottomLeft = styled.div`
  display: flex;
  gap: 16px;

  img {
    height: 489px;
  }
`;

export const HowBottomRight = styled.div`
  max-width: 547px;
  position: relative;

  h3 {
    margin-bottom: 32px;
  }

  p {
    font-size: var(--paragraph-med);
    opacity: 0.6;
    color: var(--black-color);
    line-height: 175%;
    font-weight: 600;
    width: 512px;

    margin-bottom: 32px;
  }

  button {
    position: absolute;
    bottom: 0;
  }
`;
