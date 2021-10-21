import React from 'react';
import { Body, Logo, StyledFeature } from './Feature.styled';

interface FeatureProps {
  icon: React.ReactElement;
  title: string;
  body: string;
}

const Feature = ({ icon, title, body }: FeatureProps) => {
  return (
    <StyledFeature>
      <Logo>{icon}</Logo>
      <Body>
        <h4>{title}</h4>
        <p>{body}</p>
      </Body>
    </StyledFeature>
  );
};

export default Feature;
