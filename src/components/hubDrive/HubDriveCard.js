import react from "react";
import { Link } from "react-router-dom";
import "./HubDriveCard.css"

export const HubDriveCard = ({hubDrive}) => {
    //creates the component HubDriveCard to display the information of each individual HubDrive from the fetch call getAllHubDrives

    return(
        <div className="hubDrive-card">
            <div className="hubDrive-card-content">
            <Link className="hubDrive-link" to={`/hubDrives/${hubDrive.id}` }>
                <h3 className="card-hubDrive-name"> {hubDrive.name}</h3>
                <img className="card-hubDrive-pic" src={`${hubDrive.pic}`}/>
                <p className="card-hubDrive-cardDetail"> {hubDrive.cardDetail} </p>
                </Link>
            </div>
        </div>
    )
}