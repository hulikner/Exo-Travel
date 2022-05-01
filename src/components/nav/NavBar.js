// Imports
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faArrowRightFromBracket, faPassport, faShuttleSpace, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

// NavBar for all pages
export const NavBar = ({ clearUser }) => {
  // React-Router-DOM use
  const location = useLocation();

  // Displays NavBar on DOM
  return (
    <nav className="nav-bar">
      <ul className="navBar">
        <div className="nav-logo">
          <Link className={`navbar__link ${location.pathname === "/home" ? "active" : ""}`} to="/home">
            {" "}
            <img height='50px' width='100px' className="nav-logo-home" src="/Images/Exo-Travel-Logo.svg" />{" "}
          </Link>
        </div>
        <Link className={`navbar__link ${location.pathname === "/exoPlanets" ? "active" : ""}`} to="/exoPlanets">
          {" "}
          <FontAwesomeIcon icon={faGlobe} /> Exo-Planets{" "}
        </Link>
        <Link className={`navbar__link ${location.pathname === "/hubDrives" ? "active" : ""}`} to="/hubDrives">
          {" "}
          <FontAwesomeIcon icon={faShuttleSpace} /> How It Works{" "}
        </Link>
        <Link className={`navbar__link ${location.pathname === "/abouts" ? "active" : ""}`} to="/abouts">
          {" "}
          <FontAwesomeIcon icon={faUserAstronaut} /> About Us{" "}
        </Link>
        <Link className={`navbar__link ${location.pathname === "/itineraries" ? "active" : ""}`} to="/itineraries">
          {" "}
          <FontAwesomeIcon icon={faPassport} /> Itineraries{" "}
        </Link>
        {sessionStorage.getItem("exoTravel_user") != null ? (
          <Link className="navbar__link" to="/login" onClick={clearUser}>
            {" "}
            <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout{" "}
          </Link>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};
