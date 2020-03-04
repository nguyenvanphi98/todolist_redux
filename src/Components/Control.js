import React, { Component } from 'react'
import Search from './Search'
import Soft from './Soft'

export default class Control extends Component {
    render() {
        return (
            <div className="row mt-15">
                {/* Search */}
                <Search />
                {/* Soft */}
                <Soft />
            </div>

        )
    }
}
