import { Title01 } from '../../GlobalStyle';
import { Logo } from '../Feature/Feature.styled';
import { StyledFeatureCard } from './Card.styled';

interface Props {
  title: string;
  image: string;
  body: string;
}

const FeatureCard = ({ title, image, body }: Props) => {
  return (
    <StyledFeatureCard>
      <Logo>
        <img src={image} alt={title} />
      </Logo>
      <div>
        <Title01>{title}</Title01>
        <p>{body}</p>
      </div>
    </StyledFeatureCard>
  );
};

export default FeatureCard;
