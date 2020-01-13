import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const CharacterCard = (props) => {

  const { id, img, name, specie } = props;
  const route = `/character/${id}`
  return (
    <div>
      <img
        className="img-fluid mt-3 mb-3"
        src={img}
        alt={`Imagen del personaje ${name}`} />
      <h5 className="card-title" >{name}</h5>
      <p>{specie === "Human" ? "Especie 👤" : "Especie: 👽"}</p>

      <Link to={route}>
        <button>Más info</button>
      </Link>
    </div>

  )
}
CharacterCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  specie: PropTypes.string



}

export default CharacterCard;