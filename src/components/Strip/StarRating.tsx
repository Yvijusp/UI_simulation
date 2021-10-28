import { Star } from '../../assets/icons';
import { Caption, Title02 } from '../../GlobalStyle';
import { Rating, RatingBody, RatingStars } from './Strip.styled';

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const displayStars = (): any => {
    return new Array(5).fill(null).map((_, index: number) => {
      if (rating % 1 !== 0 && index === Math.floor(rating)) {
        return <Star key={index} fill='url(#half_left)' />;
      }

      if (index < rating) {
        return <Star key={index} fill='#FFB648' />;
      }

      return <Star key={index} fill='#D7D1C7' />;
    });
  };

  return (
    <Rating>
      <RatingBody>
        <Title02>{rating}/5</Title02>
        <Caption>Rating</Caption>
      </RatingBody>
      <RatingStars>{displayStars()}</RatingStars>
    </Rating>
  );
};

export default StarRating;
