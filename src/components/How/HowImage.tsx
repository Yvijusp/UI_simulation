import { StyledHowImage } from './How.styled';

interface HowImageProps {
  image?: string;
}

const HowImage = ({ image }: HowImageProps) => {
  return <StyledHowImage image={image}></StyledHowImage>;
};

export default HowImage;
