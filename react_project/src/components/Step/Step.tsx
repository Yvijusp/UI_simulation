import { Title01 } from '../../GlobalStyle';
import { DottedLine, Eclipse, StepBody, StyledStep } from './Step.styled';

interface StepProps {
  index: number;
  title: string;
  body: string;
}

const Step = ({ index, title, body }: StepProps) => {
  return (
    <StyledStep>
      <Eclipse>
        <h5>{index < 10 ? '0' + index + 1 : index + 1}</h5>
        <div></div>
      </Eclipse>
      <DottedLine />
      <StepBody>
        <Title01>{title}</Title01>
        <p>{body}</p>
      </StepBody>
    </StyledStep>
  );
};

export default Step;
