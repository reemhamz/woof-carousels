import "./styles/App.scss";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Stats from "./components/Stats";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Stats />
        <Benefits />
        <Carousel />
        <Contact />
      </main>
    </div>
  );
}

export default App;
