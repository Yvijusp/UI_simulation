import { Title02 } from '../../GlobalStyles';
import { StyledFooterInfo } from './Footer.styled';

interface FooterInfoProps {
  title: string;
  body: string;
}

const FooterInfo = ({ title, body }: FooterInfoProps) => {
  return (
    <StyledFooterInfo>
      <p>{title}</p>
      <Title02>{body}</Title02>
    </StyledFooterInfo>
  );
};

export default FooterInfo;
