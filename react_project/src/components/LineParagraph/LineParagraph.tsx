import { ReactNode } from 'react';
import { Line, StyledLineParagraph } from './LineParagraph.styled';

const LineParagraph = ({ children }: { children: ReactNode }) => {
  return (
    <StyledLineParagraph>
      <Line></Line>
      <span>{children}</span>
    </StyledLineParagraph>
  );
};

export default LineParagraph;
