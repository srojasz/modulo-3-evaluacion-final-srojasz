import React from 'react'
import CharacterItem from "./CharacterItem";

function CharactersList(props) {

  console.log(props);
  return <ul>
    {props.characters.map((character, key) =>
      <li key={character.id}>
        <CharacterItem
          img={character.image}
          name={character.name}
          specie={character.species} />

      </li>)}
  </ul>
}


export default CharactersList;