import React, { Component } from 'react'

import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';

export default class PageSwitcher extends Component {
    render() {
        return (
            <div className="PageSwitcher">
                <NavLink to="/log-in/sign-in" activeClassName="PageSwitcher__Item--Active"
                    className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/log-in/sign-up" activeClassName="PageSwitcher__Item--Active"
                    className="PageSwitcher__Item">Sign Up</NavLink>
            </div>

        )
    }
}
