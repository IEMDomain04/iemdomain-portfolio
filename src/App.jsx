import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import ProjectPage from "./page/ProjectPage";
import Navbar from "./components/Navbar"; // Assume Navbar is already imported
import CaseStudy from "./page/CaseStudy";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page whenever the route changes
  }, [pathname]);

  return null; // No UI component, just side effects
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/casestudy" element={<CaseStudy />} />
      </Routes>
    </>
  );
};

export default App;