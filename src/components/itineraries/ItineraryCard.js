import React, {useState} from 'react';
import "./ItineraryCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons'
import { epochDateConverter } from '../util/epochDateConverter';
import { format } from 'date-fns';
import { updateItinerary } from '../../modules/ItineraryManager';


export const ItineraryCard = ({ itinerary }) => {

  const [ itineraries, setItinerary ] = useState(false)

  const formattedDeparture = itinerary?.departure && epochDateConverter(itinerary.departure, 'eee. MMM do')
  const formattedReturn = itinerary?.return && epochDateConverter(itinerary.return, 'eee. MMM do')


  return (
        <div className='itinerary-card-content'>

      <Link className="itinerary-card-link" to={`/itineraries/${itinerary.id}` }>
        <div className="itinerary-card-img">
        <img className="itinerary-img" src={`./Images/${itinerary.exoPlanets.name}.jpg`} />
        <span className="itinerary-card">{itinerary.exoPlanets.name}</span>
        </div>
        <div>
        <span className="itinerary-card">First Name: {itinerary.users.firstName}</span><br />
        <span className="itinerary-card">Last Name: {itinerary.users.lastName}</span><br />
        <span className="itinerary-card">Departure Date: {formattedDeparture}</span><br />
        <span className='itinerary-card'>Return Date: {formattedReturn}</span><br />
        <span className='itinerary-card'>Travel Mode: {itinerary.mode}</span><br />
        </div>
      </Link>
        </div>
   
  );
}