import React from "react";
import "./CharacterDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CharacterDetails() {
  const { characterId } = useParams();
  const [character, setCharacter] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((res) => {
        setCharacter(res.data);
        console.log(res.data);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="details-container">
      <img src={character?.image} alt="" />
      <div className="container-info">
        <p>Name:{character?.name}</p>
        <p>Gender:{character?.gender}</p>
        <p>Location:{character?.location?.name}</p>
        <p>Species:{character?.species}</p>
      </div>
    </div>
  );
}

export default CharacterDetails;
