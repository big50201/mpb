import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

// redux
import store from "./store";

// vendor
import 'antd/dist/antd.css';

// componenets
import Router from './router';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
