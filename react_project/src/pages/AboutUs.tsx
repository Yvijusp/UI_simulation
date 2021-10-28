import Template from '../components/templates/Template';
import {
  ColorsWrapper,
  Features,
  FeaturesContainer,
  FeaturesExperience,
  FeaturesWrapper,
  HeaderWrapper,
  Steps,
  StepsLeft,
  StepsRight,
  StepsWrapper,
  Team,
  TeamMembers,
  TeamWrapper,
} from './AboutUs.styled';
import Mechanic from '../assets/images/AboutUS/mechanic.png';
import Button from '../components/Buttons/Button';
import { Container, Title02 } from '../GlobalStyle';
import CarFix from '../assets/images/AboutUS/carback.png';
import {
  experiences,
  features,
  overlayCardContent,
  steps,
  team,
} from '../templateData';
import Step from '../components/Step/Step';
import OverlayCard from '../components/Cards/OverlayCards';
import Feature from '../components/Feature/Feature';
import FeatureCard from '../components/Cards/FeatureCard';
import Experience from '../components/Experience/Experience';
import TeamCard from '../components/Cards/TeamCard';
import CTA from '../components/CTA/CTA';
import OverlayHeader from '../components/OverlayHeader/OverlayHeader';

const AboutUs = () => {
  return (
    <Template>
      <HeaderWrapper>
        <Container>
          <OverlayHeader image={Mechanic} />
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
      <ColorsWrapper>
        {overlayCardContent.map((value, index) => (
          <OverlayCard
            body={value.body}
            title={value.title}
            image={value.image}
            color={value.color}
            key={index}
          />
        ))}
      </ColorsWrapper>
      <FeaturesWrapper>
        <Container>
          <Features>
            <h2>Services we provide to our valued customers</h2>
            <FeaturesContainer>
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  image={feature.image}
                  body={feature.body}
                  title={feature.title}
                />
              ))}
            </FeaturesContainer>
          </Features>
          <FeaturesExperience>
            {experiences.map((experience, index) => (
              <Experience
                key={index}
                heading={experience.heading}
                title={experience.title}
              />
            ))}
          </FeaturesExperience>
        </Container>
      </FeaturesWrapper>
      <TeamWrapper>
        <Container>
          <Team>
            <h1>Meet our Team</h1>
            <TeamMembers>
              {team.map((member, index) => (
                <TeamCard
                  image={member.image}
                  key={index}
                  name={member.name}
                  position={member.position}
                />
              ))}
            </TeamMembers>
          </Team>
        </Container>
      </TeamWrapper>
      <CTA />
    </Template>
  );
};

export default AboutUs;
