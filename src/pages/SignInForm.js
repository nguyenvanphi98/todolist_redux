import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token")

    let signIn = true
    if (token == null) {
      signIn = false
    }

    this.state = {
      email: '',
      password: '',
      emailErrol: '',
      passwordErrol: '',
      signIn 
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

  // _onValidate = () => {
  //   let emailErrol = '';
  //   let passwordErrol = '';

  //   if(!this.state.email.includes("@")){
  //       emailErrol = "invalid email";
  //   }
  //   if(this.state.password)

  //   if(emailErrol){
  //     this.setState({
  //       emailErrol
  //     })
  //     return false;
  //   }
  //   return true;
  // }
  
  _onSubmit = (e) => {
    e.preventDefault();
    const isValidate = this._onValidate
    if(isValidate){
      console.log(this.state);
      
    }

    let { email, password } = this.state
    if(email ==='' || password === ''){
        if(email===""){
          alert('Tài khoản không chính xác')
        } else
        {
          alert('Mật khẩu không chính xác ')
        }
    }
    
    if (email === 'phi@gmail.com' && password === '123') {
      localStorage.setItem("token", "nvp")
      this.setState({
        signIn: true
      })
      
    }
    console.log(this.state);
  }

  render() {
    let { email, password, signIn, emailErrol, passwordErrol } = this.state

    if (signIn) {
      return <Redirect to="/" />
    }
    return (
      <div className="FormCenter">
        <form onSubmit={this._onSubmit} className="FormFields" onSubmit={this._onSubmit}>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
            <input type="email" id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={this._onChange}
              
              />
              <p>{ emailErrol } </p>
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={this._onChange}
              />
              <p>{ passwordErrol } </p>
          </div>

          <div className="FormField">
            <button
              className="FormField__Button mr-20">Sign In</button>
            <Link to="/log-in/" className="FormField__Link">Create an account</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
