import { useLanguage } from "../i18n/languageContext";
import { LANGUAGES } from "../i18n/translations";

function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="language-switcher" role="group" aria-label={t.nav.switchLabel}>
      {LANGUAGES.map((option) => (
        <button
          key={option.code}
          type="button"
          lang={option.code}
          className={option.code === lang ? "is-active" : ""}
          aria-label={option.name}
          aria-pressed={option.code === lang}
          onClick={() => setLang(option.code)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
