// Imports
import React, { useState, useEffect } from "react";
import { getAboutById } from "../../modules/AboutManager";
import { useParams, useNavigate } from "react-router-dom";
import "./AboutDetail.css";

// Details page for each about section
export const AboutDetail = () => {
  // State setState
  const [about, setAbout] = useState({ name: "", pic: "", cardDetail: "", detail: "" });
  const [isLoading, setIsLoading] = useState(true);

  // React-Router-DOM uses
  const { aboutId } = useParams();
  const navigate = useNavigate();

  // When aboutId changes, useEffect is triggered
  useEffect(() => {
    getAboutById(aboutId).then((about) => {
      setAbout(about);
    });
  }, [aboutId]);

  // The details sent to the DOM
  return (
    <div className="about-detail">
      <img className="detail-about-pic" src={`.${about.pic}`} />
      <div className="about-detail-content">
        <h3 className="detail-about-name"> {about.name}</h3>
        <p className="detail-about-cardDetail"> {about.cardDetail} </p>
        <p className="detail-about-detail"> {about.detail} </p>
      </div>
    </div>
  );
};
