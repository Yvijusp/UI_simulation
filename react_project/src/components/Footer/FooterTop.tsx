import { FB, IN, LI, TW } from '../../assets/icons';
import { Container } from '../../GlobalStyles';
import { FooterLeft, FooterRight, StyledFooterTop } from './Footer.styled';
import FooterInfo from './FooterInfo';

const FooterTop = () => {
  return (
    <StyledFooterTop>
      <Container>
        <FooterLeft>
          <h3>Get in touch with us for your service</h3>
          <ul>
            <li>
              <FB />
            </li>
            <li>
              <TW />
            </li>
            <li>
              <IN />
            </li>
            <li>
              <LI />
            </li>
          </ul>
        </FooterLeft>
        <FooterRight>
          <FooterInfo title='Help line Number' body='1800 265 24 52' />
          <FooterInfo
            title='Address'
            body='NH 234 Public Square San Francisco 65368'
          />
          <FooterInfo
            title='We are open'
            body='Monday to Friday 9:00 AM to  10:00  AM'
          />
        </FooterRight>
      </Container>
    </StyledFooterTop>
  );
};

export default FooterTop;
