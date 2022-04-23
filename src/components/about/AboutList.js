import react, { useEffect, useState } from "react";
import { AboutCard } from "./AboutCard";
import { getAllAbouts } from "../../modules/AboutManager";
import "./AboutList.css"

export const AboutList = () => {
    const [Abouts, setAbouts] = useState([])
    
    const currentUser = sessionStorage.getItem("exoTravel_user")
   

    const getAbouts = () => {
        return getAllAbouts(currentUser).then(AboutsFromDatabase => {
            setAbouts(AboutsFromDatabase)
        })
    }

   

    useEffect(() => {
        getAbouts();
    }, [])

    return (
        //takes all of the data/"Abouts" returned from getAllAbouts and maps them to individual AboutCards
        <div className="Abouts-container">
            {Abouts.map(About => <AboutCard
                About={About}
                key={About.id}
                />)}
        </div>
    )
}