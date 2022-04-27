import React, { useEffect, useState } from "react";
import "./ReviewList.css"
import { getReviewsByExoPlanet, deleteReview } from "../../modules/ReviewManager";
import { useNavigate, useParams } from "react-router-dom";
import { ReviewCard } from "./ReviewCard";

// GROUP: display a list of all the Reviews from the database

export const ReviewList = () => {
    const [reviews, setReviews] = useState([])
    const { exoPlanetId } = useParams();
    const navigate = useNavigate();

    const handleDeleteReview = id => {
        deleteReview(id)
        .then(() => getReviewsByExoPlanet(exoPlanetId).then(setReviews));
    };

    useEffect(() => {
        getReviewsByExoPlanet(exoPlanetId).then(setReviews)
    },[])
    return(
        <div className="review-container">
            <div className ="review-list"  >
                <h2 className="review-list-header">Reviews</h2>
                <div className="review-list-content">
                    {reviews.map(i => (
                        <ReviewCard
                        key={i.id}
                        review={i}
                        handleDeleteReview={handleDeleteReview} />
                    ))}
                </div>
            </div>
        </div>
    )
}