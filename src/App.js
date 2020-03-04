import React, { Component } from 'react'

import './App.css';
import Add from './Components/Add';
import SignApp from './SignApp';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router >
      <div>
        <Switch>
          <Route exact path="/" component={Add}/>
          <Route  path="/log-in" component={SignApp}/>
        </Switch>
      </div>
      </Router>
    )
  }
}
