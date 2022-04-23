import react from "react";
import "./HubDriveCard.css"

export const HubDriveCard = ({hubDrive}) => {
    //creates the component HubDriveCard to display the information of each individual HubDrive from the fetch call getAllHubDrives

    return(
        <div className="hubDrive-card">
            <div className="hubDrive-card-content">
                <h3 className="card-hubDrive-name"> {hubDrive.name}</h3>
                <p className="card-hubDrive-detail"> {hubDrive.detail} </p>
            </div>
        </div>
    )
}