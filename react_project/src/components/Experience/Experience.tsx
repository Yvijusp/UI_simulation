import { Title02 } from '../../GlobalStyle';
import { StyledExperience } from './Experience.styled';

interface ExperienceProps {
  title: string;
  heading: string;
}

const Experience = ({ title, heading }: ExperienceProps) => {
  return (
    <StyledExperience>
      <h2>{heading}</h2>
      <Title02>{title}</Title02>
    </StyledExperience>
  );
};

export default Experience;
