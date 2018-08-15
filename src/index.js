import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// redux
import store from './store';

// vendor
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import en_us from './locales/en-US.messages';
import zh_hant from './locales/zh-Hant-TW.messages';
import 'antd/dist/antd.css';

// containers
import Router from './router';

// stylesheets
import './stylesheets/style.scss';

import registerServiceWorker from './registerServiceWorker';

// i18n
addLocaleData([...en, ...zh]);
const { language = 'zh' } = localStorage;
const getLocaleAndMessages = {
  'zh': {
    locale: 'zh',
    messages: zh_hant
  },
  'en': {
    locale: 'en',
    messages: en_us
  },
  'default': {
    locale: 'en',
    messages: en_us
  },
};

ReactDOM.render(
  <IntlProvider
    locale={(getLocaleAndMessages[language] || getLocaleAndMessages['default']).locale}
    key={(getLocaleAndMessages[language] || getLocaleAndMessages['default']).locale}
    messages={(getLocaleAndMessages[language] || getLocaleAndMessages['default']).messages} >
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </IntlProvider>
  , document.getElementById('root'));

registerServiceWorker();
