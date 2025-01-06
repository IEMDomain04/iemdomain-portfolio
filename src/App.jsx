import Bento from "./components/Bento";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="">

      <div className="">
        <Header />
      </div>

      <div className="">
        <Bento />
      </div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default App;
