import React from "react";
import Card from "./Card";
import contacts from "../characters";

// for arrow functions etc. look at react-tutorial1, Table.js, line 38
// Key function?
let createCard = character => (
     <Card 
      key={character.id}  
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      img={character.imgURL}
    />
    );
   
// map function?
let App = () => (
    <div>
      <h1 className="heading">Rick and Morty Characters</h1>
      {characters.map(createCard)} 

      {/*<Card 
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
        />
      <Card 
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
        />
      <Card 
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
        /> */}
    </div>
  );


export default App;

