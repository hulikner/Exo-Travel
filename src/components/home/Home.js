import React, { useState, useEffect } from "react";
import { getUsersById } from "../../modules/AboutManager";
import { ExoPlanetHomeCard } from "../exoPlanets/ExoPlanetHomeCard"
import { ItineraryHomeCard } from "../itineraries/ItineraryHomeCard";

import "./Home.css"
let user = JSON.parse(sessionStorage.getItem('exoTravel_user_firstName'))

const greetUser = () => {
  if (sessionStorage.getItem('exoTravel_user_firstName') != undefined || null){
    let userName = JSON.parse(sessionStorage.getItem('exoTravel_user_firstName'))
    return    <p className="welcome">Welcome, {userName??''}</p>
  }
}

export const Home = () => {
  
  return(  
  <>
  {greetUser()}
  <div className="home">
  
  <ExoPlanetHomeCard />
  <ItineraryHomeCard />
 


  </div>
  </>
  )
}
Home();