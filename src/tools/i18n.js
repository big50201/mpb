import en_us from '../locales/en-US.messages';
import zh_hant_tw from '../locales/zh-Hant-TW.messages';

// react-intl is not complete, it's needs to direct export messages.
export function i18n (locale, id) {
  switch (locale) {
    case 'en':
    case 'en-US':
      return en_us[id];
    case 'zh':
    case 'zh-Hant-TW':
      return zh_hant_tw[id];
    default:
      return '';
  }
}