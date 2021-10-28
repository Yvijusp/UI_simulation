import React from 'react';
import { Body, Logo, StyledFeature } from './Feature.styled';

interface FeatureProps {
  image: string;
  title: string;
  body: string;
}

const Feature = ({ image, title, body }: FeatureProps) => {
  return (
    <StyledFeature>
      <Logo>
        <img src={image} alt={title} />
      </Logo>
      <Body>
        <h4>{title}</h4>
        <p>{body}</p>
      </Body>
    </StyledFeature>
  );
};

export default Feature;
