import React, {useState} from 'react';
import "./ItineraryCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons'
import { epochDateConverter } from '../util/epochDateConverter';
import { format } from 'date-fns';
import { updateItinerary } from '../../modules/ItineraryManager';


export const ItineraryCard = ({ itinerary, handleDeleteItinerary }) => {

  const [ itineraries, setItinerary ] = useState(false)

  const formattedDeparture = itinerary?.departure && epochDateConverter(itinerary.departure, 'eee. MMM do')
  const formattedReturn = itinerary?.return && epochDateConverter(itinerary.return, 'eee. MMM do')


  return (
        <div className='itinerary-card-content'>

      <Link className="itinerary-card-link" to={`/itineraries/${itinerary.id}` }>
       
        <span className="itinerary-card">{itinerary.users.firstName}</span><br />
        <span className="itinerary-card">{itinerary.users.lastName}</span><br />
        <span className="itinerary-card">{itinerary.exoPlanets.name}</span><br />
        <span className="itinerary-card">{formattedDeparture}</span><br />
        <span className='itinerary-card'>{formattedReturn}</span><br />
        <span className='itinerary-card'>{itinerary.mode}</span><br />
    
      </Link>
        </div>
   
  );
}