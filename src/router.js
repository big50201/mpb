import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

// components
// import './index.css';
// import App from './App';
import rootLayout from './container/layout';

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
