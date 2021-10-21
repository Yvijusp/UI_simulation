import { Circle } from './Strip.styled';

interface CircleProps {
  time: number;
}

const CircleElement = ({ time }: CircleProps) => {
  return (
    <Circle>
      <span>
        {time}
        <span>hr</span>
      </span>
    </Circle>
  );
};

export default CircleElement;
