import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };

    }

    _onChange = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    _onSubmit = (e) => {
        e.preventDefault();

    }

    render() {
      let {name, password, email, hasAgreed} = this.state
        return (
        <div className="FormCenter">
            <form onSubmit={this._onSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" 
                  className="FormField__Input" 
                  placeholder="Enter your full name" 
                  name="name" value={name} 
                  onChange={this._onChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" 
                  className="FormField__Input" 
                  placeholder="Enter your password" 
                  name="password" 
                  value={password} 
                  onChange={this._onChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" 
                  className="FormField__Input" 
                  placeholder="Enter your email" 
                  name="email" 
                  value={email} 
                  onChange={this._onChange} />
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" 
                      name="hasAgreed" 
                      value={hasAgreed} 
                      onChange={this._onChange} /> I agree all statements in 
                      <a href="" 
                      className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button>
                   <Link to="/log-in/sign-up" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;
