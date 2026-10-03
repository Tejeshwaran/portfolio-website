import { useLanguage } from "../i18n/languageContext";

const languageKeys = ["german", "english", "tamil"];

function Language() {
  const { t } = useLanguage();

  return (
    <section className="section languages-section" id="languages" aria-labelledby="languages-title">
      <div className="container language-layout">
        <div data-reveal>
          <p className="section-kicker"><span>05</span> / {t.languages.kicker}</p>
          <h2 className="section-title" id="languages-title">{t.languages.title}</h2>
          <p className="section-description">{t.languages.intro}</p>
        </div>
        <div className="language-list" data-reveal>
          {languageKeys.map((key) => (
            <div className="language-row" key={key}>
              <strong>{t.languages[key].name}</strong>
              <span>{t.languages[key].description}</span>
              <span className="language-level">{t.languages[key].level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Language;
