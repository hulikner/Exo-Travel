//Imports
import React, { useEffect, useState } from "react";
import { ItineraryCard } from "./ItineraryCard";
import { deleteItinerary, getItinerariesByUserId } from "../../modules/ItineraryManager";
import "./ItineraryList.css";

// Lists itineraries by user id
export const ItineraryList = () => {
  // State setState
  const [itineraries, setItineraries] = useState([]);

  // Gets current user id
  const currentUser = JSON.parse(sessionStorage.getItem("exoTravel_user"));

  // Handles deleting itinerary
  const handleDeleteItinerary = (id) => {
    deleteItinerary(id).then(() => getItinerariesByUserId(currentUser).then(setItineraries));
  };

  // Gets all the itineraries the user has
  useEffect(() => {
    getItinerariesByUserId(currentUser).then(setItineraries);
  }, []);

  // Displays all the itineraries the user has
  return (
    <div className="itinerary-container">
      <div className="itinerary-list">
        <h2 className="itinerary-list-header">Itineraries</h2>
        <div className="itinerary-list-content">
          {itineraries.map((i) => (
            <ItineraryCard key={i.id} itinerary={i} handleDeleteItinerary={handleDeleteItinerary} />
          ))}
        </div>
      </div>
    </div>
  );
};
