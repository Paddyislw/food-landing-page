import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ArticleSection from "../components/ArticleSection";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ArticleSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
