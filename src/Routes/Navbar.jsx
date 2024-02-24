import React,{useState} from 'react';

import { NavLink,Link } from 'react-router-dom';
// import {HashLink as Link} from 'react-router-hash-link'
import {CodeIcon,HamburgetMenuClose,HamburgetMenuOpen} from './Icon'

import './Styles/Navbar.css'
function Navbar(props) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    
    return (
        <div className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <span>infiniteinsights</span>
                    {/* <i className="fas fa-code"></i> */}
                    <span className="icon">
                    {/* <CodeIcon /> */}
                    </span>
                </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                // exact
                to="/"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // exact
                to="/blogs"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Explore Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // exact
                to="/user"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // exact
                to="/auth"
                smooth
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </Link>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
        </div>
        
    );
}

export default Navbar;