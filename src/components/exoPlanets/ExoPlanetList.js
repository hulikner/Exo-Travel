import react, { useEffect, useState } from "react";
import { ExoPlanetCard } from "./ExoPlanetCard";
import { getAllExoPlanets, getAllExoPlanetsByLightYearsAsc, getAllExoPlanetsByLightYearsDesc } from "../../modules/ExoPlanetManager";
import "./ExoPlanetList.css"

export const ExoPlanetList = () => {
    const [exoPlanets, setExoPlanets] = useState([])
    const [ascending, setAscending] = useState(true)
    const [ascend, setAscend] = useState(true)

    const currentUser = sessionStorage.getItem("exoTravel_user")
   

    const getExoPlanets = async () => {
        const ExoPlanetsFromDatabase = await getAllExoPlanets(currentUser);
        const ascendingPlanets = ExoPlanetsFromDatabase.sort((a,b) => a.lightYears - b.lightYears)
        setExoPlanets(ascendingPlanets);
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
    useEffect(() => {
        if(!ascending){
            setExoPlanets(exoPlanets.sort((a,b)=> b.lightYears-a.lightYears))
        }else{
            setExoPlanets(exoPlanets.sort((a,b)=> a.lightYears-b.lightYears))
        }
    }, [ascending])
    useEffect(() => {
        if(!ascend){
            setExoPlanets(exoPlanets.sort((a,b)=> b.rating-a.rating))
        }else{
            setExoPlanets(exoPlanets.sort((a,b)=> a.rating-b.rating))
        }  
    }, [ascend])

    return (
        //takes all of the data/"ExoPlanets" returned from getAllExoPlanets and maps them to individual ExoPlanetCards
        <>
        <div className="exoPlanet-list-buttons">
            <button type="button" className="asc-button" onClick={()=>setAscending(!ascending)}>Sort by LightYears</button>
            <button type="button" className="asc-button" onClick={()=>setAscend(!ascend)}>Sort by Rating</button>
        </div>
        <div className="exoPlanets-container">
            {exoPlanets.map(exoPlanet => <ExoPlanetCard
                exoPlanet={exoPlanet}
                key={`${exoPlanet.id}-${ascending}`}
                />)}
        </div>
        </>
    )
}