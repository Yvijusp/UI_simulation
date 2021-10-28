import React, { useState } from 'react';
import ArrowButton from '../Buttons/ArrowButton';
import Testimonial from '../Testimonial/Testimonial';
import { Line } from '../Testimonial/Testimonial.styled';
import {
  ButtonContainer,
  LinesContainer,
  StyledPagination,
  Testimonials,
  TestimonialsControl,
} from './Pagination.styled';

interface Props {
  data: {
    avatar: string;
    name: string;
    city: string;
    body: string;
  }[];
}

const PaginatedTestimonials = ({ data }: Props) => {
  const [current, setCurrent] = useState(1);
  const [perPage] = useState(2);

  const pageLines = new Array(data.length / perPage).fill(null);

  const indexOfLastPage = current * perPage;
  const indexOfFirstPage = indexOfLastPage - perPage;
  const currentData = data.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <StyledPagination>
      <Testimonials>
        {currentData.map((value, index) => {
          return (
            <Testimonial
              name={value.name}
              city={value.city}
              avatar={value.avatar}
              body={value.body}
              key={index}
            />
          );
        })}
      </Testimonials>
      <TestimonialsControl>
        <LinesContainer>
          {pageLines.map((_, index) => {
            if (index + 1 === current) {
              return <Line key={index} className='active' />;
            }
            return <Line key={index} />;
          })}
        </LinesContainer>
        <ButtonContainer>
          <ArrowButton
            left
            clickHandler={() =>
              setCurrent(current === 1 ? pageLines.length : current - 1)
            }
          />
          <ArrowButton
            right
            clickHandler={() =>
              setCurrent(current === pageLines.length ? 1 : current + 1)
            }
          />
        </ButtonContainer>
      </TestimonialsControl>
    </StyledPagination>
  );
};

export default PaginatedTestimonials;
