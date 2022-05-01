// Imports
import React, { useEffect, useState } from "react";
import { AboutCard } from "./AboutCard";
import { getAllAbouts } from "../../modules/AboutManager";
import "./AboutList.css";

export const AboutList = () => {
  // State setState
  const [abouts, setAbouts] = useState([]);

  // Get the abouts list and set it
  const getAbouts = () => {
    return getAllAbouts().then((aboutsFromDatabase) => {
      setAbouts(aboutsFromDatabase);
    });
  };

  // Calls on the function to created the list
  useEffect(() => {
    getAbouts();
  }, []);

  // Takes all of the "abouts" returned from getAllAbouts and maps them to individual AboutCards
  return (
    <>
      <h3 className="detail-about-title"> About Us </h3>
      <div className="abouts-container">
        {abouts.map((about) => (
          <AboutCard about={about} key={about.id} />
        ))}
      </div>
    </>
  );
};
