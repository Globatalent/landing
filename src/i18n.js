import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import LngDetector from "i18next-browser-languagedetector";
import es from './assets/locales/es.json';
import en from './assets/locales/en.json';

i18n
  .use(LngDetector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources: {
      es: {
        translation: es
      },
      en: {
        translation: en
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });


export default i18n;