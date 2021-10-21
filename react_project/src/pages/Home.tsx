import { Clock, LongArrow } from '../assets/icons';
import Button from '../components/Buttons/Button';
import Strip from '../components/Strip/Strip';
import Template from '../components/templates/Template';
import { Container, Title02 } from '../GlobalStyle';
import {
  Header,
  HeaderImage,
  HeaderText,
  HeaderWrapper,
  OpenTime,
  Quote,
  QuoteLeft,
  QuoteRight,
  QuoteWrapper,
} from './Home.styled';
import Mechanic from '../assets/images/Home/mechanic.png';
import Feature from '../components/Feature/Feature';
import { features } from '../templateData';
import TextInput from '../components/Form/TextInput';

const Home = () => {
  return (
    <Template>
      <HeaderWrapper>
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
      </HeaderWrapper>
      <QuoteWrapper>
        <Container>
          <Quote>
            <QuoteLeft>
              <h2>We are taking car servicing seriously</h2>
              {features.map(({ body, title, Icon }, index) => (
                <Feature
                  key={index}
                  body={body}
                  title={title}
                  icon={<Icon />}
                />
              ))}
              <span>
                <a href='!#'>Know more about us</a> <LongArrow />
              </span>
            </QuoteLeft>
            <QuoteRight>
              <h3>Get a quote for the car service</h3>
              <form>
                <TextInput placeholder='Enter your location' />
                <TextInput placeholder='Enter your location' />
                <TextInput placeholder='Enter your location' />
                <TextInput placeholder='Your phone number' />
                <Button primary text='Get your quote' />
              </form>
            </QuoteRight>
          </Quote>
        </Container>
      </QuoteWrapper>
    </Template>
  );
};

export default Home;
