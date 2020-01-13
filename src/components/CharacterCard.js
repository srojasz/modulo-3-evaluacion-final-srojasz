import React from 'react'
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  const { id, img, name, specie } = props;
  const route = `/character/${id}`
  return (
    <Link to={route}>
      <div>
        <img
          src={img}
          alt={`Imagen del personaje ${name}`} />
        <h2>{name}</h2>
        <p>{`Especie: ${specie}`}</p>
        <p>{specie === "Human" ? "Especie 👤" : "Especie: 👽"}</p>

      </div>
    </Link>
  )
}

export default CharacterCard;