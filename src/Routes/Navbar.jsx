import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink,Link } from 'react-router-dom';
// import {HashLink as Link} from 'react-router-hash-link'
import {CodeIcon,HamburgetMenuClose,HamburgetMenuOpen} from './Icon'

import './Styles/Navbar.css'
function Navbar(props) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    let location = useLocation();
    let currentroute = location.pathname;
   
    
    let navstyle_hm = {
      backgroundColor: 'transparent',
      marginBottom:'-110px'
    }
    let navstyle_nhm = {
      backgroundColor: '#607274',
      boxShadow:'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;'
    }

    return (
        <div className="navbar" style={currentroute==='/'?navstyle_hm:navstyle_nhm}>
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