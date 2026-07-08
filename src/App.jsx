import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/service";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
    </>
  );
}

export default App;