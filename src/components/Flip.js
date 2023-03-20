import React from "react";
import Avatar from "./Avatar";
//import Detail from "./Detail";

// Card needs to include
// img
// name
// gender
// species
// status 

// Flip
// Number of Episodes: 51
// Location: Citadel of Ricks
// Origin: Earth (C-137)
 

let Card = props => (
<div className="card">
<div className="top">
  <h3 className="name">{props.name}</h3>
  <Avatar img={props.img} />
</div>
<div className="bottom">
    <p className="info">Number of Episodes: {props.episodes}</p>
    <p className="info">Location: {props.location}</p>
    <p className="info">Origin: {props.origin}</p>
  {/*<Detail detailInfo={props.status} />       
  <Detail detailInfo={props.species}/>
<Detail detailInfo={props.gender}/> */}
</div>
</div>
    )


export default Flip