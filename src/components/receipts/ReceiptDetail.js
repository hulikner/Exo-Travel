// Imports
import React, { useState, useEffect } from "react";
import { deleteReceipt, getReceiptById } from "../../modules/ReceiptManager";
import { useParams, useNavigate } from "react-router-dom";
import { epochDateConverter } from "../util/epochDateConverter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import "./ReceiptDetail.css";
import { WindowSharp } from "@mui/icons-material";

// Receipt details page
export const ReceiptDetail = () => {
  // Variables used
  let selectedVal = 0;
  let finalPrice = 0;
  let tripDuration = 0;

  // React-Router-Dom uses
  const { receiptId } = useParams();
  const navigate = useNavigate();

  // State setState
  const [receipt, setReceipt] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Formats dates from epoch time to a readable date
  const formattedDeparture = receipt?.departure && epochDateConverter(receipt.departure, "MM/dd/yyy");
  const formattedReturn = receipt?.return && epochDateConverter(receipt.return, "MM/dd/yyy");

  // Calculates the cost of travel from The Citidel to Exo-Planet user has paid for
  const drivePlanetCost = (m) => {
    if (m === "Ion-Drive") {
      selectedVal = 0.25;
      tripDuration = receipt.exoPlanet?.lightYears / 10;
    }
    if (m === "Warp-Drive") {
      selectedVal = 0.5;
      tripDuration = receipt.exoPlanet?.lightYears / 50;
    }
    if (m === "Wormhole-Drive") {
      selectedVal = 1;
      tripDuration = receipt.exoPlanet?.lightYears * 2;
    }
    return (selectedVal = selectedVal * receipt.exoPlanet?.lightYears && tripDuration);
  };

  // Handles Delete
  const handleDelete = () => {
    setIsLoading(true);
    deleteReceipt(receiptId).then(() => navigate("/itineraries"));
  };

  // Gets the receipt by id and sets
  useEffect(() => {
    getReceiptById(receiptId).then((receipt) => {
      setReceipt(receipt);
    });
  }, [receiptId]);

  // Calculations
  drivePlanetCost(receipt.mode);
  finalPrice = selectedVal + 15;

  // Displays receipt details
  return (
    <>
      <h2 className="receipt-details-title">
        {receipt.user?.firstName}, Here Is The Details On Your Trip To {receipt.exoPlanet?.name}
      </h2>
      <div className="receipt-detail-image">
        <div className="receipt-detail-img">
          <img className="receipt-img" src={`../../../Images/${receipt.exoPlanet?.name}.jpg`} />
          <span className="receipt-img-name">{receipt.exoPlanet?.name}</span>
        </div>
        <div className="receipt-detail-summary">
          <div className="receipt-price-summary">
            <span className="receipt-detail-title">Price Summary</span>
            <br />
            <span className="receipt-detail">
              Transport to The Citadel:{" "}
              <span className="receipt-detail-data">
                <FontAwesomeIcon icon={faBitcoin} />
                10
              </span>
            </span>
            <br />
            <span className="receipt-detail">
              {receipt.mode} to {receipt.exoPlanet?.name}:{" "}
              <span className="receipt-detail-data">
                <FontAwesomeIcon icon={faBitcoin} /> {selectedVal}{" "}
              </span>
            </span>
            <br />
            <span className="receipt-detail">
              Exo-Travel Fees:{" "}
              <span className="receipt-detail-data">
                <FontAwesomeIcon icon={faBitcoin} /> 5
              </span>
            </span>
            <br />
            <span className="receipt-detail-total">
              Total:{" "}
              <span className="receipt-detail-data">
                <FontAwesomeIcon icon={faBitcoin} /> {finalPrice}
              </span>
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
            Departure: {formattedDeparture} @ 12:00 PM to {receipt.exoPlanetId?.name}
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
        <button type="button" className="receipt-page-button" onClick={() => print()}>
          Print
        </button>
        <button type="button" className="receipt-page-button" onClick={() => navigate(`/itineraries`)}>
          Back
        </button>
      </div>
      <div className="receipt-page-bottom"></div>
    </>
  );
};
