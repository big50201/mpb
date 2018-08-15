import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// components
// import './index.css';
// import App from './App';
import rootLayout from './containers/layout';

export default class Router extends Component {
  render() {
    if (true) {
      return (
        <div id="router">
          <Route component={rootLayout} />
        </div>
      );
    } else {
      return (
        <div id="login">

        </div>
      );
    }
  }
}
