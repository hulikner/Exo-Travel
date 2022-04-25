import React, { useState, useEffect } from "react";
import { getHubDriveById } from "../../modules/HubDriveManager";
import { useParams, useNavigate } from "react-router-dom"
import { epochDateConverter } from "../util/epochDateConverter";
import "./HubDriveDetail.css";

export const HubDriveDetail = () => {
  const [hubDrive, setHubDrive] = useState({name: '', pic:'',cardDetail:'', detail: ''});
  const [isLoading, setIsLoading] = useState(true);

  const {hubDriveId} = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    getHubDriveById(hubDriveId)
      .then(hubDrive=>{
        setHubDrive(hubDrive)
      })
     
  }, [hubDriveId]);
  return (
    <div className="hubDrive-detail">
                <img className="detail-hubDrive-pic" src={`.${hubDrive.pic}`}/>
            <div className="hubDrive-detail-content">
                
                <h3 className="detail-hubDrive-name"> {hubDrive.name}</h3>
                <p className="detail-hubDrive-cardDetail"> {hubDrive.cardDetail} </p>
                <p className="detail-hubDrive-cardDetail"> {hubDrive.detail} </p>
              
            </div>
        </div>
  );
};