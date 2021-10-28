import { Link } from 'react-router-dom';
import { Copyright, Logo, Nav, StyledFooter } from './Footer.styled';
import BrandLogo from '../../assets/logo/Logofooter.png';
import { Container } from '../../GlobalStyle';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Logo>
          <img src={BrandLogo} alt='footer' />
        </Logo>
        <Nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/aboutus'>About Us</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/contacts'>Contact Us</Link>
            </li>
          </ul>
        </Nav>
        <Copyright>&copy; Copyright Finsweet 2021</Copyright>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
