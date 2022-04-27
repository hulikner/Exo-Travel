import React, { useState, useEffect } from "react";
import { getUsersById } from "../../modules/AboutManager";
import { ExoPlanetHomeCard } from "../exoPlanets/ExoPlanetHomeCard"
import { ExoPlanetCard} from "../exoPlanets/ExoPlanetCard"
import { ItineraryHomeCard } from "../itineraries/ItineraryHomeCard";
import { getAllExoPlanets } from "../../modules/ExoPlanetManager";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import "./Home.css"
let user = JSON.parse(sessionStorage.getItem('exoTravel_user_firstName'))

const greetUser = () => {
  if (sessionStorage.getItem('exoTravel_user_firstName') != undefined || null){
    let userName = JSON.parse(sessionStorage.getItem('exoTravel_user_firstName'))
    return    <p className="welcome">Welcome, {userName??''}</p>
  }
}

// const ExoPlanetCarousel= (exoPlanets) =>
// {
  
  
//   return (
 
//     )
//   }


  export const Home = () => {
    // const [exoPlanets, setExoPlanets] = useState([])
   
    // useEffect(() => {
    //     getAllExoPlanets().then(setExoPlanets);
    // }, [])
  

  return(  
  <>
  {greetUser()}
  
  <div className="home">
  
  {/* <Carousel>
            {
              exoPlanets.map( (exoPlanet) => <ExoPlanetCard 
              key={exoPlanet.id} 
              exoPlanet={exoPlanet} 
              /> )
            }
        </Carousel> */}
  {/* {ExoPlanetCarousel(exoPlanets)} */}
  <ExoPlanetHomeCard />
  <ItineraryHomeCard />
 


  </div>
  </>
  )
}


Home();