import React, { useState, useEffect } from "react";
import { getUsersById } from "../../modules/AboutManager";
import { ExoPlanetHomeCard } from "../exoPlanets/ExoPlanetHomeCard"
import { ItineraryHomeCard } from "../itineraries/ItineraryDashCard";

import "./Home.css"
let user = JSON.parse(sessionStorage.getItem('exoPlanet_user'))
getUsersById(user)
const greetUser = () => {
  if (sessionStorage.getItem('exoPlanet_user') != undefined || null){
    let userName = JSON.parse(sessionStorage.getItem('exoPlanet_user'))
    return    <p className="welcome">Welcome, {user.firstName??''}</p>
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