import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import CharacterCard from "../../components/CharacterCard/CharacterCard";

//https://rickandmortyapi.com/api/character

function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    
    axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
      setCharacters(res.data.results)
      console.log(characters);
    })

     .catch(error => console.log(error))
  }, []);

  return (
    <div className="home-container">
      <h1>Main Characters</h1>
      <div className="characters-container">
      {characters.map((item)=> <CharacterCard key={item.id} character={item}/>)}
      </div>
    </div>
  );
}

export default Home;
