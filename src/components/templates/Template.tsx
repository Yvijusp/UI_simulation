import Footer from '../Footer/Footer';
import Contacts from '../Footer/FooterTop';
import Header from '../Header/Header';

interface TemplateProps {
  children: React.ReactNode;
  noContacts?: boolean;
}

const Template = ({ children, noContacts }: TemplateProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {!noContacts && <Contacts />}
      <Footer />
    </>
  );
};

export default Template;
