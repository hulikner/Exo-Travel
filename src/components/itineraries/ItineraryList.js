import React, { useEffect, useState } from "react";
import "./ItineraryList.css"
import { getAllItineraries, deleteItinerary } from "../../modules/ItineraryManager";
import { useNavigate } from "react-router-dom";
import { ItineraryCard } from "./ItineraryCard";

// GROUP: display a list of all the Itinerarys from the database

export const ItineraryList = () => {
    const [itineraries, setItineraries] = useState([])
    
    const navigate = useNavigate();

    const handleDeleteItinerary = id => {
        deleteItinerary(id)
        .then(() => getAllItineraries().then(setItineraries));
    };

    useEffect(() => {
        getAllItineraries().then(setItineraries)
    },[])

    return(
        <div className="itinerary-container">
            <div className ="itinerary-list"  >
                <h2 className="itinerary-list-header">Itineraries</h2>
                <div className="itinerary-list-content">
                    {itineraries.map(i => (
                        <ItineraryCard
                        key={i.id}
                        itinerary={i}
                        handleDeleteItinerary={handleDeleteItinerary} />
                    ))}
                </div>
            </div>
        </div>
    )
}