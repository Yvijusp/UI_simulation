import Button from '../components/Buttons/Button';
import FooterInfo from '../components/Footer/FooterInfo';
import TextInput from '../components/Form/TextInput';
import Template from '../components/templates/Template';
import { Container } from '../GlobalStyle';
import {
  Contacts,
  ContactsLeft,
  ContactsRight,
  ContactsWrapper,
} from './Contact.styled';

const Contact = () => {
  return (
    <Template noContacts={true}>
      <ContactsWrapper>
        <Container>
          <Contacts>
            <ContactsLeft>
              <h1>Get in touch with our experts</h1>
              <form>
                <TextInput placeholder='Your full Name' />
                <TextInput placeholder='Your email' />
                <TextInput placeholder='Select service type' />
                <TextInput placeholder='Message' />
                <Button primary text='Send message' />
              </form>
            </ContactsLeft>
            <ContactsRight>
              <FooterInfo
                title='Address'
                body='NH 234 Public Square San Francisco 65368'
              />
              <FooterInfo
                title='Contact Details'
                body='1800 265 24 52
Finsweet@gmail.com'
              />
              <FooterInfo
                title='Opening Hours'
                body='Monday to Friday 9:00 AM to  10:00  AM'
              />
            </ContactsRight>
          </Contacts>
        </Container>
      </ContactsWrapper>
    </Template>
  );
};

export default Contact;
