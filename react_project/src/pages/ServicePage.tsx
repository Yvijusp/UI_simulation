import ServiceCard from '../components/Cards/ServiceCard';
import Feature from '../components/Feature/Feature';
import Template from '../components/templates/Template';
import { Container, Title01 } from '../GlobalStyle';
import { features, otherServices } from '../templateData';
import {
  Line,
  ServiceContainer,
  ServiceContent,
  ServiceContentEnd,
  ServicePageWrapper,
  ServiceSideBar,
  SideBarFeatures,
  SideBarServices,
} from './ServicePage.styled';
import Vehicle from '../assets/images/services/bigvehicle.png';
import CTA from '../components/CTA/CTA';

const ServicePage = () => {
  return (
    <Template>
      <ServicePageWrapper>
        <Container>
          <h1>Auto Diagnostics</h1>
          <ServiceContainer>
            <ServiceSideBar>
              <SideBarServices>
                <Title01>Other services</Title01>
                {otherServices.map((service, index) => (
                  <ServiceCard
                    key={index}
                    icon={<service.Icon />}
                    title={service.title}
                  />
                ))}
              </SideBarServices>
              <SideBarFeatures>
                {features.map((feature, index) => (
                  <Feature
                    image={feature.image}
                    title={feature.title}
                    body={feature.body}
                    key={index}
                  />
                ))}
              </SideBarFeatures>
            </ServiceSideBar>
            <ServiceContent>
              <div>
                <div>
                  <img src={Vehicle} alt='vehicle' />
                </div>
                <h4>
                  The warning lights on your dashboard are the most obvious
                  starting point.
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris dignissim dolor et dui bibendum aliquam. Mauris a quam
                  sit amet dui auctor dictum eget a elit. Pellentesque varius
                  diam risus, ut condimentum lorem volutpat vel. Nam vel orci
                  pharetra eros pulvinar cursus nec quis tellus. Quisque feugiat
                  tortor lectus, pretium interdum justo tincidunt a. Donec at
                  congue lectus. Nulla facilisi. Phasellus consectetur sapien
                  accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui
                  egestas, eu posuere metus convallis. Ut non urna a odio
                  condimentum dictum. Proin egestas erat a orci ultrices, vitae
                  bibendum libero posuere. Quisque laoreet tincidunt justo.
                  Vestibulum congue dictum libero finibus vehicula. Aliquam nisi
                  velit, ultricies eget enim vel, venenatis mollis ante.
                  Maecenas sodales tristique quam. Suspendisse fringilla massa
                  vel dolor ornare rhoncus. Nullam ut orci mattis leo varius
                  laoreet sed mollis dui. Aenean placerat nec enim ut finibus.
                  Maecenas suscipit nibh eu neque egestas, non condimentum mi
                  bibendum. Sed est eros, molestie consectetur auctor non,
                  lobortis quis tortor. Nam cursus imperdiet massa volutpat
                  hendrerit. Sed suscipit ligula iaculis lorem sagittis
                  tincidunt. Etiam pellentesque metus vel enim iaculis aliquam.
                  Mauris at nisi sed elit gravida malesuada.
                </p>
                <Title01>
                  Delaying a diagnosis and repair could lead to even bigger
                  problems down the road.
                </Title01>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris dignissim dolor et dui bibendum aliquam. Mauris a quam
                  sit amet dui auctor dictum eget a elit. Pellentesque varius
                  diam risus, ut condimentum lorem volutpat vel. Nam vel orci
                  pharetra eros pulvinar cursus nec quis tellus. Quisque feugiat
                  tortor lectus, pretium interdum justo tincidunt a. Donec at
                  congue lectus. Nulla facilisi. Phasellus consectetur sapien
                  accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui
                  egestas, eu posuere metus convallis.
                </p>
                <ServiceContentEnd>
                  <Line></Line>
                  <span>
                    Ut non urna a odio condimentum dictum. Proin egestas erat a
                    orci ultrices, vitae bibendum libero posuere. Quisque
                    laoreet tincidunt justo. Vestibulum congue dictum libero
                    finibus vehicula. Aliquam nisi velit, ultricies eget enim
                    vel, venenatis mollis ante.
                  </span>
                </ServiceContentEnd>
              </div>
            </ServiceContent>
          </ServiceContainer>
        </Container>
      </ServicePageWrapper>
      <CTA />
    </Template>
  );
};

export default ServicePage;
