import react from "react";
import { Link } from "react-router-dom";
import { StarRating } from "../reviews/StarRating"
import "./ExoPlanetCard.css"

export const ExoPlanetCard = ({exoPlanet}) => {

    return(
        <div className="exoPlanet-card">
            <div className="exoPlanet-card-content">
            <Link className="exoPlanet-link" to={`/exoPlanets/${exoPlanet.id}` }>
            <img className="card-exoPlanet-img" src={`./Images/${exoPlanet.name}.jpg`}/>
                <h3 className="card-exoPlanet-name"> {exoPlanet.name}</h3>
                <p className="card-exoPlanet-lightyears">Light-Years Away: {exoPlanet.lightYears} </p>
               
            </Link>
                <p className="card-exoPlanet-starRating"> <StarRating /> </p>
            </div>
        </div>
    )
}

