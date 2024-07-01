import Crabbynomics from "./components/Crabbynomics";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Joinus from "./components/Joinus";
import Welcome from "./components/Welcome";
import Who from "./components/Who";


function App() {
  return (
    <div className="App bg-sblack relative ">
      <div className="w-full relative flex flex-col justify-center items-center">
        <Header />

      </div>
      <Hero />
      <Welcome />
      <Who />
      <Crabbynomics />
      <Joinus />
    </div>
  );
}

export default App;
