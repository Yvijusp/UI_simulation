import ServiceCard from '../components/Cards/ServiceCard';
import Feature from '../components/Feature/Feature';
import Template from '../components/templates/Template';
import { Container, Title01 } from '../GlobalStyle';
import { features, otherServices } from '../templateData';
import {
  ServiceContainer,
  ServiceContent,
  ServicePageWrapper,
  ServiceSideBar,
  SideBarFeatures,
  SideBarServices,
} from './ServicePage.styled';

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
            <ServiceContent></ServiceContent>
          </ServiceContainer>
        </Container>
      </ServicePageWrapper>
    </Template>
  );
};

export default ServicePage;
