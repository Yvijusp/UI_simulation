import Button from '../Buttons/Button';
import { Header, HeaderLeft, HeaderRight } from './OverlayHeader.styled';

const OverlayHeader = ({ image }: { image: string }) => {
  return (
    <Header>
      <HeaderRight>
        <img src={image} alt='mechanic' />
      </HeaderRight>
      <HeaderLeft>
        <h1>About Us</h1>
        <p>
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw
          Through True Rich Attended does
        </p>
        <Button primary text='Book a service' />
      </HeaderLeft>
    </Header>
  );
};

export default OverlayHeader;
