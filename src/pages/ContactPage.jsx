import MainLayout from "../components/layout/MainLayout.jsx";
import ContactHero from "../components/contact/ContactHero.jsx";
import ContactMainContent from "../components/contact/ContactMainContent.jsx";
import FAQSection from "../components/contact/FAQSection.jsx";

const ContactPage = () => {
  return ( 
    <MainLayout> 
      <main> 
        <ContactHero /> 
        <ContactMainContent /> 
        <FAQSection /> 
      </main> 
    </MainLayout>
  );
};

export default ContactPage;
