import React, { useState, useEffect } from "react";
import { deleteReceipt, getReceiptById } from "../../modules/ReceiptManager";
import { useParams, useNavigate } from "react-router-dom"
import { epochDateConverter } from "../util/epochDateConverter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import "./ReceiptDetail.css";

export const ReceiptDetail = () => {
  const [receipt, setReceipt] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { receiptId } = useParams();
  const navigate = useNavigate();
  const formattedDeparture = receipt?.departure && epochDateConverter(receipt.departure, "MM/dd/yyy");
  const formattedReturn = receipt?.return && epochDateConverter(receipt.return, "MM/dd/yyy");
  let selectedVal = 0;
  let finalPrice = 0;
  let tripDuration = 0;

 
  
  const drivePlanetCost = (m) => {
    if (m === "Ion-Drive") {
      selectedVal = 0.25;
      tripDuration = receipt.exoPlanets?.lightYears / 10;
    }
    if (m === "Warp-Drive") {
      selectedVal = 0.5;
      tripDuration = receipt.exoPlanets?.lightYears / 50;
    }
    if (m === "Wormhole-Drive") {
      selectedVal = 1;
      tripDuration = receipt.exoPlanets?.lightYears * 2;
    }
    return (selectedVal = selectedVal * receipt.exoPlanets?.lightYears && tripDuration);
  };
  const handleDelete = () => {
    setIsLoading(true);
    deleteReceipt(receiptId).then(() => navigate("/itineraries"));
  };

  useEffect(() => {
    getReceiptById(receiptId).then((receipt) => {
      setReceipt(receipt);
    
    });
  }, [receiptId]);
  console.log(receipt);
  drivePlanetCost(receipt.mode);
  finalPrice = selectedVal + 15;
  return (
    <>
      <h2 className="receipt-details-title">
        {receipt.users?.firstName}, Here Is The Details On Your Trip To {receipt.exoPlanets?.name}
      </h2>
      <div className="receipt-detail-image">
        <div className="receipt-detail-img">
          <img className="receipt-img" src={`../../../Images/${receipt.exoPlanets?.name}.jpg`} />
          <span className="receipt-img-name">{receipt.exoPlanets?.name}</span>
        </div>

        <div className="receipt-detail-summary">
          <div className="receipt-price-summary">
            <span className="receipt-detail-title">Price Summary</span>
            <br />
            <span className="receipt-detail">
              Transport to The Citadel: <FontAwesomeIcon icon={faBitcoin} /> 10
            </span>
            <br />
            <span className="receipt-detail">
              {receipt.mode} to {receipt.exoPlanets?.name}: <FontAwesomeIcon icon={faBitcoin} /> {selectedVal}
            </span>
            <br />
            <span className="receipt-detail">
              Exo-Travel Fees: <FontAwesomeIcon icon={faBitcoin} /> 5
            </span>
            <br />
            <span className="receipt-detail-total">
              Total: <FontAwesomeIcon icon={faBitcoin} /> {finalPrice}
            </span>
            <br />

           
          </div>
        </div>
      </div>

      <div className="receipt-departure-return">
        <div className="receipt-departureToReturn">
          <span className="receipt-detail">Departure: {formattedDeparture} @ 8:00 AM to The Citadel</span>
          <br />
          <span className="receipt-detail">Gate Number: 2C </span>
          <br />
          <span className="receipt-detail">Shuttle Number: {receipt.departure}</span>
          <br />
          <span className="receipt-detail">Flight Duration: 2 Hours</span>
          <br />
        </div>

        <div className="receipt-departureToReturn">
          <span className="receipt-detail">
            Departure: {formattedDeparture} @ 12:00 PM to {receipt.exoPlanetsId?.name}
          </span>
          <br />
          <span className="receipt-detail">Gate Number: X-4 </span>
          <br />
          <span className="receipt-detail">Shuttle Number: R2-D2</span>
          <br />
          <span className="receipt-detail">Flight Duration: {tripDuration} Hours</span>
          <br />
        </div>

        <div className="receipt-departureToReturn">
          <span className="receipt-detail">Return: {formattedReturn} @ 8:00 AM to The Citadel</span>
          <br />
          <span className="receipt-detail">Gate Number: X-4 </span>
          <br />
          <span className="receipt-detail">Shuttle Number: R2-D2</span>
          <br />
          <span className="receipt-detail">Flight Duration: {tripDuration} Hours</span>
          <br />
        </div>

        <div className="receipt-departureToReturn">
          <span className="receipt-detail">Return: {formattedDeparture} @ 8:00 AM to Origin</span>
          <br />
          <span className="receipt-detail">Gate Number: 2C </span>
          <br />
          <span className="receipt-detail">Shuttle Number: {receipt.return}</span>
          <br />
          <span className="receipt-detail">Flight Duration: 2 Hours</span>
          <br />
        </div>
      </div>

      <div className="receipt-page-buttons">
        <button type="button" className="receipt-page-button" onClick={() => navigate(`/exoPlanets/${receipt.exoPlanetsId}/reviews/create`)}>
          Print
        </button>
        <button type="button" className="receipt-page-button" onClick={() => navigate(`/itineraries`)}>
          Back
        </button>
      </div>
    </>
  );
};

