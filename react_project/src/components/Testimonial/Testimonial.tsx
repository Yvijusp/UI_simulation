import { Title02 } from '../../GlobalStyle';
import { Customer, StyledTestimonial } from './Testimonial.styled';

interface TestimonialProps {
  avatar?: string;
  name: string;
  city: string;
  body: string;
}

const Testimonial = ({ avatar, name, city, body }: TestimonialProps) => {
  return (
    <StyledTestimonial>
      <Customer>
        <img src={avatar} alt='avatar' />
        <div>
          <Title02>{name}</Title02>
          <p>{city}</p>
        </div>
      </Customer>
      <div>
        <Title02>{body}</Title02>
      </div>
    </StyledTestimonial>
  );
};

export default Testimonial;
