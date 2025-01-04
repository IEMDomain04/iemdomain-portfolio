import Bento from "./components/Bento";
import Header from "./components/Header";
import Projects from "./components/Projects";

const App = () => {
  return (
    <main className="h-screen">

      <div className="">
        <Header />
      </div>

      <div className="">
        <Bento />
      </div>

    </main>
  );
};

export default App;
