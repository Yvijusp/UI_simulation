import styled from 'styled-components';
import { Container } from '../../GlobalStyle';

export const StyledHeader = styled.header`
  background-color: var(--white-color);

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.div`
  width: 121.41px;
`;

export const Nav = styled.nav`
  display: flex;

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      padding: 32px 40px;
      a {
        color: var(--black-color);
        text-decoration: none;
        font-size: var(--paragraph-sm);
        font-weight: 600;
        line-height: 28px;
      }
    }
  }
`;

export const Line = styled.div`
  border: 1px solid #939191;
  opacity: 0.36;
  margin: 24px 32px;
`;

export const Assitance = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  p:last-child {
    font-weight: 600;
    font-size: var(--paragraph-med);
    line-height: 175%;
  }
`;
