import { Arrow } from '../../assets/icons';
import { StyledArrowButtons } from './Button.styled';

interface ArrowButtonProps {
  clickHandler?: () => void;
  left?: boolean;
  right?: boolean;
}

const ArrowButton = ({ clickHandler, left, right }: ArrowButtonProps) => {
  return (
    <StyledArrowButtons onClick={clickHandler} right={right} left={left}>
      {right && (
        <span>
          <Arrow />
        </span>
      )}
      {left && (
        <span>
          <Arrow />
        </span>
      )}
    </StyledArrowButtons>
  );
};

export default ArrowButton;
