/**
 * Each chapter of the story also lives at its own URL.
 * The chapter body is the exact same section used on the homepage — the page
 * just wraps it with a header and the chapter switcher.
 */
import ChapterNav from "../components/ChapterNav";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";

import ChapterProblem from "../sections/ChapterProblem";
import ChapterSolution from "../sections/ChapterSolution";
import ChapterHowItWorks from "../sections/ChapterHowItWorks";
import ChapterWhyParents from "../sections/ChapterWhyParents";
import ChapterWhatWeCover from "../sections/ChapterWhatWeCover";
import ChapterTeam from "../sections/ChapterTeam";
import WhyKribble from "../sections/WhyKribble";
import DevelopmentalStory from "../sections/DevelopmentalStory";
import Faq from "../sections/Faq";

const page = (eyebrow, title, Section) =>
  function ChapterPage() {
    useReveal();
    return (
      <>
        <ChapterNav eyebrow={eyebrow} title={title} />
        <Section showEyebrow={false} />
        <Footer />
      </>
    );
  };

export const ProblemPage = page(
  "Chapter I · The problem",
  "What makes finding childcare so hard right now.",
  ChapterProblem
);

export const SolutionPage = page(
  "Chapter II · The solution",
  "One app that replaces the guesswork.",
  ChapterSolution
);

export const HowItWorksPage = page(
  "Chapter III · How it works",
  "From first search to first morning, in four steps.",
  ChapterHowItWorks
);

export const WhyParentsPage = page(
  "Chapter IV · Why parents love it",
  "Help that stays quietly in the background.",
  ChapterWhyParents
);

export const WhatWeCoverPage = page(
  "Chapter V · What we cover",
  "Every stage of your little one's early years.",
  ChapterWhatWeCover
);

export const TeamPage = page(
  "Chapter VI · The team",
  "The three people building Kribble.",
  ChapterTeam
);

export const WhyKribblePage = page(
  "Why Kribble",
  "Childcare, thoughtfully brought together.",
  WhyKribble
);

export const DevelopmentalStoryPage = page(
  "Coming to Kribble",
  "A developmental story, from Day One.",
  DevelopmentalStory
);

export const FaqPage = page(
  "Questions",
  "Asked often. Answered honestly.",
  Faq
);
