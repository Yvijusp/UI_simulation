import Button from '../Buttons/Button';
import { Header, HeaderLeft, HeaderRight } from './OverlayHeader.styled';

interface IProps {
  image: string;
  title: string;
  body: string;
}

const OverlayHeader = ({ image, title, body }: IProps) => {
  return (
    <Header>
      <HeaderRight>
        <img src={image} alt='mechanic' />
      </HeaderRight>
      <HeaderLeft>
        <h1>{title}</h1>
        <p>{body}</p>
        <Button primary text='Book a service' />
      </HeaderLeft>
    </Header>
  );
};

export default OverlayHeader;
