// Imports
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import { epochDateConverter } from "../util/epochDateConverter";

// Review Card
export const ReviewCard = ({ review }) => {
  // State setState
  const [isLoading, setIsLoading] = useState(false);

  // React-Router-DOM use
  const navigate = useNavigate();

  // Formats epoch date to a readable date
  const formattedDate = review?.date ? epochDateConverter(review?.date, "yyy-MM-dd") : "";
  const formattedEditDate = review?.editDate ? epochDateConverter(review.editDate, "yyy-MM-dd") : "";

  // Gets user id
  let userName = JSON.parse(sessionStorage.getItem("exoTravel_user"));

  // Displays review card
  return (
    <div className="review-card-content">
      <div className="review-card-img">
        <img className="review-pic" src={`../../Images/${review.exoPlanet?.name}.jpg`} />
        <span className="review-card-name">{review.exoPlanet?.name}</span>
      </div>
      <div className="review-card-details">
        <span className="review-card">
          By: {review.user?.firstName} {review.user?.lastName}
        </span>
        <br />
        <span className="review-card"> {review.message}</span>
        <br />
        <p className="review-card">
          <Rating style={{ color: "#2f53d8" }} value={+review.stars} readOnly />{" "}
        </p>
      </div>
      {review.userId === +userName ? (
        <>
          <button type="button" className="edit-cancel-button" disabled={isLoading} onClick={() => navigate(`/exoPlanets/${review.exoPlanetId}/reviews/${review.id}/edit`)}>
            Edit
          </button>
        </>
      ) : (
        <span></span>
      )}
      <div className="review-card-dates">
        <span className="review-card-time">Created: {formattedDate}</span>
      </div>
      {formattedEditDate != 0 ? (
        <>
          <div className="review-card-dates">
            <span className="review-card-time">Edited: {formattedEditDate}</span>
          </div>
        </>
      ) : (
        <span></span>
      )}
    </div>
  );
};
