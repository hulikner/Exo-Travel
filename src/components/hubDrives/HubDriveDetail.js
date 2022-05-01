// Imports
import React, { useState, useEffect } from "react";
import { getHubDriveById } from "../../modules/HubDriveManager";
import { useParams } from "react-router-dom";
import "./HubDriveDetail.css";

// HubDrive details page
export const HubDriveDetail = () => {
  // React-Router-DOM use
  const { hubDriveId } = useParams();

  // State setState
  const [hubDrive, setHubDrive] = useState({
    name: "",
    pic: "",
    cardDetail: "",
    detail: "",
  });

  // Sets the hubDrive clicked on
  useEffect(() => {
    getHubDriveById(hubDriveId).then((hubDrive) => {
      setHubDrive(hubDrive);
    });
  }, [hubDriveId]);

  // HubDrive info sent to the DOM
  return (
    <div className="hubDrive-detail">
      <img className="detail-hubDrive-pic" src={`.${hubDrive.pic}`} />
      <div className="hubDrive-detail-content">
        <h3 className="detail-hubDrive-name"> {hubDrive.name}</h3>
        <p className="detail-hubDrive-cardDetail"> {hubDrive.cardDetail} </p>
        <p className="detail-hubDrive-cardDetail"> {hubDrive.detail} </p>
      </div>
    </div>
  );
};
