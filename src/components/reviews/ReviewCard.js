import React, {useState} from 'react';
import "./ReviewCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons'
import { epochDateConverter } from '../util/epochDateConverter';
import { format } from 'date-fns';
import { updateReview } from '../../modules/ReviewManager';


export const ReviewCard = ({ review }) => {

  const [ reviews, setReview ] = useState(false)



  return (
        <div className='review-card-content'>
            <div className="review-card-img">
             <img className="review-pic" src={`../../Images/${review.exoPlanets.name}.jpg`} />
             <span className="review-card-name">{review.exoPlanets.name}</span>
            </div>
            <div className='review-card-details'>
             <span className="review-card">Name: {review.users.firstName} {review.users.lastName}</span><br />
             <span className="review-card">Review: {review.message}</span><br />
             <span className='review-card'>Number of Stars: {review.stars}</span><br />
            </div>
        </div>
   
  );
}