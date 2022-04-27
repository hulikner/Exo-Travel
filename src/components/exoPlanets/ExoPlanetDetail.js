import React, { useState, useEffect } from "react";
import { getExoPlanetById } from "../../modules/ExoPlanetManager";
import { useParams, useNavigate } from "react-router-dom";
import { epochDateConverter } from "../util/epochDateConverter";
import { addItinerary } from "../../modules/ItineraryManager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
import "./ExoPlanetDetail.css";

export const ExoPlanetDetail = () => {
  const [exoPlanet, setExoPlanet] = useState({ name: "", mass: "", radius: "", eqTemp: "", orbit: "", lightYears: "" });
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
      <h2>{exoPlanet.name}</h2>
      <section className="exoPlanet">
        <div className="exoPlanet-img">
          <img className="exoPlanet-pic" src={`../Images/${exoPlanet.name}.jpg`} />
          <div className="exoPlanet-info">
            <div className="exoPlanet__mass">
              <span className="detailsLabel">Ratio to Earth's Mass- 1 : </span>
              {exoPlanet.mass}
            </div>
            <div className="exoPlanet__radius">
              <span className="detailsLabel">Ratio to Earth's Radius- 1 : </span> {exoPlanet.radius}
            </div>
            <div className="exoPlanet__eqTemp">
              <span className="detailsLabel">Ratio to Earth's Temperature 1 : </span> {exoPlanet.eqTemp}
            </div>
            <div className="exoPlanet__orbit">
              <span className="detailsLabel">Days to Orbit It's Star: </span> {exoPlanet.orbit} days
            </div>
            <div className="exoPlanet__lightYears">
              <span className="detailsLabel">Light-Years Away: </span> {exoPlanet.lightYears} Light-Years
            </div><br />
            
          </div>
            <div className="exoPlanet__detail">
              <span className="detailsLabel"> </span> {exoPlanet.detail}
            </div>
        </div>
        
      </section>


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
        
          
        {itinerary.mode ? (
          <button onClick={() => handleModeChange1(itinerary.mode)} className="ion-select"> Ion-Drive 
            <FontAwesomeIcon icon={faSpaceShuttle} />
          </button>
        ) : (
          <button onClick={() => handleModeChange1(itinerary.mode)} className="ion-not-select"> Ion-Drive 
            <FontAwesomeIcon icon={faSpaceShuttle} />
          </button>
        )}
       
        {itinerary.mode ? (
          <button onClick={() => handleModeChange2(itinerary.mode)} className="warp-btn"> Warp-Drive 
            <FontAwesomeIcon icon={faSpaceShuttle} />
          </button>
        ) : (
          <button onClick={() => handleModeChange2(itinerary.mode)} className="warp-not-btn"> Warp-Drive 
            <FontAwesomeIcon icon={faSpaceShuttle} />
          </button>
        )}
        
        {itinerary.mode ? (
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
