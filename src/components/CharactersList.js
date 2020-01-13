import React from 'react'
import CharacterCard from "./CharacterCard";

function CharactersList(props) {
  return <ul>
    {props.characters.map((character, key) =>
      <li key={character.id}>
        <CharacterCard
          img={character.image}
          name={character.name}
          specie={character.species} />
      </li>
    )}
  </ul>
}

export default CharactersList;