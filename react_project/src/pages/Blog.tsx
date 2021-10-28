import Button from '../components/Buttons/Button';
import Template from '../components/templates/Template';
import { Container } from '../GlobalStyle';
import {
  BlogFourLeft,
  BlogFourRight,
  BlogFourSection,
  BlogFourWrapper,
  BlogFullContainer,
  BlogFullWrapper,
  BlogHeaderContent,
  BlogHeaderContentContainer,
  BlogHeaderImage,
  BlogHeaderWrapper,
  BlogImageOverlay,
} from './Blog.styled';
import CarFront from '../assets/images/blog/carfront.png';
import { Link } from 'react-router-dom';
import { LongArrow } from '../assets/icons';
import { blogFour, blogFull } from '../templateData';
import BlogGroup from '../components/Blog/BlogGroup';
import BlogItem from '../components/Blog/BlogItem';
import CTA from '../components/CTA/CTA';

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
      <BlogFourWrapper>
        <Container>
          <BlogFourSection>
            <BlogFourLeft>
              <div>
                <img src={CarFront} alt='Carfront' />
              </div>
              <div>
                <p>Posted on October 6th 2021</p>
                <h4>Should I Buy a New Car or Lease a New Car in 2021?</h4>
                <p>
                  We provide a full range of front end mechanical repairs for
                  all makes and models of cars, no matter the cause. This
                  includes, We provide a full range of front end mechanical.
                </p>
                <div>
                  <Link to='/blogpost'>
                    <span>Read more</span> <LongArrow />
                  </Link>
                </div>
              </div>
            </BlogFourLeft>
            <BlogFourRight>
              {blogFour.map((blogItem, index) => (
                <BlogGroup
                  image={blogItem.image}
                  key={index}
                  title={blogItem.title}
                  timestamp={blogItem.timestamp}
                />
              ))}
            </BlogFourRight>
          </BlogFourSection>
        </Container>
      </BlogFourWrapper>
      <BlogFullWrapper>
        <Container>
          <BlogFullContainer>
            {blogFull.map((blogItem, index) => (
              <BlogItem
                key={index}
                image={blogItem.image}
                body={blogItem.body}
                title={blogItem.title}
                timestamp={blogItem.timestamp}
              />
            ))}
          </BlogFullContainer>
        </Container>
      </BlogFullWrapper>
      <CTA />
    </Template>
  );
};

export default Blog;
