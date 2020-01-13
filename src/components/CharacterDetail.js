import React from 'react'
import { Link } from "react-router-dom";
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
      <p>{`Estado: ${status}`}</p>
      <p>{`Especie: ${species}`}</p>
      <p>{`Planeta: ${location.name}`}</p>
      <p>{`Capítulos: ${episode.length}`}</p>

    </div>
  )
}

export default CharacterDetail;