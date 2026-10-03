import { useEffect, useMemo, useState } from "react";
import { translations, DEFAULT_LANGUAGE } from "./translations";
import { LanguageContext } from "./languageContext";

const STORAGE_KEY = "portfolio-lang";

function readSavedLanguage() {
  // Remember the visitor's last choice.
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
  } catch {
    // Private mode can block localStorage. Not a problem, just skip it.
  }

  // No saved choice? Try the browser language.
  const browser = window.navigator.language?.slice(0, 2);
  if (browser && translations[browser]) return browser;

  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readSavedLanguage);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore. Saving is a nice-to-have.
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang] ?? translations[DEFAULT_LANGUAGE],
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
