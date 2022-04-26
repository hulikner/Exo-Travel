import React from "react"
import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { ExoPlanetDetail } from "./exoPlanets/ExoPlanetDetail"
import { ExoPlanetList } from "./exoPlanets/ExoPlanetList"
import { ItineraryList } from "./itineraries/ItineraryList"
import { ItineraryDetail } from "./itineraries/ItineraryDetail"
import { ItineraryEditForm } from "./itineraries/ItineraryEditForm"
import { HubDriveList } from "./hubDrives/HubDriveList"
import { HubDriveDetail } from "./hubDrives/HubDriveDetail"
import { AboutList } from "./abouts/AboutList"
import { AboutDetail } from "./abouts/AboutDetail"
import { ReviewList } from "./reviews/ReviewList"
import { ReviewForm } from "./reviews/ReviewForm"
import { ReviewEditForm } from "./reviews/ReviewEditForm"
import { ReceiptList } from "./receipts/ReceiptList"
import { ReceiptDetail } from "./receipts/ReceiptDetail"
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
        <Route path="/exoPlanets/:exoPlanetId/reviews" element={<ReviewList />} />
        <Route path="/exoPlanets/:exoPlanetId/reviews/create" element={<ReviewForm />} />
        <Route path="/exoPlanets/:exoPlanetId/reviews/:reviewId/edit" element={<ReviewEditForm />} />
        <Route path="/hubDrives" element={<HubDriveList />} />
        <Route path="/hubDrives/:hubDriveId" element={<HubDriveDetail />} />
        <Route path="/abouts" element={<AboutList />} />
        <Route path="/abouts/:aboutId" element={<AboutDetail />} />
        <Route path="/itineraries" element={<ItineraryList />} />
        <Route path="/itineraries/:itineraryId" element={<ItineraryDetail />} />
        <Route path="/itineraries/:itineraryId/edit" element={<ItineraryEditForm />} />
        <Route path="/itineraries/:itineraryId/receipts" element={<ReceiptList />} />
        <Route path="/itineraries/:itineraryId/receipts/:receiptId" element={<ReceiptDetail />} />
      </Route>
      <Route path="/login" element={<Login setAuthUser={setAuthUser}/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
  )
}
