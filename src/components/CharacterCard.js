import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const CharacterCard = (props) => {
  console.log(props);
  const { id, img, name, specie } = props;
  const route = `/character/${id}`
  return (
    <Link to={route}>
      <div>
        <img
          src={img}
          alt={`Imagen del personaje ${name}`} />
        <h2>{name}</h2>
        <p>{specie === "Human" ? "Especie 👤" : "Especie: 👽"}</p>

      </div>
    </Link>
  )
}
CharacterCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  specie: PropTypes.string



}

export default CharacterCard;