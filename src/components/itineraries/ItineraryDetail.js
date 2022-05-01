// Imports
import React, { useState, useEffect } from "react";
import { getItineraryById, deleteItinerary, updateItinerary } from "../../modules/ItineraryManager";
import { useParams, useNavigate, Link } from "react-router-dom";
import { epochDateConverter } from "../util/epochDateConverter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { addReceipt } from "../../modules/ReceiptManager";
import "./ItineraryDetail.css";

export const ItineraryDetail = () => {
  // Variables to be used
  let finalPrice = 0;
  let selectedVal = 0;
  let tripDuration = 0;

  // React-Router-DOM uses
  const navigate = useNavigate();
  const { itineraryId } = useParams();

  // Gets current day
  const today = new Date().getTime() / 1000;

  
  // States and setStates
  const [isLoading, setIsLoading] = useState(true);
  const [itinerary, setItinerary] = useState({
    userId: "",
    departure: "",
    return: "",
    exoPlanetId: "",
    mode: "",
  });
  
  // Formats epoch dates to a readable date
  const formattedDeparture = itinerary?.departure && epochDateConverter(itinerary.departure, "MM/dd/yyy");
  const formattedReturn = itinerary?.return && epochDateConverter(itinerary.return, "MM/dd/yyy");
  
  // When Pay Now is clicked it adds a receipt and updates the itinerary to paid then goes to receipts page
  const handleClickSaveEvent = async (i) => {
    i.preventDefault();
    const receipt = {
      userId: itinerary.userId,
      departure: itinerary.departure,
      return: itinerary.return,
      exoPlanetId: itinerary.exoPlanetId,
      mode: itinerary.mode,
      paid: +finalPrice,
      itineraryId: itinerary.id,
    };

    const newItinerary = {
      id: itinerary.id,
      userId: itinerary.userId,
      departure: itinerary.departure,
      return: itinerary.return,
      exoPlanetId: itinerary.exoPlanetId,
      mode: itinerary.mode,
      paid: true,
    };

    setIsLoading(true);

    // Awaits for addReceipt to finish before updating itinerary
    await addReceipt(receipt);

    // Awaits for updateItinerary before going to receipts page
    await updateItinerary({ ...newItinerary });

    // Navigates to receipts page
    navigate(`/itineraries/${itineraryId}/receipts`);
  };

  // Calculates cost of travel from The Citidel to Exo-Planet chosen based on mode of travel the user selected
  const drivePlanetCost = (m) => {
    if (m === "Ion-Drive") {
      selectedVal = 0.25;
    }
    if (m === "Warp-Drive") {
      selectedVal = 0.5;
    }
    if (m === "Wormhole-Drive") {
      selectedVal = 2;
    }
    return (selectedVal = selectedVal * itinerary.exoPlanet?.lightYears);
  };

  // Calculates duration of travel from The Citidel to Exo-Planet chosen based on mode of travel the user selected
  const drivePlanetDuration = (m) => {
    if (m === "Ion-Drive") {
      tripDuration = itinerary.exoPlanet?.lightYears / 10;
    }
    if (m === "Warp-Drive") {
      tripDuration = itinerary.exoPlanet?.lightYears / 50;
    }
    if (m === "Wormhole-Drive") {
      tripDuration = 2;
    }
    return tripDuration;
  };

  // Deletes itinerary when button is clicked
  const handleDelete = () => {
    setIsLoading(true);
    deleteItinerary(itineraryId).then(() => navigate("/itineraries"));
  };

  // Gets the itinerary clicked on and sets it
  useEffect(() => {
    getItineraryById(itineraryId).then(setItinerary);
  }, [itineraryId]);

  // Calls the functions to calculate cost and time based on users selections
  drivePlanetCost(itinerary.mode);
  drivePlanetDuration(itinerary.mode);
  finalPrice = selectedVal + 15;

  // Itinerary details and buttons to DOM
  return (
    <>
      <h2 className="itinerary-details-title">
        {itinerary.user?.firstName}, Here Is The Details On Your Trip To {itinerary.exoPlanet?.name}
      </h2>
      <div className="itinerary-detail-image">
        <div className="itinerary-detail-img">
          <img className="itinerary-img" src={`../Images/${itinerary.exoPlanet?.name}.jpg`} />
          <span className="itinerary-img-name">{itinerary.exoPlanet?.name}</span>
        </div>
        <div className="itinerary-detail-summary">
          <div className="itinerary-price-summary">
            <span className="itinerary-detail-title">Price Summary</span>
            <br />
            <span className="itinerary-detail">
              Transport to The Citadel:{" "}
              <span className="itinerary-detail-data">
                <FontAwesomeIcon icon={faBitcoin} />
                10
              </span>
            </span>
            <br />
            <span className="itinerary-detail">
              {itinerary.mode} to {itinerary.exoPlanet?.name}:{" "}
              <span className="itinerary-detail-data">
                <FontAwesomeIcon icon={faBitcoin} /> {selectedVal}{" "}
              </span>
            </span>
            <br />
            <span className="itinerary-detail">
              Exo-Travel Fees:{" "}
              <span className="itinerary-detail-data">
                <FontAwesomeIcon icon={faBitcoin} /> 5
              </span>
            </span>
            <br />
            <span className="itinerary-detail-total">
              Total:{" "}
              <span className="itinerary-detail-data">
                <FontAwesomeIcon icon={faBitcoin} /> {finalPrice}
              </span>
            </span>
            <br />
            <div className="itinerary-price-summary-buttons">
              <button type="button" className="itinerary-price-summary-button" onClick={() => navigate(`/itineraries/${itinerary.id}/edit`)}>
                Edit
              </button>
              <button type="button" className="itinerary-price-summary-button" onClick={() => handleDelete(itinerary.id)}>
                Delete
              </button>
              {!itinerary.paid && (
                <button type="button" className="itinerary-price-summary-button" onClick={handleClickSaveEvent}>
                  Pay Now
                </button>
              )}
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
            Departure: {formattedDeparture} @ 12:00 PM to {itinerary.exoPlanetId?.name}
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
          <Link to={`/exoPlanets/${itinerary.exoPlanetId}/reviews/create`}>
            <button type="button" className="itinerary-page-button" onClick={() => navigate(`/exoPlanets/${itinerary.exoPlanetId}/reviews/create`)}>
              Review
            </button>
          </Link>
        ) : (
          <span></span>
        )}
        <button type="button" className="itinerary-page-button" onClick={() => navigate(`/itineraries`)}>
          Back
        </button>
      </div>
      <div className="itinerary-page-bottom"></div>
    </>
  );
};
