import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Language from "./components/Language";
//import Service from "./components/service";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Language />
      <Contact />
    </>
  );
}

export default App;