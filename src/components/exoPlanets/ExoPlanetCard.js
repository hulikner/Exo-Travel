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
          <div className="exoPlanet-card-lightYears">
            <p className="card-exoPlanet-lightyears">
              Light-Years Away:<span className="exoPlanet-lightYears-number"> {exoPlanet.lightYears}</span>{" "}
            </p>
          </div>
        </Link>
        <p className="card-exoPlanet-starRating">
          <Rating style={{ color: "rgb(179, 9, 9)" }} value={exoPlanet.rating} readOnly />{" "}
        </p>
      </div>
    </div>
  );
};
