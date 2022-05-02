// Imports
import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "./ExoPlanetCard.css";

//Exo-Planet Card
export const ExoPlanetCard = ({ exoPlanet }) => {
  return (
    <div className="exoPlanet-card">
      <div className="exoPlanet-card-content">
        <Link className="exoPlanet-link" to={`/exoPlanets/${exoPlanet.id}`}>
          <img className="card-exoPlanet-img" src={`./Images/${exoPlanet.name}.jpg`} />
          <h3 className="card-exoPlanet-name"> {exoPlanet.name}</h3>
       
            <p className="card-exoPlanet-lightyears">
              Light-Years Away:<span className="exoPlanet-lightYears-number"> {exoPlanet.lightYears}</span>{" "}
            </p>
        
          <Rating style={{ color: "#C0C0C0" }} value={exoPlanet.rating} readOnly />{" "}
        </Link>
      
    
      </div>
    </div>
  );
};
