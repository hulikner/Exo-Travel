import React from "react";
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faUserGroup, faHouse, faClipboardCheck, faCalendarDays, faArrowRightFromBracket, faNewspaper } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
    return (
        <footer>
            <img className="logo" src={"./Image/Hub.jpg"} />
            <img className="team" src={""}/> <img className="team" src={""}/> <p></p> <img className="team" src={""}/> <img className="team" src={""}/>
            <p>&copy; Derick Cravens - C55</p>
        </footer>
    )
}  