import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
//import NewCard from "./components/NewCard";




function App() {
  const [cardList, setCardList] = React.useState([])

  async function getAPI() {
    await fetch(`https://rickandmortyapi.com/api/character/`)
      .then(response => response.json())
      .then(data => setCardList(data.results));
  }

  React.useEffect(() => {
    getAPI();

  }, []);
 

console.log(cardList)
  return (
    <div className="container-sm text-center row row-cols-4">
      <Header />
      <Card characters ={cardList}/>
  {/* <NewCard characters={cardList}/>*/}
    </div>
  );
}

export default App;