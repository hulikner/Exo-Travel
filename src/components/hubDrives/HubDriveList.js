import react, { useEffect, useState } from "react";
import { HubDriveCard } from "./HubDriveCard";
import { getAllHubDrives } from "../../modules/HubDriveManager";
import "./HubDriveList.css"

export const HubDriveList = () => {
    const [hubDrive, setHubDrives] = useState([])
   
    const getHubDrives = () => {
        return getAllHubDrives().then(HubDrivesFromDatabase => {
            setHubDrives(HubDrivesFromDatabase)
        })
    }

    useEffect(() => {
        getHubDrives();
    }, [])

    return (
        //takes all of the data/"HubDrive" returned from getAllHubDrive and maps them to individual HubDriveCards
        <div className="hubDrive-container">
            {hubDrive.map(hubDrive => <HubDriveCard
                hubDrive={hubDrive}
                key={hubDrive.id}
                />)}
        </div>
    )
}