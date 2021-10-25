import styled from 'styled-components';
import { Container } from '../../GlobalStyle';

export const StyledFooter = styled.footer`
  background-color: var(--black-color);

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.div`
  width: 121px;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li {
      padding: 64px 35px 64px 0;

      a {
        color: var(--white-color);
        text-decoration: none;
        font-size: var(--paragraph-sm);
      }
    }
  }
`;

export const Copyright = styled.p`
  font-size: var(--paragraph-sm);
  line-height: 28px;
  font-weight: 600;
  color: #939191;
`;

export const StyledFooterTop = styled.section`
  background-color: #1e1b1b;
  opacity: 0.98;
  padding: 128px 320px;

  color: white;

  ${Container} {
    display: flex;
  }
`;

export const FooterLeft = styled.div`
  width: 463px;
  margin-right: 193px;
  ul {
    margin-top: 64px;
    display: flex;
    list-style: none;
    li {
      color: var(--white-color);
      padding: 0 23.36px 0 0;
    }
  }
`;

export const FooterRight = styled.div`
  width: 471px;

  p {
    font-size: var(--paragraph-med);
    margin-bottom: 8px;
    opacity: 0.6;
  }
`;

export const StyledFooterInfo = styled.div`
  margin-bottom: 32px;
`;
