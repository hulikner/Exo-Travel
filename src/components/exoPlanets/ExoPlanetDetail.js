import React, { useState, useEffect } from "react";
import { getExoPlanetById } from "../../modules/ExoPlanetManager";
import { useParams, useNavigate } from "react-router-dom";
import { epochDateConverter } from "../util/epochDateConverter";
import { addItinerary } from "../../modules/ItineraryManager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
import Rating from '@mui/material/Rating';

import "./ExoPlanetDetail.css";

export const ExoPlanetDetail = () => {
  const [exoPlanet, setExoPlanet] = useState({ name: "", mass: "", radius: "", eqTemp: "", orbit: "", lightYears: "", rating:"" });
  const [isLoading, setIsLoading] = useState(true);
  const { exoPlanetId } = useParams();
  const navigate = useNavigate();
  const currentUser = JSON.parse(sessionStorage.getItem("exoTravel_user"));
  const [itinerary, setItinerary] = useState({
    id: "",
    usersId: currentUser,
    departure: "",
    return: "",
    exoPlanetsId: Number(exoPlanetId),
    receiptsId:"",
    reviewsId:"",
  });

  const formattedDeparture = itinerary?.departure ? epochDateConverter(itinerary.departure, "yyyy-MM-dd") : "";
  const formattedReturn = itinerary?.return ? epochDateConverter(itinerary.return, "yyyy-MM-dd") : "";

  const handleControlledDepartureChange = (i) => {
    const isDeparture = i.target.id === "departure";
    let epochDeparture = "";
    if (i.target.id === "departure") {
      epochDeparture = new Date(i.target.value).getTime() / 1000;
    }

    const newItinerary = { ...itinerary };
    let selectedVal = isDeparture ? epochDeparture : i.target.value;

    newItinerary[i.target.id] = selectedVal;
    setItinerary(newItinerary);
  };

  const handleControlledReturnChange = (i) => {
    const isReturn = i.target.id === "return";
    let epochReturn = "";
    if (i.target.id === "return") {
      epochReturn = new Date(i.target.value).getTime() / 1000;
    }

    const newItinerary = { ...itinerary };
    let selectedVal = isReturn ? epochReturn : i.target.value;

    newItinerary[i.target.id] = selectedVal;
    setItinerary(newItinerary);
  };

  const handleClickSaveEvent = (i) => {
    i.preventDefault();

    if (itinerary.departure !== "" && itinerary.return !== "" && itinerary.mode !== "") {
      setIsLoading(true);
      addItinerary(itinerary).then(() => navigate("/itineraries"));
    } else {
      window.alert("Complete Each Field");
    }
  };

  const handleModeChange1 = (i) => {
    const newItinerary = { ...itinerary };
    let selectedVal = i ? 0 : "Ion-Drive";
    newItinerary.mode = selectedVal;
    setItinerary(newItinerary);
  };
  const handleModeChange2 = (i) => {
    const newItinerary = { ...itinerary };
    let selectedVal = i ? 0 : "Warp-Drive";
    newItinerary.mode = selectedVal;
    setItinerary(newItinerary);
  };
  const handleModeChange3 = (i) => {
    const newItinerary = { ...itinerary };
    let selectedVal = i ? 0 : "Wormhole-Drive";
    newItinerary.mode = selectedVal;
    setItinerary(newItinerary);
  };

  useEffect(() => {
    getExoPlanetById(exoPlanetId).then((exoPlanet) => {
      setExoPlanet(exoPlanet);
    });
  }, [exoPlanetId]);
  return (
    <div className="exoPlanetContainer">
      <h2 className="exoPlanet-title">{exoPlanet.name}</h2>
        <div className="exoPlanet-img">
          <img className="exoPlanet-pic" src={`../Images/${exoPlanet.name}.jpg`} />
          </div>
      <section className="exoPlanet">
          <div className="exoPlanet-info">
            <div className="exoPlanet__mass">
              <span className="detailsLabel">Ratio to Earth's Mass  </span><span className="exoPlanet-mass-label">
              1 : {exoPlanet.mass}</span>
            </div>
            <div className="exoPlanet__radius">
              <span className="detailsLabel">Ratio to Earth's Radius  </span> <span className="exoPlanet-radius-label">1 : {exoPlanet.radius}</span>
            </div>
            <div className="exoPlanet__eqTemp">
              <span className="detailsLabel">Ratio to Earth's Temperature  </span><span className="exoPlanet-eqTemp-label">1 : {exoPlanet.eqTemp}</span>
            </div>
            <div className="exoPlanet__orbit">
              <span className="detailsLabel">Days to Orbit It's Star </span> <span className="exoPlanet-orbit-label">{exoPlanet.orbit} days</span>
            </div>
            <div className="exoPlanet__lightYears">
              <span className="detailsLabel">Light-Years Away </span><span className="exoPlanet-lightYears-label">{exoPlanet.lightYears} Light-Years</span> 
            </div>
            
         
        </div>
        <div className="card-exoPlanet-starRating"><Rating style={{ color:"rgb(179, 9, 9)" }} value={exoPlanet.rating} readOnly/> </div>
      </section>
            <div className="exoPlanet-detail">
              <span className="detailsLabel"> </span> {exoPlanet.detail}
            </div>


        <div className="detailsContainer">
          <div className="exoPlanet__fields">
           
          
              <label htmlFor="departure">Departure Date: </label>
              <input type="date" id="departure" onChange={handleControlledDepartureChange} required className="form-control departure " placeholder="exoPlanet departure" value={formattedDeparture} />
            </div>
          
          <div className="exoPlanet__fields">
            
              <label htmlFor="return">Return Date: </label>
              <input type="date" id="return" onChange={handleControlledReturnChange} required className="form-control return " placeholder="exoPlanet return" value={formattedReturn} />
              
            
          </div>
         </div>
         
      <div className="mode-buttons">
        
          
        {itinerary.mode === "Ion-Drive" ? (
          <button onClick={() => handleModeChange1(itinerary.mode)} className="ion-select"> Ion-Drive 
            <FontAwesomeIcon icon={faSpaceShuttle} />
          </button>
        ) : (
          <button onClick={() => handleModeChange1(itinerary.mode)} className="ion-not-select"> Ion-Drive 
            <FontAwesomeIcon icon={faSpaceShuttle} />
          </button>
        )}
       
        {itinerary.mode === "Warp-Drive" ? (
          <button onClick={() => handleModeChange2(itinerary.mode)} className="warp-btn"> Warp-Drive 
            <FontAwesomeIcon icon={faSpaceShuttle} />
          </button>
        ) : (
          <button onClick={() => handleModeChange2(itinerary.mode)} className="warp-not-btn"> Warp-Drive 
            <FontAwesomeIcon icon={faSpaceShuttle} />
          </button>
        )}
        
        {itinerary.mode === "Wormhole-Drive" ? (
          <button onClick={() => handleModeChange3(itinerary.mode)} className="wormhole-selected"> Wormhole-Drive 
            <FontAwesomeIcon icon={faSpaceShuttle} />
          </button>
        ) : (
          <button onClick={() => handleModeChange3(itinerary.mode)} className="wormhole-not-selected"> Wormhole-Drive 
            <FontAwesomeIcon icon={faSpaceShuttle} />
          </button>
        )}
       
      </div>
      <div className="exoPlanet-detail-buttons">
        <button
          type="submit"
          className="submit-itinerary-button"
          // disabled={isLoading}
          onClick={handleClickSaveEvent}
        >
          Save
        </button>

        <button type="button" className="back-button" onClick={() => navigate(`/exoPlanets`)}>
          Back
        </button>
        <button type="button" className="review-button" onClick={() => navigate(`/exoPlanets/${exoPlanetId}/reviews`)}>
          Reviews
        </button>
      </div>
    </div>
  );
};
