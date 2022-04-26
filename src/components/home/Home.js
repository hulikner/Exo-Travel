import React, { useState, useEffect } from "react";
import { getUsersById } from "../../modules/AboutManager";
import { ExoPlanetHomeCard } from "../exoPlanets/ExoPlanetHomeCard"
import { ItineraryHomeCard } from "../itineraries/ItineraryHomeCard";

import "./Home.css"
let user = JSON.parse(sessionStorage.getItem('exoPlanet_user_firstName'))
getUsersById(user)
const greetUser = () => {
  if (sessionStorage.getItem('exoPlanet_user_firstName') != undefined || null){
    let userName = JSON.parse(sessionStorage.getItem('exoPlanet_user_firstName'))
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