import React, { useState, useEffect } from "react";
import { getItineraryById } from "../../modules/ItineraryManager";
import { useParams, useNavigate } from "react-router-dom"
import { epochDateConverter } from "../util/epochDateConverter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitcoinSign} from '@fortawesome/free-solid-svg-icons';
import "./ItineraryDetail.css";

export const ItineraryDetail = () => {
  const [itinerary, setItinerary] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const {itineraryId} = useParams();
  const navigate = useNavigate();
  const formattedDeparture = itinerary?.departure && epochDateConverter(itinerary.departure, 'eee. MMM do')
  const formattedReturn = itinerary?.return && epochDateConverter(itinerary.return, 'eee. MMM do')
  let selectedVal=0
  let finalPrice=0
  const drivePlanetCost = (m) => {
      if(m==='Ion-Drive'){
        selectedVal=.25;
      }
      if(m==='Warp-Drive'){
        selectedVal=.5;
      }
      if(m==='Wormhole-Drive'){
        selectedVal=1;
      }
      return selectedVal=selectedVal*itinerary.exoPlanets?.lightYears
  }
  useEffect(() => {
      getItineraryById(itineraryId)
      .then(itinerary=>{
          setItinerary(itinerary)
          setIsLoading(false)
        })
        
    }, [itineraryId]);
    console.log(itinerary)
    drivePlanetCost(itinerary.mode)
    finalPrice = selectedVal + 15;
    return (
     
        
        <>
             <h2 className="itinerary-detail-title">{itinerary.users?.firstName}, Here Is The Details On Your Trip To {itinerary.exoPlanets?.name}</h2>
                <div className="itinerary-detail-summary">
                    <div className="itinerary-detail-img">
                        <img className="itinerary-img" src={`./Images/${itinerary.exoPlanets?.name}.jpg`} />
                        <span className="itinerary-detail">{itinerary.exoPlanets?.name}</span>
                        <span className="itinerary-detail">{itinerary.exoPlanets?.name}</span>
                    </div>
                    <div className="itinerary-price-summary">
                        <span className="itinerary-detail">Price Summary</span><br />
                        <span className="itinerary-detail">Transport to The Citadel: <FontAwesomeIcon icon={faBitcoinSign}/> 10</span><br />
                        <span className="itinerary-detail">{itinerary.mode} to {itinerary.exoPlanets?.name}: <FontAwesomeIcon icon={faBitcoinSign}/> {selectedVal}</span><br />
                        <span className='itinerary-detail'>Exo-Travel Fees: <FontAwesomeIcon icon={faBitcoinSign}/> 5</span><br />
                        <span className='itinerary-detail'>Total: <FontAwesomeIcon icon={faBitcoinSign}/> {finalPrice}</span><br />
                    </div>
                    <div className="itinerary-departure-return">
                        <span className="itinerary-detail">First Name: {itinerary.users?.firstName}</span><br />
                        <span className="itinerary-detail">Last Name: {itinerary.users?.lastName}</span><br />
                        <span className="itinerary-detail">Departure Date: {formattedDeparture}</span><br />
                        <span className='itinerary-detail'>Return Date: {formattedReturn}</span><br />
                        <span className='itinerary-detail'>Travel Mode: {itinerary.mode}</span><br />
                    </div>
                </div>
        </>

    
      
    
  );
};