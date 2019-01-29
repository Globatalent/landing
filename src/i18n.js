import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import LngDetector from "i18next-browser-languagedetector";
import es from './assets/locales/es.json';
import en from './assets/locales/en.json';
import it from './assets/locales/it.json';
import de from './assets/locales/de.json';
import pt from './assets/locales/pt.json';

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
      },
      it: {
        translation: it
      },
      de: {
        translation: de
      },
      pt: {
        translation: pt
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });


export default i18n;