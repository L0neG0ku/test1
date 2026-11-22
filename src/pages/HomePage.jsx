import Hero from "../sections/Hero";
import Proof from "../sections/Proof";
import WeVisit from "../sections/WeVisit";
import HowItWorks from "../sections/HowItWorks";
import TryADay from "../sections/TryADay";
import Activities from "../sections/Activities";
import Faq from "../sections/Faq";
import FinalCta from "../sections/FinalCta";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";

/* Short on purpose: one idea per section, in the order a parent's questions
   come up. Is it safe? Will it make my life easier? Can I try it? What about
   activities? Then the answers to what's left, and the download. */
function HomePage() {
  useReveal();

  return (
    <>
      <Hero />
      <Proof />
      <WeVisit />
      <HowItWorks />
      <TryADay />
      <Activities />
      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}

export default HomePage;
