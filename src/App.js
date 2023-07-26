import React from "react";
import LandingPage from "./pages/LandingPage";
import AboutSection from "./components/AboutSection";
import ArticleSection from "./components/ArticleSection";

const App = () => {
  return (
    <div>
      <LandingPage />
      <AboutSection />
      <ArticleSection />
    </div>
  );
};

export default App;
