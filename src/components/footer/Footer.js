import React from "react";
import "./Footer.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faUserGroup, faHouse, faClipboardCheck, faCalendarDays, faArrowRightFromBracket, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { HubDriveCard } from "../hubDrives/HubDriveCard";

export const Footer = () => {
    return (
        <footer>
            <img className="logo" src="/Images/Exo-Travel-Logo.jpg" />
            <p>&copy; Derick Cravens - C55</p>
        </footer>
    )
}  