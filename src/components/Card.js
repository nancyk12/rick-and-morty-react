import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
//import "./styles.css";
import Avatar from "./Avatar";



/*
function Card(props){
    //State hook 
    const [characters, setCharacter] = useState([]);

    useEffect(() => {

        //Fetching data from API

        async function fetchData() {
            // Call fetch as usual
            const res = await fetch(
                `https://rickandmortyapi.com/api/character?page=${props.page}`
            );

            // Pull out the data as usual
            const json = await res.json();

            //creating an object with API data
            setCharacter(json.results.map(
                c => { 
                    return{
                        'id': c.id,
                        'characterImage': c.image,
                        'name': c.name, 
                        'gender': c.gender, 
                        'species': c.species,
                        'characterStatus': c.status,
                        'episodesFeatured': c.episode.length,
                        'location': c.location.name,
                        'origin': c.origin.name

                         
                    }

                }

            ));
        }   

        fetchData();
    });

    return (
        characters.map(character =>(
 
          */
let Card = props => (
<div className="card">
  <div className="inner-card">
   <div className="front">
    <div className="top">
      <h4 className="name">{props.name}</h4>
      <Avatar img={props.img} />
    </div>
    <div className="bottom">
      <p className="info">Gender: {props.gender}</p>
      <p className="info">Species: {props.species}</p>
      <p className="info">Status: {props.status}</p>
   </div>   
  </div>

  <div className="back">
    <div className="top">
      <h4 className="name">{props.name}</h4>
      <Avatar img={props.img} />
    </div>
    <div className="bottom">
      <p className="info">Number of Episodes: {props.episodes}</p>
      <p className="info">Location: {props.location}</p>
      <p className="info">Origin: {props.origin}</p>
   </div>   
  </div>

 </div>
</div>
    ) /*
        )
    );
        }
*/
export default Card