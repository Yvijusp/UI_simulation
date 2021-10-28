import OverlayHeader from '../components/OverlayHeader/OverlayHeader';
import Template from '../components/templates/Template';
import { Container, Title02 } from '../GlobalStyle';
import {
  HeaderWrapper,
  ServicesContainer,
  ServicesLeft,
  ServicesRight,
  ServicesWrapper,
} from './Services.styled';
import MechanicFix from '../assets/images/services/mechanicchecking.png';
import Vehicle from '../assets/images/services/vehicle.png';
import { Link } from 'react-router-dom';
import { LongArrow } from '../assets/icons';
import { offers } from '../templateData';
import ServiceCard from '../components/Cards/ServiceCard';

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
    </Template>
  );
};

export default Services;
