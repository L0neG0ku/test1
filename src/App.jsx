import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import SurveyPage from "./pages/SurveyPage";
import WaitlistPage from "./pages/WaitlistPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExplorePage from "./pages/ExplorePage";
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

        <Route path="/explore" element={<ExplorePage />} />
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
