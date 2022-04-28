import React, { useState, useEffect } from "react";
import { getItineraryById, deleteItinerary } from "../../modules/ItineraryManager";
import { useParams, useNavigate, Link } from "react-router-dom";
import { epochDateConverter } from "../util/epochDateConverter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { ReviewForm } from "../reviews/ReviewForm";
import { addReceipt } from "../../modules/ReceiptManager";

import "./ItineraryDetail.css";

export const ItineraryDetail = () => {
  const [itinerary, setItinerary] = useState({usersId: "", departure: "", return: "", exoPlanetsId: "", mode: ""});
  const [isLoading, setIsLoading] = useState(true);
  const { itineraryId } = useParams();
  const navigate = useNavigate();
  const today = new Date().getTime()/1000;
  const formattedDeparture = itinerary?.departure && epochDateConverter(itinerary.departure, "MM/dd/yyy");
  const formattedReturn = itinerary?.return && epochDateConverter(itinerary.return, "MM/dd/yyy");
  let selectedVal = 0;
  let finalPrice = 0;
  let tripDuration = 0;

  

  const handleClickSaveEvent = (i) => {
    i.preventDefault();
    
    

    const receipt = {
      usersId: itinerary.usersId,
      departure: itinerary.departure,
      return: itinerary.return,
      exoPlanetsId: itinerary.exoPlanetsId,
      mode: itinerary.mode,
      itinerariesId: itinerary.id,
      paid: +finalPrice,
    }
    
      setIsLoading(true);
      
      addReceipt(receipt).then(() => navigate(`/itineraries/${itineraryId}/receipts`));
    
    
  };


  const drivePlanetCost = (m) => {
    if (m === "Ion-Drive") {
      selectedVal = 0.25;
      tripDuration = itinerary.exoPlanets?.lightYears / 10;
    }
    if (m === "Warp-Drive") {
      selectedVal = 0.5;
      tripDuration = itinerary.exoPlanets?.lightYears / 50;
    }
    if (m === "Wormhole-Drive") {
      selectedVal = 1;
      tripDuration = 2;
    }
    return (selectedVal = selectedVal * itinerary.exoPlanets?.lightYears && tripDuration);
  };
  const handleDelete = () => {
    setIsLoading(true);
    deleteItinerary(itineraryId).then(() => navigate("/itineraries"));
  };

  useEffect(() => {
    getItineraryById(itineraryId).then(setItinerary);
  }, [itineraryId]);
  drivePlanetCost(itinerary.mode);
  finalPrice = selectedVal + 15;
  console.log(itinerary)
  return (
    <>
      <h2 className="itinerary-details-title">
        {itinerary.users?.firstName}, Here Is The Details On Your Trip To {itinerary.exoPlanets?.name}
      </h2>
      <div className="itinerary-detail-image">
        <div className="itinerary-detail-img">
          <img className="itinerary-img" src={`../Images/${itinerary.exoPlanets?.name}.jpg`} />
          <span className="itinerary-img-name">{itinerary.exoPlanets?.name}</span>
        </div>

        <div className="itinerary-detail-summary">
          <div className="itinerary-price-summary">
            <span className="itinerary-detail-title">Price Summary</span>
            <br />
            <span className="itinerary-detail">
              Transport to The Citadel: /> <span className="itinerary-detail-data"><FontAwesomeIcon icon={faBitcoin} 10</span>
            </span>
            <br />
            <span className="itinerary-detail">
              {itinerary.mode} to {itinerary.exoPlanets?.name}: /><span className="itinerary-detail-data"><FontAwesomeIcon icon={faBitcoin} {selectedVal} </span>
            </span>
            <br />
            <span className="itinerary-detail">
              Exo-Travel Fees:  /><span className="itinerary-detail-data"><FontAwesomeIcon icon={faBitcoin} 5</span>
            </span>
            <br />
            <span className="itinerary-detail-total">
              Total: /><span className="itinerary-detail-data"><FontAwesomeIcon icon={faBitcoin} {finalPrice}</span>
            </span>
            <br />

            <div className="itinerary-price-summary-buttons">
              <button type="button" className="itinerary-price-summary-button" onClick={() => navigate(`/itineraries/${itinerary.id}/edit`)}>
                Edit
              </button>
              <button type="button" className="itinerary-price-summary-button" onClick={() => handleDelete(itinerary.id)}>
                Delete
              </button>
              <button type="button" className="itinerary-price-summary-button" onClick={handleClickSaveEvent}>
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="itinerary-departure-return">
        <div className="itinerary-departureToReturn">
          <span className="itinerary-detail">Departure: {formattedDeparture} @ 8:00 AM to The Citadel</span>
          <br />
          <span className="itinerary-detail">Gate Number: 2C </span>
          <br />
          <span className="itinerary-detail">Shuttle Number: {itinerary.departure}</span>
          <br />
          <span className="itinerary-detail">Flight Duration: 2 Hours</span>
          <br />
        </div>

        <div className="itinerary-departureToReturn">
          <span className="itinerary-detail">
            Departure: {formattedDeparture} @ 12:00 PM to {itinerary.exoPlanetsId?.name}
          </span>
          <br />
          <span className="itinerary-detail">Gate Number: X-4 </span>
          <br />
          <span className="itinerary-detail">Shuttle Number: R2-D2</span>
          <br />
          <span className="itinerary-detail">Flight Duration: {tripDuration} Hours</span>
          <br />
        </div>

        <div className="itinerary-departureToReturn">
          <span className="itinerary-detail">Return: {formattedReturn} @ 8:00 AM to The Citadel</span>
          <br />
          <span className="itinerary-detail">Gate Number: X-4 </span>
          <br />
          <span className="itinerary-detail">Shuttle Number: R2-D2</span>
          <br />
          <span className="itinerary-detail">Flight Duration: {tripDuration} Hours</span>
          <br />
        </div>

        <div className="itinerary-departureToReturn">
          <span className="itinerary-detail">Return: {formattedDeparture} @ 8:00 AM to Origin</span>
          <br />
          <span className="itinerary-detail">Gate Number: 2C </span>
          <br />
          <span className="itinerary-detail">Shuttle Number: {itinerary.return}</span>
          <br />
          <span className="itinerary-detail">Flight Duration: 2 Hours</span>
          <br />
        </div>
      </div>

      <div className="itinerary-page-buttons">


      {itinerary.return < today ? (
            <Link to={`/exoPlanets/${itinerary.exoPlanetsId}/reviews/create`} >
             <button type="button" className="itinerary-page-button" onClick= {() => navigate(`/exoPlanets/${itinerary.exoPlanetsId}/reviews/create`)}>
          Review
        </button>
            </Link>
          ) : (
           <span></span>
          )}
       
        <button type="button" className="itinerary-page-button" onClick={() => navigate(`/itineraries`)}>
          Back
        </button>
      </div><div className="itinerary-page-bottom"></div>
    </>
  );
};

