import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

// components
import './index.css';
import App from './App';

export default class Router extends Component {
  render() {
    return <div id="wrapper">
      <Switch>
        <Route exact path='/' component={App} />
        {/* <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} /> */}
        {/* when none of the above match, <NoMatch> will be rendered */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  }
}
