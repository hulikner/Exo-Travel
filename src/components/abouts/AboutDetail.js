import React, { useState, useEffect } from "react";
import { getAboutById } from "../../modules/AboutManager";
import { useParams, useNavigate } from "react-router-dom"
import { epochDateConverter } from "../util/epochDateConverter";
import "./AboutDetail.css";

export const AboutDetail = () => {
  const [about, setAbout] = useState({name: '', pic:'',cardDetail:'', detail: ''});
  const [isLoading, setIsLoading] = useState(true);

  const {aboutId} = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    getAboutById(aboutId)
      .then(about=>{
        setAbout(about)
      })
     
  }, [aboutId]);
  return (
    <div className="about-detail">
                <img className="detail-about-pic" src={`.${about.pic}`}/>
            <div className="about-detail-content">
            
                <h3 className="detail-about-name"> {about.name}</h3>
                <p className="detail-about-cardDetail"> {about.cardDetail} </p>
                <p className="detail-about-detail"> {about.detail} </p>
            
            </div>
        </div>
  );
};