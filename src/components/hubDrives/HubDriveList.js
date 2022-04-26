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
        <>
        <h3 className="detail-hubDrive-title"> How It Works </h3>
        <div className="hubDrive-container">
            {hubDrive.map(hubDrive => <HubDriveCard
                hubDrive={hubDrive}
                key={hubDrive.id}
                />)}
        </div>
        </>
    )
}