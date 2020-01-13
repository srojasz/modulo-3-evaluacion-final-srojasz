import React from 'react'
import CharacterCard from "./CharacterCard";
import PropTypes from 'prop-types';

function CharactersList(props) {

  if (props.characters.length === 0) {
    return (
      <p>Lo siento, no hemos encontrado resultados</p>
    )

  } else {

    return <ul className="d-flex justify-content-center row cols-3 ">
      {props.characters.map((character) =>
        <li
          className="card 
          bg-info m-2
          col-4 col-sm-3 col-lg-2  border-secondary pb-3
          text-center"
          key={character.id}>
          <CharacterCard
            img={character.image}
            name={character.name}
            specie={character.species}
            id={character.id}
          />

        </li>
      )
      }
    </ul >
  }
}

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object)
}

export default CharactersList;