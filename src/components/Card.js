import React from "react";
import Avatar from "./Avatar";
//import Detail from "./Detail";

// Card needs to include
// img
// name
// gender
// species
// status 
 

let Card = props => (
<div className="card">
<div className="top">
  <h4 className="name">{props.name}</h4>
  <Avatar img={props.img} />
</div>
<div className="bottom">
    <p className="info">Gender: {props.gender}</p>
    <p className="info">Species: {props.species}</p>
    <p className="info">Status: {props.status}</p>
  {/*<Detail detailInfo={props.status} />       
  <Detail detailInfo={props.species}/>
  <Detail detailInfo={props.gender}/>*/}
</div>
</div>
    )


export default Card