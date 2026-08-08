import ContactSection from "../sections/ContactSection";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";

function ContactPage() {
  useReveal();

  return (
    <>
      <ContactSection />
      <Footer />
    </>
  );
}

export default ContactPage;
