import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/service";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en");
  };

  return (
    <>
      <Navbar
        language={language}
        toggleLanguage={toggleLanguage}
      />

      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
    </>
  );
}

export default App;