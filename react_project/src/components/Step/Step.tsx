import { Title01 } from '../../GlobalStyle';
import { DottedLine, Eclipse, StepBody, StyledStep } from './Step.styled';

const Step = () => {
  return (
    <StyledStep>
      <Eclipse>
        <h5>01</h5>
        <div></div>
      </Eclipse>
      <DottedLine />
      <StepBody>
        <Title01>Get a Quote</Title01>
        <p>
          Through True Rich Attended does no end it his mother since real had
          half every.
        </p>
      </StepBody>
    </StyledStep>
  );
};

export default Step;
