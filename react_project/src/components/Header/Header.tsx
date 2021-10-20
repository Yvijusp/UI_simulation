import { Assitance, Line, Logo, Nav, StyledHeader } from './Header.styled';
import BrandLogo from '../../assets/logo/Logo.png';
import { Caption, Container } from '../../GlobalStyles';
import { Link } from 'react-router-dom';
import { ReactComponent as AssitanceLogo } from '../../assets/logo/Assistance.svg';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo>
          <img src={BrandLogo} alt='finsweet' />
        </Logo>
        <Nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/contacts'>Contact</Link>
            </li>
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
