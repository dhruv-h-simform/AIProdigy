import i18n, { use } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';
import en from './en.json';
import es from './es.json';

use({
  init: Function.prototype,
  type: 'languageDetector',
  async: true, // flags below detection to be async

  detect: async (callback: any) => {
    const deviceLang = getLocales()[0].languageCode;
    callback(deviceLang);
  },
  cacheUserLanguage: () => {
    // TODO used when we want to get caches of user language
  },
})
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    debug: true,
    ns: ['common'],
    defaultNS: 'common',
    resources: {
      en: en,
      es: es,
    },
  });

export default i18n;
