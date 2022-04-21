import React from "react"
import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { ExoPlanetList } from "./exoPlanets/ExoPlanetList"
import { Home } from "./home/Home"

export const ApplicationViews = ({isAuthenticated, setAuthUser}) => {
  const PrivateOutlet = () => {
		return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
	}
  
  return (
    <>
    <Routes>
      <Route path="/" element={<PrivateOutlet/>} >
        <Route path="/home" element={''} />
        <Route path="/exoPlanets" element={<ExoPlanetList />} />
        <Route path="/tasks" element={''} />
        <Route path="/events" element={''} />
      </Route>
      <Route path="/login" element={<Login setAuthUser={setAuthUser}/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
  )
}
