// Imports
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateItinerary, getItineraryById } from "../../modules/ItineraryManager";
import { epochDateConverter } from "../util/epochDateConverter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
import "./ItineraryEditForm.css";

export const ItineraryEditForm = () => {
  // React-Router-DOM uses
  const navigate = useNavigate();
  const { itineraryId } = useParams();

  // State setState
  const [isLoading, setIsLoading] = useState(false);
  const [itinerary, setItinerary] = useState({
    departure: "",
    return: "",
    mode: "",
  });

  // Formats epoch date to readable date
  const formattedDeparture = itinerary?.departure ? epochDateConverter(itinerary?.departure, "yyy-MM-dd") : "";
  const formattedReturn = itinerary?.return ? epochDateConverter(itinerary?.return, "yyy-MM-dd") : "";

  // Handles change of fields in the edit form
  const handleFieldChange = (i) => {
    const isDate = i.target.id === "departure" || "return";
    let epochDate = "";

    if (isDate) {
      epochDate = new Date(i.target.value).getTime() / 1000;
    }

    const stateToChange = { ...itinerary };
    stateToChange[i.target.id] = isDate ? epochDate : i.target.value;
    setItinerary(stateToChange);
  };

  // Updates itinerary with new user inputs
  const updateExistingItinerary = (t) => {
    setIsLoading(true);

    const editedItinerary = {
      id: +itineraryId,
      departure: itinerary.departure,
      return: itinerary.return,
      mode: itinerary.mode,
    };

    updateItinerary(editedItinerary).then(() => navigate("/itineraries"));
  };

  // Handles the change in mode when user clicks one of the buttons
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

  // Gets the itinerary clicked on and sets it
  useEffect(() => {
    getItineraryById(itineraryId).then((itinerary) => {
      setItinerary(itinerary);
      setIsLoading(false);
    });
  }, []);

  // Details and buttons sent to DOM for the user to edit
  return (
    <>
      <div className="itinerary-edit-form">
        <h2 className="edit-itinerary-title">Edit Itinerary</h2>
        <div className="editDetails">
          <div className="edit-itinerary-pic">
            <img className="edit-itinerary-img" src={`../../Images/${itinerary.exoPlanet?.name}.jpg`} />
            <span className="edit-itinerary-img-name">{itinerary.exoPlanet?.name}</span>
          </div>
          <div className="edit-detailsContainer">
            <div className="edit-exoPlanet-fields">
              <label htmlFor="departure">Departure Date: </label>
              <input type="date" id="departure" onChange={handleFieldChange} required className="edit-control departure " placeholder="exoPlanet departure" value={formattedDeparture} />
            </div>
            <div className="edit-exoPlanet-fields">
              <label htmlFor="return">Return Date: </label>
              <input type="date" id="return" onChange={handleFieldChange} required className="edit-control return " placeholder="exoPlanet return" value={formattedReturn} />
            </div>
          </div>
          <div className="edit-mode-buttons">
            {itinerary.mode === "Ion-Drive" ? (
              <button onClick={() => handleModeChange1(itinerary.mode)} className="edit-ion-selected">
                {" "}
                Ion-Drive
                <FontAwesomeIcon icon={faSpaceShuttle} />
              </button>
            ) : (
              <button onClick={() => handleModeChange1(itinerary.mode)} className="edit-ion-not-selected">
                {" "}
                Ion-Drive
                <FontAwesomeIcon icon={faSpaceShuttle} />
              </button>
            )}
            {itinerary.mode === "Warp-Drive" ? (
              <button onClick={() => handleModeChange2(itinerary.mode)} className="edit-warp-selected">
                {" "}
                Warp-Drive
                <FontAwesomeIcon icon={faSpaceShuttle} />
              </button>
            ) : (
              <button onClick={() => handleModeChange2(itinerary.mode)} className="edit-warp-not-selected">
                {" "}
                Warp-Drive
                <FontAwesomeIcon icon={faSpaceShuttle} />
              </button>
            )}
            {itinerary.mode === "Wormhole-Drive" ? (
              <button onClick={() => handleModeChange3(itinerary.mode)} className="edit-wormhole-selected">
                {" "}
                Wormhole-Drive
                <FontAwesomeIcon icon={faSpaceShuttle} />
              </button>
            ) : (
              <button onClick={() => handleModeChange3(itinerary.mode)} className="edit-wormhole-not-selected">
                {" "}
                Wormhole-Drive
                <FontAwesomeIcon icon={faSpaceShuttle} />
              </button>
            )}
          </div>
          <div className="edit-save-cancel">
            <button type="button" className="itinerary-edit-save-button" disabled={isLoading} onClick={updateExistingItinerary}>
              Save
            </button>
            <button type="button" className="itinerary-edit-cancel-button" disabled={isLoading} onClick={() => navigate("/itineraries")}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
