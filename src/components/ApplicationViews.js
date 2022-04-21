import React from "react"
import { Routes, Route, Outlet } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const ApplicationViews = ({isAuthenticated, setIsAuthenticated}) => {
  const PrivateOutlet = () => {
		return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
	}
  
  const setAuthUser = (user) => {
		sessionStorage.setItem("nutshell_user", JSON.stringify(user))
		setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
	}
  
  return (
    <>
    <Routes>
      <Route path="/" element={<PrivateOutlet/>} >
        <Route path="/friends" element={} />
        <Route path="/messages" element={} />
        <Route path="/tasks" element={} />
        <Route path="/events" element={} />
      </Route>
    </Routes>
    </>
  )
}
