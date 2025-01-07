import Header from "./components/Header";
import Bento from "./components/Bento";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <main className="mt-48 space-y-44 max-sm:mt-0 max-sm:px-4 max-sm:space-y-32">
      <div>
        <Header />
      </div>

      <div>
        <Bento />
      </div>

      <div>
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
