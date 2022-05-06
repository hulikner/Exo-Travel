// Imports
import React from "react";
import { Link } from "react-router-dom";
import { epochDateConverter } from "../util/epochDateConverter";


// Receipt home card
export const ReceiptHomeCard = ({ receipt }) => {
  // Formats dates from epoch time to a readable date
  const formattedDeparture = receipt?.departure && epochDateConverter(receipt.departure, "MM/dd/yy");
  const formattedReturn = receipt?.return && epochDateConverter(receipt.return, "MM/dd/yy");

  // Displays receipt home
  return (
    <Link className="receipt-home-link" to={`/itineraries/itineraryId/receipts/${receipt.id}`}>
      <div className="receipt-home-content">
        <div className="receipt-home-img">
          <img className="receipt-home-pic" src={`../../Images/${receipt.exoPlanet.name}.jpg`} />
          <p className="receipt-pic-home-title">{receipt.exoPlanet.name}</p>
        </div>
        <div className="receipt-home-info">
        
          <span className="receipt-home">Departure {formattedDeparture}</span>
          <br />
          <span className="receipt-home">Return {formattedReturn}</span>
          <br />
          
        </div>
      </div>
    </Link>
  );
};
