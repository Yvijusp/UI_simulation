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
