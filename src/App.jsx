import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./page/HomePage";
import ProjectPage from "./page/ProjectPage";
import Navbar from "./components/Navbar"; // Assume Navbar is already imported

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
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </>
  );
};

export default App;