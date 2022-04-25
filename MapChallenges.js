import { useState } from "react";
import './MapChallenges.css';
import fullHouse from './images/fullHouse.png';
import cabinCottages from './images/cabinsCottages.png';
import uniqueStays from './images/uniqueStays.png';
import petsAllowed from './images/petsAllowed.png';
const AirBnb=()=>{
    let [menu, setMenu]=useState([
        {image:fullHouse,text:"Entire homes"},
        {image:uniqueStays,text:"Unique stays"},
        {image:cabinCottages,text:"Cabins and Cottages"},
        {image:petsAllowed,text:"Pets Allowed"},
    ])
    return(
        <div className="container">
            {menu.map((section,i)=>{
               return (<div key={i} className="section">
                    <img src={section.image} alt={section.text} ></img>
                    <p>{section.text}</p>
                </div>
            )})}
        </div>
    )
}

export default AirBnb;