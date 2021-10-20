import { Title01 } from '../../GlobalStyle';
import { BlogGroupBody, StyledBlogGroup, Timestamp } from './BlogItems.styled';

interface BlogGroupProps {
  image?: string;
  title: string;
  timestamp: string;
}

const BlogGroup = ({ image, title, timestamp }: BlogGroupProps) => {
  return (
    <StyledBlogGroup>
      <div>{image && <img src={image} alt={title} />}</div>
      <BlogGroupBody>
        <Title01>{title}</Title01>
        <Timestamp>{timestamp}</Timestamp>
      </BlogGroupBody>
    </StyledBlogGroup>
  );
};

export default BlogGroup;
