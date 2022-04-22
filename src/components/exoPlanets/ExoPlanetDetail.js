import React, { useState, useEffect } from "react";
import { getExoPlanetById } from "../../modules/ExoPlanetManager";
import { useParams, useNavigate } from "react-router-dom"
import { epochDateConverter } from "../util/epochDateConverter";
import "./ExoPlanetDetail.css";

export const ExoPlanetDetail = () => {
  const [exoPlanet, setExoPlanet] = useState({name: '', mass:'', radius:'', eqTemp: '', orbit:'', lightYears:''});
  const [isLoading, setIsLoading] = useState(true);

  const {exoPlanetId} = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    getExoPlanetById(exoPlanetId)
      .then(exoPlanet=>{
        setExoPlanet(exoPlanet)
      })
     
  }, [exoPlanetId]);
  return (
    <div className="exoPlanetContainer">
    <section className="exoPlanet">
      <h2>{exoPlanet.name}</h2>
      <div className="exoPlanet__mass"><span className="detailsLabel">Ratio to Earth's Mass: </span>{exoPlanet.mass}</div>
      <div className="exoPlanet__radius"><span className="detailsLabel">Ratio to Earth's Radius:</span> {exoPlanet.radius}</div>
      <div className="exoPlanet__eqTemp"><span className="detailsLabel">Ratio to Earth's Temperature 1 : </span> {exoPlanet.eqTemp}</div>
      <div className="exoPlanet__orbit"><span className="detailsLabel">Days to Orbit It's Star: </span> {exoPlanet.orbit}</div>
      <div className="exoPlanet__lightYears"><span className="detailsLabel">Light-Years Away: </span> {exoPlanet.lightYears}</div><br />
      <div className="detailsContainer">
      {/* <button type="button" className="ad__button" onClick={()=>navigate(`/exoPlanets/${exoPlanet.id}/edit`)}>
      Edit
      </button> */}
      </div>
    </section>
    </div>
  );
};