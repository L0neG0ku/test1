import Hero from "../sections/Hero";
import ChapterProblem from "../sections/ChapterProblem";
import ChapterSolution from "../sections/ChapterSolution";
import WhyKribble from "../sections/WhyKribble";
import ChapterHowItWorks from "../sections/ChapterHowItWorks";
import ChapterWhyParents from "../sections/ChapterWhyParents";
import DevelopmentalStory from "../sections/DevelopmentalStory";
import ChapterWhatWeCover from "../sections/ChapterWhatWeCover";
import ChapterTeam from "../sections/ChapterTeam";
import Faq from "../sections/Faq";
import ContactSection from "../sections/ContactSection";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";

function HomePage() {
  useReveal();

  return (
    <>
      <Hero />
      <ChapterProblem />
      <ChapterSolution />
      <WhyKribble />
      <ChapterHowItWorks />
      <ChapterWhyParents />
      <DevelopmentalStory />
      <ChapterWhatWeCover />
      <ChapterTeam />
      <Faq />
      <ContactSection />
      <Footer />
    </>
  );
}

export default HomePage;
