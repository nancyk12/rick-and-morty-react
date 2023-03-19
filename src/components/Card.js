import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

// Card needs to include
// img
// name
// gender
// species
// status 
 

let Card = props => (
<div className="card">
<div className="top">
  <h2 className="name">{props.name}</h2>
  <Avatar img={props.img} />
</div>
<div className="bottom">
  <Detail detailInfo={props.status} />       
  <Detail detailInfo={props.species}/>
  <Detail detailInfo={props.gender}/>
</div>
</div>
    )


export default Card