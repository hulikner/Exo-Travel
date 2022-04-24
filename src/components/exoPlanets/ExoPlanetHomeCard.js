import React, { useEffect, useState } from 'react';
import "../home/Home.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons'
import { getAllExoPlanets } from '../../modules/ExoPlanetManager';


export const ExoPlanetHomeCard = () => {
//   let today= new Date().getTime()/1000;
  
  
  const[exoPlanets, setExoPlanets] = useState([])
  const {exoPlanetId} = useParams();


  useEffect(() => {
  getAllExoPlanets().then(setExoPlanets)
 
},[])


  return (

    <>
      <h2 className="exoPlanet-home-header">ExoPlanets</h2>
      <div className="exoPlanet-home-content">
      {exoPlanets.map(x =>( 

        <div className='exoPlanet-home-content' key={x.id}>

      <Link className="exoPlanet-home-link" to={`/exoPlanets/${x.id}` }>
       
        <span className="exoPlanet-home-name">{x.name}</span>
       
        <img className='exoPlanet-home-img' src={`./Images/${x.name}.jpg`} />
    
      </Link>
      </div>
      ))}
      </div>
  </>
  );
}