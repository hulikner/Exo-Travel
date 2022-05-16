// Imports
import React, { useEffect, useState } from "react";
import { ReceiptHomeCard } from "./ReceiptHomeCard";
import { getAllReceipts, deleteReceipt, getReceiptByUserId } from "../../modules/ReceiptManager";
import "./ReceiptList.css";

// Receipts list
export const ReceiptHomeList = () => {
  // State setState
  const [receipts, setReceipts] = useState([]);

 // Get user
 const currentUser = JSON.parse(sessionStorage.getItem("exoTravel_user"));

  // Handles delete
  const handleDeleteReceipt = (id) => {
    deleteReceipt(id).then(() => getAllReceipts().then(setReceipts));
  };

  // Gets receipt by itinerary id and sets
  useEffect(() => {
    getReceiptByUserId(currentUser).then(setReceipts);
  }, []);

  // Displays receipts
  return (
    <div className="receipt-home-container">
        <h2 className="receipt-home-header">Receipts</h2>
      <div className="receipt-home">
        <div className="receipt-home-content">
          {receipts.map((i) => (
            <ReceiptHomeCard key={i.id} receipt={i} handleDeleteReceipt={handleDeleteReceipt} />
          ))}
        </div>
      </div>
    </div>
  );
};
