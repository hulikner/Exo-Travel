import React, {useState} from 'react';
import "./ReviewCard.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons'
import { epochDateConverter } from '../util/epochDateConverter';
import { format } from 'date-fns';
import { updateReview } from '../../modules/ReviewManager';
import Rating from '@mui/material/Rating';



export const ReviewCard = ({ review }) => {

  const [ reviews, setReview ] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const formattedDate = review?.date ? epochDateConverter(review?.date, 'yyy-MM-dd') : ''
  const formattedEditDate = review?.editDate ? epochDateConverter(review.editDate, 'yyy-MM-dd') : ''
  let userName = JSON.parse(sessionStorage.getItem('exoTravel_user'))



  return (
        <div className='review-card-content'>
            <div className="review-card-img">
             <img className="review-pic" src={`../../Images/${review.exoPlanets?.name}.jpg`} />
             <span className="review-card-name">{review.exoPlanets?.name}</span>
            </div>
            <div className='review-card-details'>
             <span className="review-card">By: {review.users?.firstName} {review.users?.lastName}</span><br />
             <span className="review-card"> {review.message}</span><br />
             <p className="review-card"><Rating value={+review.stars} readOnly/> </p>
             
            </div>
             {review.usersId === +userName ? (
            <>
              <button 
				    type="button" 
				    className="edit-cancel-button"
				    disabled={isLoading}
				    onClick={()=>navigate(`/exoPlanets/${review.exoPlanetsId}/reviews/${review.id}/edit`)}>
				    Edit
            </button>
            </>
          ) : (
           <span></span>
          )}

              <div className="review-card-dates">
             <span className='review-card-time'>Created: {formattedDate}</span>
            
             </div>
           
          {formattedEditDate != 0 ? (
            <>
            <div className="review-card-dates">
             <span className='review-card-time'>Edited: {formattedEditDate}</span>
             </div>
             </>
          ):(<span></span>)
        }
          





            
            



        </div>
   
  );
}