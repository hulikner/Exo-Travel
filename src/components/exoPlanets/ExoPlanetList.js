// Imports
import React, { useEffect, useState } from "react";
import { ExoPlanetCard } from "./ExoPlanetCard";
import { getAllExoPlanets } from "../../modules/ExoPlanetManager";
import "./ExoPlanetList.css";

export const ExoPlanetList = () => {
  // State setState
  const [exoPlanets, setExoPlanets] = useState([]);
  const [ascending, setAscending] = useState(true);
  const [ascend, setAscend] = useState(true);

  // Gets Exo-Planet list and sets the Exo-Planet list by light-years
  const getExoPlanets = async () => {
    const ExoPlanetsFromDatabase = await getAllExoPlanets();
    const ascendingPlanets = ExoPlanetsFromDatabase.sort((a, b) => a.lightYears - b.lightYears);
    setExoPlanets(ascendingPlanets);
  };

  useEffect(() => {
    getExoPlanets();
  }, []);

  // Sets list between ascending and descending lightyears on button click
  useEffect(() => {
    if (!ascending) {
      setExoPlanets(exoPlanets.sort((a, b) => b.lightYears - a.lightYears));
    } else {
      setExoPlanets(exoPlanets.sort((a, b) => a.lightYears - b.lightYears));
    }
  }, [ascending]);

  // Sets list between ascending and descending star rating on button click
  useEffect(() => {
    if (!ascend) {
      setExoPlanets(exoPlanets.sort((a, b) => b.rating - a.rating));
    } else {
      setExoPlanets(exoPlanets.sort((a, b) => a.rating - b.rating));
    }
  }, [ascend]);

  // Takes all of the ExoPlanets returned from getExoPlanets and maps them to individual ExoPlanetCards
  return (
    <>
      <div className="exoPlanet-list-buttons">
        <button type="button" className="asc-button" onClick={() => setAscending(!ascending)}>
          Sort by LightYears
        </button>
        <button type="button" className="asc-button" onClick={() => setAscend(!ascend)}>
          Sort by Rating
        </button>
      </div>
      <div className="exoPlanets-container">
        {exoPlanets.map((exoPlanet) => (
          <ExoPlanetCard exoPlanet={exoPlanet} key={`${exoPlanet.id}-${ascending}`} />
        ))}
      </div>
    </>
  );
};
