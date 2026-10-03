import { createContext, useContext } from "react";

// This holds "which language is active" for the whole website.
// The value is filled in by <LanguageProvider>.
export const LanguageContext = createContext(null);

// Use this inside any component: const { t, lang, setLang } = useLanguage();
export function useLanguage() {
  const ctx = useContext(LanguageContext);

  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }

  return ctx;
}
