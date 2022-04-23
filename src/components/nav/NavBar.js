import React from "react"
import { Link, useLocation } from "react-router-dom"
import "./NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faUserGroup, faHouse, faClipboardCheck, faCalendarDays, faArrowRightFromBracket, faNewspaper, faBookmark,faPassport, faShuttleSpace, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'



export const NavBar = ({clearUser}) => {
  const location = useLocation();
  return (
    <nav>
      <ul className="navBar">
        <li className="navBar_item">
 

          <Link className={`navbar__link ${location.pathname === '/home' ? 'active':''}`} to="/home"> <FontAwesomeIcon icon={faHouse} /> Home </Link>
        </li>
        <li className="navBar_item item_left">
          <Link className={`navbar__link ${location.pathname === '/exoPlanets' ? 'active':''}`} to="/exoPlanets"> <FontAwesomeIcon icon={faGlobe} /> Exo-Planets </Link>
        </li>
        <li className="navBar_item item_left">
          <Link className={`navbar__link ${location.pathname === '/howitworks' ? 'active':''}`} to="/howitworks"> <FontAwesomeIcon icon={faShuttleSpace} /> How It Works </Link>
        </li>
    
        <li className="navBar_item item_left">
          <Link className={`navbar__link ${location.pathname === '/abouts' ? 'active':''}`} to="/abouts"> <FontAwesomeIcon icon={faUserAstronaut} /> About Us </Link>
        </li>
        <li className="navBar_item item_left">
          <Link className={`navbar__link ${location.pathname === '/itineraries' ? 'active':''}`} to="/itineraries"> <FontAwesomeIcon icon={faPassport} /> Itineraries </Link>
        </li>
        <li className="navBar_item item_left">
        {sessionStorage.getItem('exoPlanet_user_name') != null ? <Link className="navbar__link" to="/login" onClick={clearUser}> <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout </Link> : ''}
        </li>
      </ul>
    </nav>
  )
}

