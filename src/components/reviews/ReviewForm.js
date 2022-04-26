import React, { useState, useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";
import { addReview } from "../../modules/ReviewManager";
import "./ReviewForm.css"
import { epochDateConverter } from "../util/epochDateConverter";
import { getExoPlanetById } from "../../modules/ExoPlanetManager";
import { getAllExoPlanetsByLightYearsDesc } from "../../modules/ExoPlanetManager";


export const ReviewForm = () => {
    
    const {exoPlanetId} = useParams();
    
    const currentUser = JSON.parse(sessionStorage.getItem("exoPlanet_user"));
    
    const [review, setReview] = useState({
        id: '',
        usersId: currentUser,
        date: new Date().getTime()/1000,
        exoPlanetsId: Number(exoPlanetId),
        message: '',
        stars: '',
        
    })


    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    
    const handleControlledInputChange = (t) => {
        const newReview = {...review}
        let selectedVal = t.target.value;
        newReview[t.target.id] = selectedVal;
        setReview(newReview);
    }

    const handleClickSaveEvent = (t) => {
        t.preventDefault();

        if(review.message !== "" && review.stars) {
            setIsLoading(true);
            
            addReview(review)
            .then(() => navigate(`/exoPlanets/${exoPlanetId}/reviews`))
        } else {
                window.alert("Complete Each Field")
        }
    }

    return(
            <div className='review-entire-form'>
            <form className ="review-form">
                <h2 className ="review-header">Create New Review</h2>
                <div className='review-input-fields'>
                <fieldset className="review-fields">
                        <label htmlFor="message">Review:</label>
                        <textarea type="text" id="message" onChange={handleControlledInputChange} rows='10' cols='50' required className="form-control message " placeholder="Review message" value={review.message}/>
                </fieldset>

                <fieldset className="review-fields">
                        <label htmlFor="stars">Number of Stars:</label>
                        <input type="text" id="stars" onChange={handleControlledInputChange} required className="form-control stars" placeholder="stars" value={review.stars}/>
                </fieldset>
                </div>
                <button 
				    type="submit" 
				    className="submit-review-button"
				    disabled={isLoading}
				    onClick={handleClickSaveEvent}>
				    Save Review
                </button>
            </form>
            </div>
 
    )
}