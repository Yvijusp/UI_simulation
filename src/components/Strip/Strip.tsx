import React, { FC } from 'react';
import CircleElement from './Circle';
import StarRating from './StarRating';
import { Body, StyledStrip } from './Strip.styled';

interface StripProps {
  circle?: boolean;
  rating?: number;
}

const Strip: FC<StripProps> = ({ circle, rating, children }) => {
  return (
    <StyledStrip>
      {circle && <CircleElement time={24} />}
      {rating && (
        <div>
          <StarRating rating={rating} />
        </div>
      )}
      {children && <Body>{children}</Body>}
    </StyledStrip>
  );
};

export default Strip;
