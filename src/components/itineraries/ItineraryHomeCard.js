import React, { useEffect, useState } from 'react';
import "../home/Home.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons'
import { getAllItineraries } from '../../modules/ItineraryManager';
import { epochDateConverter } from '../util/epochDateConverter';


export const ItineraryHomeCard = () => {
//   let today= new Date().getTime()/1000;
  
  
  const[itineraries, setItineraries] = useState([])
  const {itineraryId} = useParams();
  const formattedDeparture = itineraries.departure && epochDateConverter(itineraries.departure, 'eee. MMM do')
  
  
  useEffect(() => {
    getAllItineraries().then(setItineraries)
  },[])
  
  

  return (

    <>
      <div className="itinerary-home">
      <h2 className="itinerary-home-header">Itineraries</h2>
      {itineraries.map(x =>( 

        <div className='itinerary-home-content' key={x.id}>

      <Link className="itinerary-home-link" to={`/itineraries/${x.id}` }>
       
            <div className="itinerary-home-img-container">
                <img className="itinerary-home-img" src={`../Images/${x.exoPlanets?.name}.jpg`} />
                <span className="itinerary-home-img-name">{x.exoPlanets?.name}</span>
            </div>
            <div className= 'itinerary-home-departure'>
            Departure: {formattedDeparture}
            </div>
      </Link>
      </div>
      ))}
      </div>
  </>
  );
}