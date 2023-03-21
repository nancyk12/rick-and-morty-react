import Avatar from "./Avatar";
//import Detail from "./Detail";
import React from "react"
import './Card.css'

const Card =({characters}) => {
   

       const theBlock = characters.map(card=>{
        return (
            //<div className="card col" width='50 px' height='50px'>
               // <img src={card.image} className="card-img-top" alt="..." height='50 px' width='50 px'/>
                
                <div className="card">
                    <div className="inner-card">
                  <div className="top">
                   <h2 className="name">{card.name}</h2>
                    <Avatar image={card.image} />
                </div>
                    <div className="bottom">
                    <p className="info">Status: {card.status}</p>
                    <p className="info">Species: {card.species}</p>
                    <p className="info">Gender: {card.gender}</p>
                </div> 
                <div className="back">
                 <div className="top">
                   <h4 className="name">{card.name}</h4>
                    <Avatar image={card.image} />
                    </div>
                    <div className="bottom">
                    <p className="info">Number of Episodes: {card.episodes}</p>
                    <p className="info">Location: {card.location}</p>
                    <p className="info">Origin: {card.origin}</p>
                </div>   
                </div> 
            </div>
        //</div>
       )})
        
    return <div>{theBlock}</div>
}

export default Card;