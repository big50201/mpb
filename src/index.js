import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// redux
import store from './store';

// vendor
import 'antd/dist/antd.css';

// containers
import Router from './router';

// stylesheets
import './stylesheets/style.scss';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
