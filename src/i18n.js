import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// translation resources (you can move these to separate JSON files)
const resources = {
  en: {
    translation: {
      "welcome": "Welcome, {{name}}!",
      "login.button": "Login",
      "signup.button": "Sign up",
      "email.placeholder": "Enter your email",
      "items": "You have {{count}} item",
      "items_plural": "You have {{count}} items"
    }
  },
  ta: {
    translation: {
      "welcome": "வரவேற்பு, {{name}}!",
      "login.button": "உள் செல்",
      "signup.button": "பதிவு செய்",
      "email.placeholder": "உங்கள் மின்னஞ்சலை உள்ளிடவும்",
      "items": "உங்களுக்கு {{count}} பொருள் உள்ளது",
      "items_plural": "உங்களுக்கு {{count}} பொருட்கள் உள்ளன"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('lang') || 'en', // initial language
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // react already escapes
    },
    returnObjects: true
  });

export default i18n;
