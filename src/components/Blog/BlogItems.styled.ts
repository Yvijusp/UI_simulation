import styled from 'styled-components';

export const StyledBlogItem = styled.div`
  width: 405px;
  height: 606px;
`;

export const Timestamp = styled.p`
  color: #939191;
  font-size: var(--paragraph-sm);
  font-weight: 600;
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const BlogItemBody = styled.div`
  h4 {
    margin-bottom: 16px;
  }

  p:last-child {
    font-weight: 600;
    line-height: 28px;
  }
`;

export const StyledBlogGroup = styled.div`
  height: 192px;
  display: flex;

  img {
    width: 192px;
    margin-right: 24px;
  }

  p {
    margin: 0;
    margin-top: 4px;
  }
`;

export const BlogGroupBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
