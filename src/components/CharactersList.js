import React from 'react'
import CharacterCard from "./CharacterCard";

function CharactersList(props) {

  if (props.characters.length === 0) {
    return (
      <p>Lo siento, no hemos encontrado resultados</p>
    )

  } else {

    return <ul>
      {props.characters.map((character) =>
        <li key={character.id}>
          <CharacterCard
            img={character.image}
            name={character.name}
            specie={character.species} />
        </li>
      )}
    </ul>
  }
}
export default CharactersList;