import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import SurveyPage from "./pages/SurveyPage";
import WaitlistPage from "./pages/WaitlistPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import {
  ProblemPage,
  SolutionPage,
  HowItWorksPage,
  WhyParentsPage,
  WhatWeCoverPage,
  TeamPage,
  WhyKribblePage,
  DevelopmentalStoryPage,
  FaqPage,
} from "./pages/ChapterPages";
import { PrivacyPage, TermsPage } from "./pages/LegalPages";
import NotFoundPage from "./pages/NotFoundPage";
import usePageMeta from "./seo/usePageMeta";

import "./styles/kribble.css";
import "./App.css";

/* The router itself is supplied by the caller: BrowserRouter in main.jsx,
   StaticRouter in entry-server.jsx when pages are prerendered at build time. */
function App() {
  usePageMeta();

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Each chapter of the story, as its own page */}
        <Route path="/problem" element={<ProblemPage />} />
        <Route path="/solution" element={<SolutionPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/why-parents" element={<WhyParentsPage />} />
        <Route path="/what-we-cover" element={<WhatWeCoverPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/why-kribble" element={<WhyKribblePage />} />
        <Route path="/developmental-story" element={<DevelopmentalStoryPage />} />
        <Route path="/faq" element={<FaqPage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />

        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
