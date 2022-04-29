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
        <div className="nav-logo">
      {/* <li className="nav-logo-item"></li> */}
          <Link className={`navbar__link ${location.pathname === '/home' ? 'active':''}`} to="/home"> <img className = "nav-logo-home" src="/Images/Exo-Travel-Logo.jpg" /> </Link>
      </div>
        {/* <li className="navBar_item"> */}
 
        
        {/* </li> */}
        {/* <li className="navBar_item item_left"> */}
          <Link className={`navbar__link ${location.pathname === '/exoPlanets' ? 'active':''}`} to="/exoPlanets"> <FontAwesomeIcon icon={faGlobe} /> Exo-Planets </Link>
        {/* </li> */}
        {/* <li className="navBar_item item_left"> */}
          <Link className={`navbar__link ${location.pathname === '/hubDrives' ? 'active':''}`} to="/hubDrives"> <FontAwesomeIcon icon={faShuttleSpace} /> How It Works </Link>
        {/* </li> */}
    
        {/* <li className="navBar_item item_left"> */}
          <Link className={`navbar__link ${location.pathname === '/abouts' ? 'active':''}`} to="/abouts"> <FontAwesomeIcon icon={faUserAstronaut} /> About Us </Link>
        {/* </li> */}
        {/* <li className="navBar_item item_left"> */}
          <Link className={`navbar__link ${location.pathname === '/itineraries' ? 'active':''}`} to="/itineraries"> <FontAwesomeIcon icon={faPassport} /> Itineraries </Link>
        {/* </li> */}
        {/* <li className="navBar_item item_left"> */}
        {sessionStorage.getItem('exoTravel_user') != null ? <Link className="navbar__link" to="/login" onClick={clearUser}> <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout </Link> : ''}
        {/* </li> */}
        
      </ul>
    </nav>
  )
}

