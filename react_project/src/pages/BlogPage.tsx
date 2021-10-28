import { Landscape, LandscapeCar } from '../assets/images/blog';
import CTA from '../components/CTA/CTA';
import LineParagraph from '../components/LineParagraph/LineParagraph';
import Template from '../components/templates/Template';
import { Container, Title01 } from '../GlobalStyle';
import {
  BlogPageContentContainer,
  BlogPageContentWrapper,
  BlogPageHeaderContainer,
  BlogPageHeaderContent,
  BlogPageHeaderImage,
  BlogPageHeaderWrapper,
  BlogPageImage,
} from './BlogPage.styled';

const BlogPage = () => {
  return (
    <Template>
      <BlogPageHeaderWrapper>
        <Container>
          <BlogPageHeaderContainer>
            <BlogPageHeaderContent>
              <p>Posted on October 6th 2021</p>
              <h3>Should I Buy a New Car or Lease a New Car in 2021?</h3>
              <p>
                We provide a full range of front end mechanical repairs for all
                makes and models of cars, no matter the cause. This includes, We
                provide a full range of front end mechanical{' '}
              </p>
            </BlogPageHeaderContent>
            <BlogPageHeaderImage>
              <img src={LandscapeCar} alt='landscapecar' />
            </BlogPageHeaderImage>
          </BlogPageHeaderContainer>
        </Container>
      </BlogPageHeaderWrapper>
      <BlogPageContentWrapper>
        <Container>
          <BlogPageContentContainer>
            <h4>This is a blog post headline</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
              dui auctor dictum eget a elit. Pellentesque varius diam risus, ut
              condimentum lorem volutpat vel. Nam vel orci pharetra eros
              pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
              pretium interdum justo tincidunt a. Donec at congue lectus. Nulla
              facilisi. Phasellus consectetur sapien accumsan lectus tincidunt
              placerat. Etiam ornare nibh vel dui egestas, eu posuere metus
              convallis.
            </p>
            <p>
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci
              ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
              justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
              nisi velit, ultricies eget enim vel, venenatis mollis ante.
              Maecenas sodales tristique quam. Suspendisse fringilla massa vel
              dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet sed
              mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit
              nibh eu neque egestas, non condimentum mi bibendum. Sed est eros,
              molestie consectetur auctor non, lobortis quis tortor. Nam cursus
              imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis
              lorem sagittis tincidunt. Etiam pellentesque metus vel enim
              iaculis aliquam. Mauris at nisi sed elit gravida malesuada.
            </p>
            <BlogPageImage>
              <img src={Landscape} alt='landscape' />
            </BlogPageImage>
            <Title01>This is a small blog post headline</Title01>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
              dui auctor dictum eget a elit. Pellentesque varius diam risus, ut
              condimentum lorem volutpat vel. Nam vel orci pharetra eros
              pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
              pretium interdum justo tincidunt a. Donec at congue lectus. Nulla
              facilisi. Phasellus consectetur sapien accumsan lectus tincidunt
              placerat. Etiam ornare nibh vel dui egestas, eu posuere metus
              convallis.
            </p>
            <LineParagraph>
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci
              ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
              justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
              nisi velit, ultricies eget enim vel, venenatis mollis ante.
            </LineParagraph>
            <p>
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci
              ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
              justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
              nisi velit, ultricies eget enim vel, venenatis mollis ante.
              Maecenas sodales tristique quam. Suspendisse fringilla massa vel
              dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet sed
              mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit
              nibh eu neque egestas, non condimentum mi bibendum. Sed est eros,
              molestie consectetur auctor non, lobortis quis tortor. Nam cursus
              imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis
              lorem sagittis tincidunt. Etiam pellentesque metus vel enim
              iaculis aliquam. Mauris at nisi sed elit gravida malesuada.
            </p>
          </BlogPageContentContainer>
        </Container>
      </BlogPageContentWrapper>
      <CTA />
    </Template>
  );
};

export default BlogPage;
