import React, { useEffect, useState } from "react";
import Card from "./components/Card";

//import "./styles.css";

const App = () => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = () => {
    fetch(`https://rickandmortyapi.com/api/character`)
    .then(response => response.json())
    .then((json) => setCharacters(json))
  }

  useEffect(() => {
   fetchCharacters();
}, [])

  return (

    <div>

    <h1 className="heading">Rick and Morty Characters</h1>
   
  

    <Card 
    key={characters.id}  
    name={characters.name}
    status={characters.status}
    species={characters.species}
    gender={characters.gender}
    image={characters.image}
    episodes={characters.episode}
    location={characters.location}
    origin={characters.origin}
  />
  </div>
  )

    
  // )
  // useEffect(() => {
  //     async function getCharacters(){
  //     let response = await fetch(
  //      `https://rickandmortyapi.com/api/character?page=${count}`
  //     );
  //     let data = await response.json();
  //     setAllCharacters(data.results);
  //     setTotalPages(data.info.pages);
  //     }
      
  //   getAllCharacters();
  //   }, [count]);

  //   let next = () => {
  //     setCount((prevCount) => prevCount + 1);
  //   };

  //   let prevCount = () => {
  //     setCount((prevCount) => prevCount - 1);
  //   };


};

    
        
  
/*

let createCard = character => (
     <Card 
      key={character.id}  
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      img={character.imgURL}
      episodes={character.episode}
      location={character.location}
      origin={character.origin}
    />
    );
    
   
// map function?
let App = () => (
    <div>
      <h1 className="heading">Rick and Morty Characters</h1>
      {characters.map(createCard)} 

    </div>
  );
*/

export default App;

