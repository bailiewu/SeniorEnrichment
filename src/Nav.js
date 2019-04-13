import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends Component {

    render() {
        const style1 = {
            margin: '20px'
        }
        return (
            <ul className="nav nav-pills" style={style1}>
                <li className="nav-item">
                    <Link to="/" className={`nav-link ${this.props.location.pathname === '/campuses' ? 'active' : ''}`}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/students" className={`nav-link ${this.props.location.pathname === '/students' ? 'active' : ''}`}>Students</Link>
                </li>
            </ul>
        )
    }
}
