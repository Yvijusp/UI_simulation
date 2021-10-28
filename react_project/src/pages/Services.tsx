import OverlayHeader from '../components/OverlayHeader/OverlayHeader';
import Template from '../components/templates/Template';
import { Container } from '../GlobalStyle';
import { HeaderWrapper } from './Services.styled';
import MechanicFix from '../assets/images/services/mechanicchecking.png';

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
    </Template>
  );
};

export default Services;
