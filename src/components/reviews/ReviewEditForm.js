import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateReview, getReviewById } from "../../modules/ReviewManager"
import { epochDateConverter } from "../util/epochDateConverter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
import "./ReviewEditForm.css"


export const ReviewEditForm = () => {
    const [review, setReview] = useState({ message: "", stars: ""});
    const [isLoading, setIsLoading] = useState(false);
    const {reviewId} = useParams();
    const navigate = useNavigate();

    const handleFieldChange = i => {
       
      const stateToChange = { ...review };
      stateToChange[i.target.id] =   i.target.value;
      setReview(stateToChange);
    };
  
    const updateExistingReview = t => {
        // t.preventDefault()
        setIsLoading(true);

        const editedReview = {
            id: reviewId,
            review: review.message,
            stars: review.stars,
          };

          updateReview(editedReview)
    .then(() => navigate(`/exoPlanets/${review.exoPlanetsId}/reviews`)
    )
  }

  

  useEffect(() => {
    getReviewById(reviewId)
      .then(review => {
        setReview(review);
        setIsLoading(false);
      });
  }, []);

  return(
    <>
           <form className="review__edit__form">
                <h2 className="review__edit__header">Edit Review</h2>


                <fieldset className="review-edit-fields">
                    <div>
                        <label htmlFor="message">Review:</label>
                        <input type="text" id="message" onChange={handleFieldChange} required className="form-control-message" placeholder="Review" value={review.message}/>
                    </div>
                </fieldset>

                <fieldset className="review-edit-fields">
                    <div>
                        <label htmlFor="stars">Number of Stars:</label>
                        <input type="text" id="stars" onChange={handleFieldChange} required className="form-control-stars " placeholder="Number of Stars" value={review.stars}/>
                    </div>
                </fieldset>


                <div className='edit-review-save-cancel'>
                <button 
				    type="button" 
				    className="edit-review-save-button"
				    disabled={isLoading}
				    onClick={updateExistingReview}>
				    Save
                </button>

                <button 
				    type="button" 
				    className="edit-cancel-button"
				    disabled={isLoading}
				    onClick={()=>navigate(`/exoPlanets/${review.exoPlanetsId}/reviews`)}>
				    Cancel
                </button>


                </div>
               </form>
    </>
    )
}