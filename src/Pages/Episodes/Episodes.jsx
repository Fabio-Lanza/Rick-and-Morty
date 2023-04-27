import React from "react";
import "./Episodes.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from '../../components/CharacterCard/CharacterCard'

function Episodes() {
  const [options, setOptions] = useState([]);
  const [selectOptions, setSelectOptions] = useState(1);
  const [selectEpisode, setSelectEpisode] = useState('');
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((res) => {
       
        const newOption = [];
        for (let i = 1; i <= res.data.info.count; i++) {
          newOption.push(i);
        }
        setOptions(newOption);
      })
      .catch((error) => console.log(error));
  }, []);


  const handleSelectChange = (e) => {
    setSelectOptions(e.target.value)
  };


  useEffect(()=> {
    const fetchEpisodeData = async () => {
      try {
       const res = await axios.get(`https://rickandmortyapi.com/api/episode/${selectOptions}`)
       setSelectEpisode(res.data)
        console.log(selectEpisode)

       const episodeCharacters = await Promise.all(
        res.data.characters.map(url => {
          return axios.get(url).then(res => res.data)
        })
      )
      setCharacterList(episodeCharacters)

      } catch (error) {
        console.log(error)
      }
    }
    fetchEpisodeData()
  }, [selectOptions])



  return (
    <div className="episodes-container">
      <div>
        <label>Select an episode</label>
        <select onChange={handleSelectChange}>
          {options.map((num, index) => (
            <option 
            key={index}
            value={num}>
              {`Episode ${num}`}
              
              </option>
          ))}
        </select>
      </div>
      <div>
        <div className="episode-info">
            <p>Episode Name: {selectEpisode?.name}</p>
            <p>Air Date: {selectEpisode?.air_date}</p>

        </div>

        <div className="character-container">
         {characterList.map((item)=> <CharacterCard key={item.id} character={item}/>)}
        </div>
      </div>
    </div>
  );
}

export default Episodes;
