import styled from 'styled-components';
import F1 from '../assets/images/blog/f1car.png';

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
