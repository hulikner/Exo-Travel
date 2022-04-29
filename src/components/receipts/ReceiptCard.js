import React, {useState, useEffect} from 'react';
import "./ReceiptCard.css";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons'
import { epochDateConverter } from '../util/epochDateConverter';
import { format } from 'date-fns';
import { addReceipt, getReceiptById, updateReceipt } from '../../modules/ReceiptManager';


export const ReceiptCard = ({ receipt }) => {

  const [ receipts, setReceipt ] = useState([])
 
  const formattedDeparture = receipt?.departure && epochDateConverter(receipt.departure, 'eee. MMM do')
  const formattedReturn = receipt?.return && epochDateConverter(receipt.return, 'eee. MMM do')
  
  
  return (
    
    <Link className="receipt-card-link" to={`/itineraries/itineraryId/receipts/${receipt.id}` }>
        <div className='receipt-card-content'>
        <div className="receipt-card-img">
        <img className="receipt-pic" src={`../../Images/${receipt.exoPlanets.name}.jpg`} />
        <p className="receipt-pic-title">{receipt.exoPlanets.name}</p>
        </div>
        <div className= "receipt-card-info">
        <span className="receipt-card">First Name: {receipt.users.firstName}</span><br />
        <span className="receipt-card">Last Name: {receipt.users.lastName}</span><br />
        <span className="receipt-card">Departure Date: {formattedDeparture}</span><br />
        <span className='receipt-card'>Return Date: {formattedReturn}</span><br />
        <span className='receipt-card'>Travel Mode: {receipt.mode}</span><br />
        </div>
        </div>
      </Link>
   
  );
}