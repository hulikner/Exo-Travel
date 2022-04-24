import React from "react"
import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { ExoPlanetDetail } from "./exoPlanets/ExoPlanetDetail"
import { ExoPlanetList } from "./exoPlanets/ExoPlanetList"
import { ItineraryList } from "./itineraries/ItineraryList"
import { ItineraryDetail } from "./itineraries/ItineraryDetail"
import { HubDriveList } from "./hubDrives/HubDriveList"
import { HubDriveDetail } from "./hubDrives/HubDriveDetail"
import { AboutList } from "./abouts/AboutList"
import { AboutDetail } from "./abouts/AboutDetail"
import { Home } from "./home/Home"

export const ApplicationViews = ({isAuthenticated, setAuthUser}) => {
  const PrivateOutlet = () => {
		return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
	}
  
  return (
    <>
    <Routes>
      <Route path="/" element={<PrivateOutlet/>} >
        <Route path="/home" element={<Home />} />
        <Route path="/exoPlanets" element={<ExoPlanetList />} />
        <Route path="/exoPlanets/:exoPlanetId" element={<ExoPlanetDetail />} />
        <Route path="/hubDrives" element={<HubDriveList />} />
        <Route path="/hubDrives/:hubDriveId" element={<HubDriveDetail />} />
        <Route path="/abouts" element={<AboutList />} />
        <Route path="/abouts/:aboutId" element={<AboutDetail />} />
        <Route path="/itineraries" element={<ItineraryList />} />
        <Route path="/itineraries/:itineraryId" element={<ItineraryDetail />} />
      </Route>
      <Route path="/login" element={<Login setAuthUser={setAuthUser}/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
  )
}
