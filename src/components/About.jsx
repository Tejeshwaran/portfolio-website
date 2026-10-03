import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/languageContext";

function About() {
  const { t } = useLanguage();

  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="section-intro" data-reveal>
          <p className="section-kicker"><span>01</span> / {t.about.kicker}</p>
          <h2 className="section-title" id="about-title">{t.about.title}</h2>
        </div>
        <div className="about-content" data-reveal>
          <p className="about-statement">{t.about.statement}</p>
          <p>{t.about.body}</p>
          <p>{t.about.body2}</p>
          <a className="text-link" href="#contact">{t.about.cta}<ArrowUpRight size={17} aria-hidden="true" /></a>
          <div className="about-facts">
            <div><strong>MSc</strong><span>{t.about.factOne}</span></div>
            <div><strong>BCA</strong><span>{t.about.factTwo}</span></div>
            <div><strong>Berlin</strong><span>{t.about.factThree}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
