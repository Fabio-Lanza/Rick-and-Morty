import React from "react";
import "./Search.css";
import { useState } from "react";
import axios from "axios";

function Search({ setCharacters }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
    .then(res => {
        setCharacters(res.data.results)
        setQuery('')
    })
    .catch(err => {
      if(err.response.status === 404){
        alert(`There is no character named ${query}`)
      }else{
        console.log(err)
      }
    })
  };

  return (
    <form className="search-container" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search all characters"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </form>
  );
}

export default Search;
