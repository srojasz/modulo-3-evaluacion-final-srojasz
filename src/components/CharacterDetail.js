import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {

  const { image, name, species, episode, location, status } = props.character;

  return (
    <div>
      <img
        src={image}
        alt={`Imagen del personaje ${name}`} />
      <Link to="/">
        <button>Volver al listado</button>
      </Link>
      <h2>{name}</h2>
      <p>{status === "Alive" ? "Estado 💓 " : "Estado 💔"}</p>
      <p>{species === "Human" ? "Especie 👤" : "Especie: 👽"}</p>
      <p>{`Planeta: ${location.name}`}</p>
      <p>{`Capítulos: ${episode.length}`}</p>

    </div>
  )
}

CharacterDetail.propTypes = {

  characters: PropTypes.object

}
export default CharacterDetail;