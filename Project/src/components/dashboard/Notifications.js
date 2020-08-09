import React, { Component } from 'react'
import {NavLink } from "react-router-dom"

export default class Notifications extends Component {
    render() {
        return (
            <div>
                <ul className="right">
            <li><NavLink to="/">Notification</NavLink></li>
            </ul>
                
            </div>
        )
    }
}
