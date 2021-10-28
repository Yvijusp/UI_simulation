import { Title02 } from '../../GlobalStyle';
import { StyledTeamCard, TeamCardBody } from './Card.styled';

interface TeamCardProps {
  image: string;
  name: string;
  position: string;
}

const TeamCard = ({ image, name, position }: TeamCardProps) => {
  return (
    <StyledTeamCard>
      <div>
        <img src={image} alt={name} />
      </div>
      <TeamCardBody>
        <Title02>{name}</Title02>
        <p>{position}</p>
      </TeamCardBody>
    </StyledTeamCard>
  );
};

export default TeamCard;
