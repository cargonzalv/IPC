import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en";
import es from "./locales/es";

const resources = {
  en: { translation: en },
  es: { translation: es },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: i18n.language,
    resources,
    lng: "es",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
