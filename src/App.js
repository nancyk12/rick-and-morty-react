import React, { useEffect, useState } from "react";
import Card from "./Card";
//import "./styles.css";

const App = () => {
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
      async function getAllCharacters(){
      let response = await fetch(
       `https://rickandmortyapi.com/api/character?page=${count}`
      );
      let data = await response.json();
      setAllCharacters(data.results);
      setTotalPages(data.info.pages);
      }
      
    getAllCharacters();
    }, [count]);

    let next = () => {
      setCount((prevCount) => prevCount + 1);
    };

    let prevCount = () => {
      setCount((prevCount) => prevCount - 1);
    };

    return (
      <div>
        <h1 className="heading">Rick and Morty Characters</h1>
        <h2 className="page-count">Characters: Page {count} of {totalPages}</h2>
      
</div>
       
         <Card 
            key={character.id}  
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
            episodes={character.episode}
            location={character.location}
            origin={character.origin}
          />
          
  );
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

