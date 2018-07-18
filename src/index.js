import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

// componenets
import Router from './router';

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
