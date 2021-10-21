import { Clock } from '../assets/icons';
import Button from '../components/Buttons/Button';
import Strip from '../components/Strip/Strip';
import Template from '../components/templates/Template';
import { Container, Title02 } from '../GlobalStyle';
import {
  Header,
  HeaderImage,
  HeaderText,
  OpenTime,
  StyledHome,
} from './Home.styled';
import Mechanic from '../assets/images/Home/mechanic.png';

const Home = () => {
  return (
    <Template>
      <StyledHome>
        <Container>
          <Header>
            <HeaderText>
              <h1>Get your vehicle service done online at one place</h1>
              <Button text='Book a service' primary />

              <OpenTime>
                <Clock />
                <div>
                  <span>We are open</span>
                  <p>Monay to Friday 9:00 AM to 10:00 AM</p>
                </div>
              </OpenTime>
            </HeaderText>
            <HeaderImage>
              <Strip circle>
                <Title02>Quick service</Title02>
              </Strip>
              <img src={Mechanic} alt='mech' />
              <Strip rating={4.5}></Strip>
            </HeaderImage>
          </Header>
        </Container>
      </StyledHome>
    </Template>
  );
};

export default Home;
