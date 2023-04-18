import React from 'react'
import './CharacterCard.css'

function CharacterCard({ character }) {
// const {image, name} = character;

  return (
    <div className='character-card'>
        <img src={character.image} alt="" />
        <p>{character.name}</p>
        <a>See Details</a>
    </div>
  )
}

export default CharacterCard