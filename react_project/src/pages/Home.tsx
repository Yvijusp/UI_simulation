import { Clock, LongArrow } from '../assets/icons';
import Button from '../components/Buttons/Button';
import Strip from '../components/Strip/Strip';
import Template from '../components/templates/Template';
import { Container, Title02 } from '../GlobalStyle';
import {
  BrandsGrid,
  BrandsWrapper,
  ExperienceBox,
  ExperienceWrapper,
  Header,
  HeaderImage,
  HeaderText,
  HeaderWrapper,
  Offer,
  OfferFooter,
  OfferGrid,
  OfferHeader,
  OfferWrapper,
  OpenTime,
  Process,
  ProcessLeft,
  ProcessRight,
  ProcessWrapper,
  Quote,
  QuoteLeft,
  QuoteRight,
  QuoteWrapper,
} from './Home.styled';
import Mechanic from '../assets/images/Home/mechanic.png';
import Feature from '../components/Feature/Feature';
import { experiences, features, offers, steps } from '../templateData';
import TextInput from '../components/Form/TextInput';
import Step from '../components/Step/Step';
import ServiceCard from '../components/Cards/ServiceCard';
import CTA from '../components/CTA/CTA';
import Experience from '../components/Experience/Experience';

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
              {features.map(({ body, title, image }) => (
                <Feature key={title} body={body} title={title} image={image} />
              ))}

              <span>
                <a href='#!#'>Know more about us</a> <LongArrow />
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
      <ProcessWrapper>
        <Container>
          <Process>
            <ProcessLeft>
              <h2>We Follow a clear process to help you out.</h2>
              <p>
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire
              </p>
              <Button text='Learn More' primary />
            </ProcessLeft>
            <ProcessRight>
              {steps.map((step, index) => (
                <Step
                  key={index}
                  step={index + 1}
                  title={step.title}
                  body={step.body}
                  lastItem={index + 1 === steps.length}
                />
              ))}
            </ProcessRight>
          </Process>
        </Container>
      </ProcessWrapper>
      <OfferWrapper>
        <Container>
          <Offer>
            <OfferHeader>
              <Title02>What we Offer</Title02>
              <h2>We offer full service auto repair & maintenance</h2>
            </OfferHeader>
            <OfferGrid>
              {offers.map((offer) => (
                <ServiceCard
                  primary={offer.primary}
                  title={offer.title}
                  icon={<offer.Icon />}
                />
              ))}
            </OfferGrid>
            <OfferFooter>
              <p>
                <a href='#!#'>Learn about services</a> <LongArrow />
              </p>
            </OfferFooter>
          </Offer>
        </Container>
      </OfferWrapper>
      <CTA />
      <ExperienceWrapper>
        <Container>
          <ExperienceBox>
            {experiences.map((experience) => (
              <Experience
                key={experience.title}
                heading={experience.heading}
                title={experience.title}
              />
            ))}
          </ExperienceBox>
        </Container>
      </ExperienceWrapper>
      <BrandsWrapper>
        <Container>
          <h3>Brands we Serve</h3>
          <BrandsGrid></BrandsGrid>
        </Container>
      </BrandsWrapper>
    </Template>
  );
};

export default Home;
