import Header from "./components/Header";
import Bento from "./components/Bento";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
    <Navbar />
    <main className="mt-32 space-y-44 max-sm:-mt-16 max-sm:px-4 max-sm:space-y-32">
      <div id="header-section">
        <Header />
      </div>

      <div id="bento-section">
        <Bento />
      </div>

      <div id="project-section">
        <Projects />
      </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;