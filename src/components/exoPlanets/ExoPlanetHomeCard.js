// Imports
import React, { useEffect, useState } from "react";
import "../home/Home.css";
import { Link, useParams } from "react-router-dom";
import { getAllExoPlanets } from "../../modules/ExoPlanetManager";
import Rating from "@mui/material/Rating";

// Exo-Planet card for Home page
export const ExoPlanetHomeCard = () => {
  // State setState
  const [exoPlanets, setExoPlanets] = useState([]);

  // React-Router-DOM uses
  const { exoPlanetId } = useParams();

  // Sets the list of Exo-Planets
  useEffect(() => {
    getAllExoPlanets().then(setExoPlanets);
  }, []);

  // Exo-Planet Home Card info sent to DOM
  return (
    <div className="exoPlanet-home-card">
      <h2 className="exoPlanet-home-header">Exo-Planets</h2>
      {exoPlanets.map((x) => (
        <div className="exoPlanet-home-content" key={x.id}>
          <Link className="exoPlanet-home-link" to={`/exoPlanets/${x.id}`}>
            <span className="exoPlanet-home-name">{x.name}</span>
            <img className="exoPlanet-home-img" src={`./Images/${x.name}.jpg`} />
            <p className="card-home-exoPlanet-starRating">
              <Rating style={{ color: "rgb(179, 9, 9)" }} value={x.rating} readOnly />{" "}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};
