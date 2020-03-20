import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav>
        <div className="nav-wrapper">
            <a href="#" className="brand-logo my-logo">Learning</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/courses">Courses</NavLink></li>
                <li><NavLink to="#">Blog</NavLink></li>
                <li><NavLink to="#">Forum</NavLink></li>
                <li><NavLink to="#">Contact Us</NavLink></li>
                <li><NavLink to="#" className="waves-effect waves-light btn-large my-button">Sign up</NavLink></li>
            </ul>
        </div>
    </nav>
    );
}

export default Header;