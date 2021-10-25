import Template from '../components/templates/Template';
import {
  Header,
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
  Steps,
  StepsLeft,
  StepsRight,
  StepsWrapper,
} from './AboutUs.styled';
import Mechanic from '../assets/images/AboutUS/mechanic.png';
import Button from '../components/Buttons/Button';
import { Container, Title02 } from '../GlobalStyle';
import CarFix from '../assets/images/AboutUS/carback.png';
import { steps } from '../templateData';
import Step from '../components/Step/Step';

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
      <StepsWrapper>
        <Container>
          <Steps>
            <StepsLeft>
              <h3>
                We Provide Expert Service and aim to have a long term with you
              </h3>
              <Title02>
                We provide a full range of front end mechanical repairs for all
                makes and models of cars, no matter
              </Title02>
              {steps.map((step, index) => (
                <Step
                  key={index}
                  body={step.body}
                  step={index + 1}
                  title={step.title}
                  lastItem={index + 1 === steps.length}
                />
              ))}
            </StepsLeft>
            <StepsRight>
              <img src={CarFix} alt='fixing car' />
            </StepsRight>
          </Steps>
        </Container>
      </StepsWrapper>
    </Template>
  );
};

export default AboutUs;
