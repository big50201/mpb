import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// components
import rootLayout from './containers/layout';
import login from './containers/login';

export default class Router extends Component {
  render() {
    if (localStorage.token) {
      return (
        <div id="router">
          <Route component={rootLayout} />
        </div>
      );
    } else {
      return (
        <div id="login">
          <Route component={login} />
        </div>
      );
    }
  }
}
