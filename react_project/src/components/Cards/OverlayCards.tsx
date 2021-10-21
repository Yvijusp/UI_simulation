import { Title02 } from '../../GlobalStyle';
import { StyledOverlayCard, Overlay } from './Card.styled';
import CarBack from '../../assets/images/carbackcard.png';

interface OverlayCardProps {
  title: string;
  body: string;
  color?: 'primary' | 'secondary' | 'dark';
}

const defaultProps = {
  color: 'rgba(248, 91, 41, 0.9)',
};

const OverlayCard = ({ title, body, color }: OverlayCardProps) => {
  return (
    <StyledOverlayCard image={CarBack}>
      <Overlay color={color}>
        <h4>{title}</h4>
        <Title02>{body}</Title02>
      </Overlay>
    </StyledOverlayCard>
  );
};

OverlayCard.defaultProps = defaultProps;

export default OverlayCard;
