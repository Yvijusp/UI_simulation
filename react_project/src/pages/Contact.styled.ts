import styled from 'styled-components';
import { StyledFooterInfo } from '../components/Footer/Footer.styled';
import { StyledTextInput } from '../components/Form/Form.styled';

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
