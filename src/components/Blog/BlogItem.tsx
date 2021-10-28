import { Title01 } from '../../GlobalStyle';
import { BlogItemBody, StyledBlogItem, Timestamp } from './BlogItems.styled';

interface BlogItemProps {
  image?: string;
  timestamp: string;
  title: string;
  body: string;
}

const BlogItem = ({ image, timestamp, title, body }: BlogItemProps) => {
  return (
    <StyledBlogItem>
      <div>{image && <img src={image} alt={title} />}</div>
      <BlogItemBody>
        <Timestamp>{timestamp}</Timestamp>
        <Title01>{title}</Title01>
        <p>{body}</p>
      </BlogItemBody>
    </StyledBlogItem>
  );
};

export default BlogItem;
