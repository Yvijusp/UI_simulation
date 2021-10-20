import { Title02 } from '../../GlobalStyle';
import { StyledServiceCard } from './Card.styled';

interface ServiceCardProps {
  icon?: React.ReactNode;
  title?: string;
  primary?: boolean;
}

const ServiceCard = ({ icon, title, primary }: ServiceCardProps) => {
  return (
    <StyledServiceCard primary={primary}>
      <div>{icon}</div>
      <div>
        <Title02>{title}</Title02>
      </div>
    </StyledServiceCard>
  );
};

export default ServiceCard;
