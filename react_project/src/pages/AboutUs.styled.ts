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

export const Header = styled.div`
  display: flex;
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
`;

export const HeaderRight = styled.div`
  img {
    width: 818px;
    height: 550px;
  }
`;

export const HeaderLeft = styled.div`
  width: 733px;
  height: 550px;
  position: absolute;
  right: 0;

  padding: 96px 98px;

  color: var(--lightgrey-color);

  background-color: var(--black-color);

  h1 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 48px;
    font-size: var(--paragraph-med);
    font-weight: 500;
    line-height: 175%;
  }
`;

export const StepsWrapper = styled.section`
  ${wrapper.bottom}
`;

export const Steps = styled.section`
  display: flex;
`;

export const StepsLeft = styled.div`
  padding-right: 67px;

  h3 {
    margin-bottom: 16px;
  }

  ${Title02} {
    margin-bottom: 48px;
    color: #232536;
    opacity: 0.6;
  }
`;

export const StepsRight = styled.div`
  img {
    width: 573px;
  }
`;

export const ColorsWrapper = styled.section`
  display: flex;
`;
