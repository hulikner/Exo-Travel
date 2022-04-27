import React, { useEffect, useState } from "react";
import "./ReceiptList.css"
import { getAllReceipts, deleteReceipt, getReceiptByItineraryId, getReceiptById, addReceipt } from "../../modules/ReceiptManager";
import { useNavigate, useParams } from "react-router-dom";
import { ReceiptCard } from "./ReceiptCard";

// GROUP: display a list of all the Receipts from the database

export const ReceiptList = () => {
    const [receipts, setReceipts] = useState([])
    
    const {itineraryId} = useParams();

    const navigate = useNavigate();

    const handleDeleteReceipt = id => {
        deleteReceipt(id)
        .then(() => getAllReceipts().then(setReceipts));
    };

    useEffect(() => {
        getReceiptByItineraryId(itineraryId).then(setReceipts)
       
    },[])
    

    return(
        <div className="receipt-container">
            <div className ="receipt-list"  >
                <h2 className="receipt-list-header">Receipts</h2>
                <div className="receipt-list-content">
                    {receipts.map(i => (
                        <ReceiptCard
                        key={i.id}
                        receipt={i}
                        handleDeleteReceipt={handleDeleteReceipt} />
                    ))}
                </div>
            </div>
        </div>
    )
}