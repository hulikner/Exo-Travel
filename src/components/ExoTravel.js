import React, {useState} from "react"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import "./ExoTravel.css"

export const ExoTravel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('exoPlanet_user_name') !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("'exoPlanet_user_name'", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem('exoPlanet_user_name') !== null)
    }
    
    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem('exoPlanet_user_name') !== null)
      }
    
return (
  <>
  <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
  <ApplicationViews setAuthUser={setAuthUser}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}/>
  </>
)}
