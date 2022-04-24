import react, { useEffect, useState } from "react";
import { ExoPlanetCard } from "./ExoPlanetCard";
import { getAllExoPlanets, getAllExoPlanetsByLightYearsAsc, getAllExoPlanetsByLightYearsDesc } from "../../modules/ExoPlanetManager";
import "./ExoPlanetList.css"

export const ExoPlanetList = () => {
    const [exoPlanets, setExoPlanets] = useState([])
    
    const currentUser = sessionStorage.getItem("exoTravel_user")
   

    const getExoPlanets = () => {
        return getAllExoPlanets(currentUser).then(ExoPlanetsFromDatabase => {
            setExoPlanets(ExoPlanetsFromDatabase)
        })
    }
    const getExoPlanetsAsc = () => {
        return getAllExoPlanetsByLightYearsAsc(currentUser).then(ExoPlanetsFromDatabase => {
            setExoPlanets(ExoPlanetsFromDatabase)
        })
    }
    const getExoPlanetsDesc = () => {
        return getAllExoPlanetsByLightYearsDesc(currentUser).then(ExoPlanetsFromDatabase => {
            setExoPlanets(ExoPlanetsFromDatabase)
        })
    }

   

    useEffect(() => {
        getExoPlanets();
    }, [])

    return (
        //takes all of the data/"ExoPlanets" returned from getAllExoPlanets and maps them to individual ExoPlanetCards
        <>
        <div className="exoPlanet-list-buttons">
            <button type="button" className="asc-button" onClick={()=>getExoPlanetsAsc}>Sort by LightYears Ascending</button>
            <button type="button" className="desc-button" onClick={()=>getExoPlanetsDesc}>Sort by LightYears Descending</button>
        </div>
        <div className="exoPlanets-container">
            {exoPlanets.map(exoPlanet => <ExoPlanetCard
                exoPlanet={exoPlanet}
                key={exoPlanet.id}
                />)}
        </div>
        </>
    )
}