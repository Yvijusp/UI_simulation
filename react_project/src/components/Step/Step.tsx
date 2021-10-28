import { Title01 } from '../../GlobalStyle';
import { DottedLine, Eclipse, StepBody, StyledStep } from './Step.styled';

interface StepProps {
  step: number;
  title: string;
  body: string;
  lastItem: boolean;
}

const Step = ({ step, title, body, lastItem }: StepProps) => {
  return (
    <StyledStep>
      <Eclipse>
        <h5>0{step}</h5>
        <div></div>
      </Eclipse>
      {!lastItem && <DottedLine />}
      <StepBody>
        <Title01>{title}</Title01>
        <p>{body}</p>
      </StepBody>
    </StyledStep>
  );
};

export default Step;
