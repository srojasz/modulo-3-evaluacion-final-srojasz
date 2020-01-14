import React from 'react'
import CharacterCard from "./CharacterCard";
import PropTypes from 'prop-types';
import noresults from "../images/noresults.jpg";

function CharactersList(props) {

  if (props.characters.length === 0) {
    return (
      <section className="d-flex flex-column justify-content-center align-items-center">
      <h4 className="text-center mb-1 text-white">¡Oh, no! No hemos encontrado resultados
      </h4>
      <h5 className="mb-5 text-white">¿Por qué no lo intentas otra vez?</h5>
      <img className="img-fluid w-75 mb-5"
      src={noresults} alt="Imagen de los protagonistas de Rick and Morty asustados" />
      
      </section>
    )

  } else {

    return <ul className="col-center row justify-content-center">
      {props.characters.map((character) =>
        <li
          className="card  
          bg-info m-2 col-6 col-sm-3 col-md-3 col-lg-2
            border-secondary pb-3
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