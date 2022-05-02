// Imports
import React, { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { useParams } from "react-router-dom";
import { getReviewsByExoPlanet, deleteReview } from "../../modules/ReviewManager";
import "./ReviewList.css";

// List of reviews for that Exo-Planet
export const ReviewList = () => {
  // State setState
  const [reviews, setReviews] = useState([]);

  // React-Router-Dom use
  const { exoPlanetId } = useParams();

  // Handles delete
  const handleDeleteReview = (id) => {
    deleteReview(id).then(() => getReviewsByExoPlanet(exoPlanetId).then(setReviews));
  };

  // Gets Exo-Planets reviews
  useEffect(() => {
    getReviewsByExoPlanet(exoPlanetId).then(setReviews);
  }, []);

  // Displays Exo-Planets reviews
  return (
    <div className="review-container">
      <div className="review-list">
        <h2 className="review-list-header">Reviews</h2>
        </div>
        <div className="review-list-content">
          {reviews.map((i) => (
            <ReviewCard key={i.id} review={i} handleDeleteReview={handleDeleteReview} />
          ))}
        </div>
      
    </div>
  );
};
