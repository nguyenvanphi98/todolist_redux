import React, { Component } from 'react';

import './SignAdmin.css';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import PageSwitcher from './pages/PageSwitcher';
import FormTitle from './pages/FormTitle';
import SignOutForm from './pages/SignOutForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
          <Route path="/log-in/sign-out" component={SignOutForm}/>
            <FormTitle/>
            <PageSwitcher/>
              <Route exact path="/log-in/sign-up" component={SignUpForm}/>
              <Route path="/log-in/sign-in" component={SignInForm}/>
              
          </div>
          

        </div>
        
      </Router>
    );
  }
}

export default App;
