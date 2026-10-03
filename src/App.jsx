import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Language from "./components/Language";
import Contact from "./components/Contact";
import { usePageMotion } from "./hooks/usePageMotion";
import { useLanguage } from "./i18n/languageContext";

function App() {
  const pageRef = usePageMotion();
  const { t } = useLanguage();
  return (
    <>
      <a className="skip-link" href="#main">{t.nav.skip}</a>
      <Navbar />
      <main id="main" ref={pageRef}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Language />
        <Contact />
      </main>
    </>
  );
}

export default App;
