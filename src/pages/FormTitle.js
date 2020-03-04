import React, { Component } from 'react'

import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';

export default class FormTitle extends Component {
    render() {
        return (
            <div className="FormTitle">
                <NavLink to="/log-in/sign-in" activeClassName="FormTitle__Link--Active"
                    className="FormTitle__Link">Sign In</NavLink>
                or <NavLink exact to="/log-in/sign-up" activeClassName="FormTitle__Link--Active"
                    className="FormTitle__Link">Sign Up</NavLink>
            </div>
        )
    }
}
