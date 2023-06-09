import i18n from "i18next";
import Backend from "i18next-http-backend";
// import XHR from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
//https://github.com/i18next/react-i18next/blob/master/example/react/src/App.js
i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "th",
  debug: true,
});
// .init({
//   fallbackLng: "th",
//   ns: ["trans"],
//   defaultNS: "trans",
//   debug: true,
//   interpolation: {
//     escapeValue: false,
//   },
//   react: {
//     wait: true,
//   },
// });

export default i18n;
