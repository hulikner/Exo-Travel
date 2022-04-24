import React, { useState, useEffect } from "react";
import { ExoPlanetHomeCard } from "../exoPlanets/ExoPlanetHomeCard"

import "./Home.css"

const greetUser = () => {
  if (sessionStorage.getItem('exoPlanet_user') != undefined || null){
    let userName = JSON.parse(sessionStorage.getItem('exoPlanet_user'))
    return <p className="welcome">Welcome, {userName??''}</p>
  }
}

export const Home = () => {
  return(  
  <>
  {greetUser()}
  <div className="home">
  
  <ExoPlanetHomeCard />
 


  </div>
  </>
  )
}
Home();