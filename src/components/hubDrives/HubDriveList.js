// Imports
import React, { useEffect, useState } from "react";
import { HubDriveCard } from "./HubDriveCard";
import { getAllHubDrives } from "../../modules/HubDriveManager";
import "./HubDriveList.css";

// Displays the list of hubDrives
export const HubDriveList = () => {
  // State setState
  const [hubDrive, setHubDrives] = useState([]);

  // Gets all the hubDrives by id and sets page
  const getHubDrives = () => {
    return getAllHubDrives().then((HubDrivesFromDatabase) => {
      setHubDrives(HubDrivesFromDatabase);
    });
  };

  // Gets list of hubDrives
  useEffect(() => {
    getHubDrives();
  }, []);

  // Sends hubDrive list to DOM
  return (
    <>
      <h3 className="detail-hubDrive-title"> How It Works </h3>
      <div className="hubDrive-container">
        {hubDrive.map((hubDrive) => (
          <HubDriveCard hubDrive={hubDrive} key={hubDrive.id} />
        ))};
      </div>
    </>
  );
};
