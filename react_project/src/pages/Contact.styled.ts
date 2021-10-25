import styled from 'styled-components';
import { StyledFooterInfo } from '../components/Footer/Footer.styled';
import { StyledTextInput } from '../components/Form/Form.styled';
import ContactsImage from '../assets/images/Contacts/contactfooter.png';

export const ContactsWrapper = styled.section`
  padding: 80px 0 128px 0;
`;

export const Contacts = styled.section`
  display: flex;
  align-items: center;
`;

export const ContactsLeft = styled.div`
  width: 626px;
  margin-right: 141px;

  h1 {
    width: 500px;
    margin-bottom: 48px;
  }
  ${StyledTextInput} {
    background-color: var(--lightgrey-color);
    margin-bottom: 4px;
  }
  ${StyledTextInput}:last-of-type {
    margin-bottom: 64px;
  }
`;

export const ContactsRight = styled.div`
  width: 479px;
  margin-top: 130px;

  ${StyledFooterInfo} {
    white-space: pre;
  }
`;

export const ContactsFooter = styled.section``;

export const ContactsMap = styled.div`
  position: relative;
  height: 344px;

  iframe {
    width: 1280px;
    height: 512px;
    position: absolute;
    top: 0;
    left: 322px;

    border: 1px solid var(--greysteel-color);
  }
`;

export const ContactsFooterImage = styled.div`
  background: url(${ContactsImage});
  background-repeat: no-repeat;
  background-size: cover;

  height: 448px;
`;
