import styled from 'styled-components';
import { StyledLineParagraph } from '../components/LineParagraph/LineParagraph.styled';
import { wrapper } from './Services.styled';

export const BlogPageHeaderWrapper = styled.section`
  padding: 80px 0 64px 0;
`;

export const BlogPageHeaderContainer = styled.section``;

export const BlogPageHeaderContent = styled.div`
  max-width: 900px;
  margin: 0 auto;

  p {
    font-size: var(paragraph-sm);
    font-weight: 600;
    line-height: 28px;
  }

  p:nth-of-type(1) {
    color: #939191;
  }
  p:nth-of-type(2) {
    color: var(--black-color);
    opacity: 0.6;
    margin-bottom: 64px;
  }
`;

export const BlogPageHeaderImage = styled.div`
  width: 1280px;
  img {
    width: 100%;
  }
`;

export const BlogPageContentWrapper = styled.section`
  ${wrapper.bottom}
`;

export const BlogPageContentContainer = styled.section`
  max-width: 900px;
  margin: 0 auto;

  h4 {
    margin-bottom: 20px;
  }

  p {
    color: var(--black-color);
    opacity: 0.6;
    font-weight: 600;
    font-size: var(--paragraph-sm);
    line-height: 28px;
  }

  p:nth-of-type(1) {
    margin-bottom: 32px;
  }

  ${StyledLineParagraph} {
    margin: 24px 0;
  }
`;

export const BlogPageImage = styled.div`
  margin: 56px 0 80px 0;
`;
