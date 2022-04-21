import react, { useEffect, useState } from "react";
import { ExoPlanetCard } from "./ExoPlanetCard";
import { getAllExoPlanets } from "../../modules/ExoPlanetManager";
import "./ExoPlanetList.css"

export const ExoPlanetList = () => {
    const [exoPlanets, setExoPlanets] = useState([])
    
    const currentUser = sessionStorage.getItem("exoTravel_user")
   

    const getExoPlanets = () => {
        return getAllExoPlanets(currentUser).then(ExoPlanetsFromDatabase => {
            setExoPlanets(ExoPlanetsFromDatabase)
        })
    }

   

    useEffect(() => {
        getExoPlanets();
    }, [])

    return (
        //takes all of the data/"ExoPlanets" returned from getAllExoPlanets and maps them to individual ExoPlanetCards
        <div className="exoPlanets-container">
            {exoPlanets.map(exoPlanet => <ExoPlanetCard
                exoPlanet={exoPlanet}
                key={exoPlanet.id}
                />)}
        </div>
    )
}