import React, { Component } from 'react'


export default class SignOutForm extends Component {
    constructor(props) {
        super(props);
        localStorage.removeItem("token")
   }
    render() {
         
        return (
            <div>
                <div className = "logout">
                <h1> GoodBye See you again </h1> <br/><br/><br/><br/>
                {/* <h1> <Link to="/log-in/sign-in"> SignIn </Link> </h1> */}
            </div>
            </div>
        )
    }
}
