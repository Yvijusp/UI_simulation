import Template from '../components/templates/Template';
import {
  Header,
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
} from './AboutUs.styled';
import Mechanic from '../assets/images/AboutUS/mechanic.png';
import Button from '../components/Buttons/Button';
import { Container } from '../GlobalStyle';

const AboutUs = () => {
  return (
    <Template>
      <HeaderWrapper>
        <Container>
          <Header>
            <HeaderRight>
              <img src={Mechanic} alt='mechanic' />
            </HeaderRight>
            <HeaderLeft>
              <h1>About Us</h1>
              <p>
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw Through True Rich Attended does
              </p>
              <Button primary text='Book a service' />
            </HeaderLeft>
          </Header>
        </Container>
      </HeaderWrapper>
    </Template>
  );
};

export default AboutUs;
