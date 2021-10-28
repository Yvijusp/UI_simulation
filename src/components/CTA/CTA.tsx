import { CTACard, StyledCTA } from './CTA.styled';
import CarBack from '../../assets/images/carbck.png';
import CarBattery from '../../assets/images/carbattery.png';
import Button from '../Buttons/Button';

const CTA = () => {
  return (
    <StyledCTA>
      <div>
        <img src={CarBack} alt='' />
      </div>
      <CTACard>
        <h3>Get in touch with us for your service related query</h3>
        <Button text='Contact Us' secondary />
      </CTACard>
      <div>
        <img src={CarBattery} alt='' />
      </div>
    </StyledCTA>
  );
};

export default CTA;
