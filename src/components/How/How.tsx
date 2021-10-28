import { Checkmark } from '../../assets/icons';
import { Title02 } from '../../GlobalStyle';
import { Circle, StyledHow } from './How.styled';

interface HowProps {
  text: string;
}

const How = ({ text }: HowProps) => {
  return (
    <StyledHow>
      <div>
        <Circle>
          <Checkmark />
        </Circle>
      </div>
      <Title02>{text}</Title02>
    </StyledHow>
  );
};

export default How;
