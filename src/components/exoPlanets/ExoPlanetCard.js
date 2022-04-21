import react from "react";
import "./ExoPlanetCard.css"

export const ExoPlanetCard = ({exoPlanet}) => {

    return(
        <div className="exoPlanet-card">
            <div className="exoPlanet-card-content">
            <img className="card-exoPlanet-img" src={`./Images/${exoPlanet.name}.jpg`}/>
                <h3 className="card-exoPlanet-name"> {exoPlanet.name}</h3>
                <p className="card-exoPlanet-lightyears"> {exoPlanet.lightYears} </p>
                
            </div>
        </div>
    )
}

