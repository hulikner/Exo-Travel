// Imports
import React from "react";
import { Link } from "react-router-dom";
import { epochDateConverter } from "../util/epochDateConverter";
import "./ItineraryCard.css";

// Itinerary Card
export const ItineraryCard = ({ itinerary }) => {
  // Formats dates from epoch time to a readable date
  const formattedDeparture = itinerary?.departure && epochDateConverter(itinerary.departure, "eee. MMM do");
  const formattedReturn = itinerary?.return && epochDateConverter(itinerary.return, "eee. MMM do");

  // Card info sent to DOM
  return (
    <Link className="itinerary-card-link" to={`/itineraries/${itinerary.id}`}>
      <div className="itinerary-card-content">
        <div className="itinerary-card-img">
          <img className="itinerary-pic" src={`./Images/${itinerary.exoPlanet.name}.jpg`} />
          <p className="itinerary-pic-title">{itinerary.exoPlanet.name}</p>
        </div>
        <div className="itinerary-card-info">
          <span className="itinerary-card">
            First Name: <span className="itinerary-card-data">{itinerary.user.firstName}</span>
          </span>
          <br />
          <span className="itinerary-card">
            Last Name: <span className="itinerary-card-data">{itinerary.user.lastName}</span>
          </span>
          <br />
          <span className="itinerary-card">
            Departure Date: <span className="itinerary-card-data">{formattedDeparture}</span>
          </span>
          <br />
          <span className="itinerary-card">
            Return Date: <span className="itinerary-card-data">{formattedReturn}</span>
          </span>
          <br />
          <span className="itinerary-card">
            Travel Mode: <span className="itinerary-card-data">{itinerary.mode}</span>
          </span>
          <br />
        </div>
      </div>
    </Link>
  );
};
