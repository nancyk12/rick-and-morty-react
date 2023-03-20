


// function characters() {
//   const [characters, setCharacter] = useState([]);
// }

// useEffect(() => {
//   async function fetchData() {
//     const res = await fetch(
//       `https://rickandmortyapi.com/api/character`
//     );

//     const json = await res.json();
//    setCharacter(json.results.map(
//       c => {
//         return {
//           'id': c.id,
//           'characterImage': c.image,
//           'name': c.name,
//           'gender': c.gender,
//           'species': c.species,
//           'characterStatus': c.status
//         }

//       }
//    )); 
//   }

//   fetchData();
// }, []);
// return (
//   character.map(character => 
//    <div>
//       <h1 className="heading">Rick and Morty Characters</h1>
//         {characters.map(createCard)} 
//   </div>
//   )
//   )
const characters = [
  {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      episodes: "51",
      location: "Citadel of Ricks",
      origin: "Earth (C-137)",
      imgURL:
      "https://rickandmortyapi.com/api/character/avatar/1.jpeg",  
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      gender: "Male",
      episodes: "51",
      location: "Citadel of Ricks",
      origin: "Unknown",
      imgURL:
      "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    }, 
    {
      id: 3,
      name: "Summer Smith",
      status: "Alive",
      species: "Human",
      gender: "Female",
      episodes: "42",
      location: "Earth (Replacement Dimension)",
      origin: "Earth (Replacement Dimension)",
      imgURL:
      "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    }
  ];

  export default characters
