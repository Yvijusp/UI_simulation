import { Assitance, Line, Logo, Nav, StyledHeader } from './Header.styled';
import BrandLogo from '../../assets/logo/Logo.png';
import { Caption, Container } from '../../GlobalStyle';
import { Link } from 'react-router-dom';
import { ReactComponent as AssitanceLogo } from '../../assets/logo/Assistance.svg';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo>
          <Link to='/'>
            <img src={BrandLogo} alt='finsweet' />
          </Link>
        </Logo>
        <Nav>
          <ul>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/aboutus'>
              <li>About Us</li>
            </Link>
            <Link to='/services'>
              <li>Services</li>
            </Link>
            <Link to='/blog'>
              <li>Blog</li>
            </Link>
            <Link to='/contacts'>
              <li>Contact</li>
            </Link>
          </ul>
          <Line />
          <Assitance>
            <AssitanceLogo />
            <div>
              <Caption>Road Assitance</Caption>
              <p>1800 265 24 52</p>
            </div>
          </Assitance>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
