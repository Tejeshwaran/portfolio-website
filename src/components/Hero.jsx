import { ArrowDown, ArrowUpRight } from "lucide-react";
import SignalPortrait from "./SignalPortrait";
import { useLanguage } from "../i18n/languageContext";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" />{t.hero.eyebrow}</div>
          <h1 id="hero-title">{t.hero.headingA}<span>{t.hero.headingB}</span></h1>
          <p className="hero-lead">{t.hero.subtitle}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              {t.hero.viewWork}<ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-ghost" href="#contact">{t.hero.contact}</a>
          </div>
          <div className="hero-meta">
            <span>{t.hero.location}</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="signal-frame">
            <div className="signal-caption"><span>TM / SIGNAL_01</span><span aria-hidden="true">[ &lt;/&gt; ]</span></div>
            <SignalPortrait />
            <div className="signal-bottom"><span>{t.hero.visualCaption}</span><span aria-hidden="true">01 — ∞</span></div>
          </div>
          <div className="hero-visual-note">
            <span className="status-dot" aria-hidden="true" />
            {t.hero.focus}
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><ArrowDown size={16} aria-hidden="true" />{t.hero.scroll}</a>
    </section>
  );
}

export default Hero;
