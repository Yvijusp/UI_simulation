import Button from '../components/Buttons/Button';
import Template from '../components/templates/Template';
import {
  BlogHeaderContent,
  BlogHeaderContentContainer,
  BlogHeaderImage,
  BlogHeaderWrapper,
  BlogImageOverlay,
} from './Blog.styled';

const Blog = () => {
  return (
    <Template>
      <BlogHeaderWrapper>
        <BlogHeaderImage>
          <BlogImageOverlay>
            <h1>Our Blog</h1>
          </BlogImageOverlay>
          <BlogHeaderContentContainer>
            <BlogHeaderContent>
              <span>Trending</span>
              <h4>Diagnose Car Problems If You Don’t Know Much About Cars</h4>
              <p>
                We provide a full range of front end mechanical repairs for all
                makes and models of cars, no matter the cause. This includes, We
                provide a full range of front end mechanical.
              </p>
              <div>
                <Button text='Read more' primary />
                <span>Posted on October 6th 2021</span>
              </div>
            </BlogHeaderContent>
          </BlogHeaderContentContainer>
        </BlogHeaderImage>
      </BlogHeaderWrapper>
    </Template>
  );
};

export default Blog;
