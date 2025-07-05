import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import ProjectPage from "./page/ProjectPage";
import Navbar from "./components/Navbar";
import CaseStudy from "./page/CaseStudy";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null; 
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