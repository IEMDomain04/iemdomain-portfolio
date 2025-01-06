import Header from "./components/Header";
import Bento from "./components/Bento";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>

      <div className="my-52 max-sm:mb-32">
        <Header />
      </div>

      <div className="my-52 max-sm:mb-32">
        <Bento />
      </div>

      <div className="my-52 max-sm:mb-32">
        <Projects />
      </div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default App;
