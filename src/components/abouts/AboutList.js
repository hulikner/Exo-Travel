import react, { useEffect, useState } from "react";
import { AboutCard } from "./AboutCard";
import { getAllAbouts } from "../../modules/AboutManager";
import "./AboutList.css"

export const AboutList = () => {
    const [abouts, setAbouts] = useState([])
    
    const currentUser = sessionStorage.getItem("exoTravel_user")
   

    const getAbouts = () => {
        return getAllAbouts(currentUser).then(aboutsFromDatabase => {
            setAbouts(aboutsFromDatabase)
        })
    }

   

    useEffect(() => {
        getAbouts();
    }, [])

    return (
        //takes all of the data/"Abouts" returned from getAllAbouts and maps them to individual AboutCards
        <>
            <h3 className="detail-about-title"> About Us </h3>
        <div className="abouts-container">

            {abouts.map(about => <AboutCard
                about={about}
                key={about.id}
                />)}
        </div>
        </>
    )
}