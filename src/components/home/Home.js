// Imports
import React from "react";
import { ExoPlanetHomeCard } from "../exoPlanets/ExoPlanetHomeCard";
import { ItineraryHomeCard } from "../itineraries/ItineraryHomeCard";
import { ReceiptHomeList } from "../receipts/ReceiptHomeList";
import "./Home.css";

// Using logged in user name, display greeting
const greetUser = () => {
  if (sessionStorage.getItem("exoTravel_user_firstName") != undefined || null) {
    let userName = JSON.parse(sessionStorage.getItem("exoTravel_user_firstName"));
    return <p className="welcome">Welcome, {userName ?? ""}</p>;
  }
};

// Home page
export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-header">{greetUser()}</div>
        <div className="home-cards">
          <ExoPlanetHomeCard />
          <ItineraryHomeCard />
          <ReceiptHomeList />
         
        </div>
      </div>
    </>
  );
};

// Call for Home function
Home();
