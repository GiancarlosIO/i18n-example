import BackendI18n from 'i18next-xhr-backend';
import LanguageDetectorI18n from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const backendI18n = new BackendI18n(null, {
  loadpath: '/locales/{{lng}}/{{ns}}.json',
  allowMultiLoading: false,
  // parse() {}
  crossdomain: false,
  withCredentials: true,
  overrideMimeType: false,
  // customHeaders: {}
  // ajax: function (url, options, callback, data) {},
  // adds parameters to resource URL. 'example.com' -> 'example.com?v=1.3.5'
  // queryStringParams: { v: '1.3.5' }
})

const languageDetectorI18n = new LanguageDetectorI18n(null, {
  // order and from where user language should be detected
  order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'myDomain',

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement
})

const init = () => i18n
    .use(backendI18n)
    .use(languageDetectorI18n)
    .use(initReactI18next)
    .init({
      debug: true,
      fallbackLng: ['es', 'en', 'ru'],
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      }
    })


export default init;