import Button from '../components/Buttons/Button';
import FooterInfo from '../components/Footer/FooterInfo';
import TextInput from '../components/Form/TextInput';
import Template from '../components/templates/Template';
import { Container } from '../GlobalStyle';
import {
  Contacts,
  ContactsFooter,
  ContactsFooterImage,
  ContactsLeft,
  ContactsMap,
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
      <ContactsFooter>
        <ContactsMap>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96785.66517330623!2d-74.03187285992507!3d40.70586250102788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2slt!4v1635174254971!5m2!1sen!2slt'
            loading='lazy'
            title='Contacts map'
          ></iframe>
        </ContactsMap>
        <ContactsFooterImage></ContactsFooterImage>
      </ContactsFooter>
    </Template>
  );
};

export default Contact;
