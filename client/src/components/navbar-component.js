import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
      return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/homepage" className="navbar-brand">מערכת רישום</Link>
          <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/student" className="nav-link">רשום תלמיד</Link>
            </li>
            <li className="navbar-item">
            <Link to="/results" className="nav-link">תוצאות</Link>
            </li>
          </ul>
          </div>
        </nav>
      );
    }
  }