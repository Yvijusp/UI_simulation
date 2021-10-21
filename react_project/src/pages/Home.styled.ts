import styled from 'styled-components';
import { StyledStrip } from '../components/Strip/Strip.styled';

export const StyledHome = styled.section``;

export const Header = styled.section`
  display: flex;

  padding: 80px 0;
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
