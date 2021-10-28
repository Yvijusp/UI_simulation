import OverlayHeader from '../components/OverlayHeader/OverlayHeader';
import Template from '../components/templates/Template';
import { Container, Title02 } from '../GlobalStyle';
import {
  HeaderWrapper,
  HowBottom,
  HowBottomLeft,
  HowBottomRight,
  HowTop,
  HowTopLeft,
  HowTopRight,
  HowWrapper,
  ServicesContainer,
  ServicesLeft,
  ServicesRight,
  ServicesWrapper,
} from './Services.styled';

import MechanicFix from '../assets/images/services/mechanicchecking.png';
import Vehicle from '../assets/images/services/vehicle.png';
import Car from '../assets/images/how/car.png';
import CarFix from '../assets/images/how/carfix.png';
import OpenHood from '../assets/images/how/openhood.png';
import Tires from '../assets/images/how/tires.png';
import { Link } from 'react-router-dom';
import { LongArrow } from '../assets/icons';
import { hows, offers } from '../templateData';
import ServiceCard from '../components/Cards/ServiceCard';
import How from '../components/How/How';
import Button from '../components/Buttons/Button';
import CTA from '../components/CTA/CTA';

const Services = () => {
  return (
    <Template>
      <HeaderWrapper>
        <Container>
          <OverlayHeader
            image={MechanicFix}
            title='Our services'
            body='Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw Through True Rich Attended does  '
          />
        </Container>
      </HeaderWrapper>
      <ServicesWrapper>
        <Container>
          <ServicesContainer>
            <ServicesLeft>
              <div>
                <img src={Vehicle} alt='car' />
              </div>
              <h3>Auto Diagnostics</h3>
              <Title02>
                Through True Rich Attended does no end it his mother since
                favourable real had half every him case in packages enquire we
                up ecstatic. Through True Rich Attended does no end it his
                mother.
              </Title02>
              <Link to='/service'>
                <span>See service details</span> <LongArrow fill='#000' />
              </Link>
            </ServicesLeft>
            <ServicesRight>
              {offers.slice(0, -2).map((offer, index) => {
                if (index === 0)
                  return (
                    <ServiceCard
                      icon={<offer.Icon />}
                      title={offer.title}
                      key={index}
                      primary
                    />
                  );
                return (
                  <ServiceCard
                    icon={<offer.Icon />}
                    title={offer.title}
                    key={index}
                  />
                );
              })}
            </ServicesRight>
          </ServicesContainer>
        </Container>
      </ServicesWrapper>
      <HowWrapper>
        <Container>
          <HowTop>
            <HowTopLeft>
              <h3>How we work and the proccess we follow</h3>
              <div>
                {hows.map((how, index) => (
                  <How text={how.text} key={index} />
                ))}
              </div>
            </HowTopLeft>
            <HowTopRight>
              <img src={Car} alt='car' />
              <img src={CarFix} alt='carfix' />
            </HowTopRight>
          </HowTop>
          <HowBottom>
            <HowBottomLeft>
              <img src={Tires} alt='tires' />
              <img src={OpenHood} alt='openhood' />
            </HowBottomLeft>
            <HowBottomRight>
              <h3>Diagnose Car Problems If You Don’t Know Much About Cars</h3>
              <p>
                We provide a full range of front end mechanical repairs for all
                makes and models of cars, no matter the cause. This includes
                everything from struts, shocks, and tie rod ends to ball joints,
                springs everything from struts, shocks, and tie rod ends to ball
                joints, springs
              </p>
              <Button text='Book a service' primary />
            </HowBottomRight>
          </HowBottom>
        </Container>
      </HowWrapper>
      <CTA />
    </Template>
  );
};

export default Services;
