import react from "react";
import { Link } from "react-router-dom";

import "./AboutCard.css"

export const AboutCard = ({about}) => {

    return(
        <div className="about-card">
            <div className="about-card-content">
            <Link className="about-link" to={`/abouts/${about.id}` }>
                <h3 className="card-about-name"> {about.name}</h3>
            <img className="card-about-pic" src={`${about.pic}`}/>
                <p className="card-about-cardDetail"> {about.cardDetail} </p>
            </Link>
            </div>
        </div>
    )
}