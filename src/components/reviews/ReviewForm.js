import React, { useState, useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";
import { addReview, getReviewsByExoPlanet } from "../../modules/ReviewManager";
import { epochDateConverter } from "../util/epochDateConverter";
import { updateExoPlanet } from "../../modules/ExoPlanetManager";
import "./ReviewForm.css"

export const ReviewForm = () => {
    
    const {exoPlanetId} = useParams();
   const [allReviews, setAllReviews] = useState();

    const currentUser = JSON.parse(sessionStorage.getItem("exoTravel_user"));
 getReviewsByExoPlanet(exoPlanetId)

    const getStarTotal =(newStars)=>{
        const reviewCount = +allReviews.length +1
        let totalStars = +newStars
        allReviews.map((review)=> totalStars+= +review.stars
        )
        return totalStars/reviewCount

    } 
    const [review, setReview] = useState({
        id: '',
        userId: currentUser,
        date: new Date().getTime()/1000,
        exoPlanetId: Number(exoPlanetId),
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
           
            const newStarRating = getStarTotal(review.stars)
            const exoPlanetObject= {id: +exoPlanetId, rating: +newStarRating,}
            updateExoPlanet(exoPlanetObject).then(

                addReview(review)
            )
            .then(() => navigate(`/exoPlanets/${+exoPlanetId}/reviews`))
        } else {
                window.alert("Complete Each Field")
        }
    }

    useEffect(()=>{
        getReviewsByExoPlanet(exoPlanetId).then(setAllReviews)
    },[])

    return(
        <>
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
                <div className="review-form-buttons">
                <button 
				    type="submit" 
				    className="submit-review-button"
				    disabled={isLoading}
				    onClick={handleClickSaveEvent}>
				    Submit
                </button>
                <button 
				    type="cancel" 
				    className="cancel-review-button"
				    disabled={isLoading}
				    onClick={() => navigate(`/itineraries`)}>
				    Cancel
                </button>
                </div>
            </form>
            </div> <div className="review-form-bottom"></div>
        </>
    )
}