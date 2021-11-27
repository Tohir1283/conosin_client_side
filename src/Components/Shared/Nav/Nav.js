import React, { useState } from "react";
import "./Nav.css";

import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import LoggedInOptions from "../../LoggedInOptions/LoggedInOptions";
import useAuth from "../../../Hooks/useAuth";

const Nav = () => {
  const { admin, user } = useAuth();
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      {user.email && <LoggedInOptions />}
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img
            src="https://apollotran.b-cdn.net/prestashop/leo_conosin_demo/img/leo-conosin-logo-1481172290.jpg"
            alt=""
          />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/luxuryWatches">Luxury Watches</NavLink>
            </li>
            <li>
              <NavLink to="/ourStory">Our Story</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            {!user.email && (
              <>
                <li>
                  <NavLink to="/logIn">Log In</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
            {admin && (
              <li>
                <NavLink to="/#">Administrator</NavLink>
              </li>
            )}
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <GiHamburgerMenu
              onClick={() => setShowMediaIcons(!showMediaIcons)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
