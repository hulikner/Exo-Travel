// Imports
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { epochDateConverter } from "../util/epochDateConverter";
import { getItinerariesByUserId } from "../../modules/ItineraryManager";
import "../home/Home.css";

export const ItineraryHomeCard = () => {
  // React-Router-Dom use
  const { itineraryId } = useParams();

  // State setState
  const [itineraries, setItineraries] = useState([]);

  // Gets current users id
  const currentUser = JSON.parse(sessionStorage.getItem("exoTravel_user"));

  // Gets all the itineraries by user for Home page
  useEffect(() => {
    getItinerariesByUserId(currentUser).then(setItineraries);
  }, []);

  // Sends a list of users itineraries to Home Page
  return (
    <div className="itinerary-home-container">
      <h2 className="itinerary-home-header">Itineraries</h2>
      <div className="itinerary-home-card">
        {itineraries.map((x) => (
          <div className="itinerary-home-content" key={x.id}>
            <Link className="itinerary-home-link" to={`/itineraries/${x.id}`}>
              <div className="itinerary-home-img-container">
                <img className="itinerary-home-img" src={`../Images/${x.exoPlanet?.name}.jpg`} />
                <span className="itinerary-home-img-name">{x.exoPlanet?.name}</span>
              </div>
              <div className="itinerary-home-departure">Departure: {epochDateConverter(x.departure, "eee. MMM do")}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
