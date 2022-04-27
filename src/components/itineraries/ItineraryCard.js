import React, {useState} from 'react';
import "./ItineraryCard.css";
import { Link,useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons'
import { epochDateConverter } from '../util/epochDateConverter';
import { format } from 'date-fns';
import { updateItinerary } from '../../modules/ItineraryManager';


export const ItineraryCard = ({ itinerary }) => {

  const [ itineraries, setItinerary ] = useState(false)
  const navigate = useNavigate();
  const today = new Date().getTime()/1000;
  const formattedDeparture = itinerary?.departure && epochDateConverter(itinerary.departure, 'eee. MMM do')
  const formattedReturn = itinerary?.return && epochDateConverter(itinerary.return, 'eee. MMM do')


  return (
    
    <Link className="itinerary-card-link" to={`/itineraries/${itinerary.id}` }>
        <div className='itinerary-card-content'>
        <div className="itinerary-card-img">
        <img className="itinerary-pic" src={`./Images/${itinerary.exoPlanets.name}.jpg`} />
        <p className="itinerary-pic-title">{itinerary.exoPlanets.name}</p>
        </div>
        <div className= "itinerary-card-info">
        <span className="itinerary-card">First Name: {itinerary.users.firstName}</span><br />
        <span className="itinerary-card">Last Name: {itinerary.users.lastName}</span><br />
        <span className="itinerary-card">Departure Date: {formattedDeparture}</span><br />
        <span className='itinerary-card'>Return Date: {formattedReturn}</span><br />
        <span className='itinerary-card'>Travel Mode: {itinerary.mode}</span><br />
        </div>
       </div>
          </Link>
   
  );
}