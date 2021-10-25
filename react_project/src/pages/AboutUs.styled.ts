import styled from 'styled-components';

const wrapper = {
  default: 'padding: 128px 0;',
  small: 'padding: 48px 0;',
  header: 'padding: 80px 0 128px 0;',
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
