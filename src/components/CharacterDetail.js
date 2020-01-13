import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {

  const { image, name, species, episode, location, status } = props.character;

  const speciesClass = () => {

    if (status === "Alive") {

      return "fa-heart"

    } else if (status === "Dead") {
      return "fas fa-male"
    } else {
      return "fa-question-circle"
    }


  }
  return (
    <div>
      <img
        src={image}
        alt={`Imagen del personaje ${name}`} />
      <Link to="/">
        <button>Volver al listado</button>
      </Link>
      <h2 >{name}</h2>

      <p>Estado:
        <i className={`fa ${speciesClass()}`}></i>
      </p>

      <p>
        {species === "Human"
          ? <p>Especie: <i class="fas fa-user"></i></p>
          : <p>Especie: 👽 </p>
        }
      </p>
      <p>{`Planeta: ${location.name}`}</p>
      <p>{`Capítulos: ${episode.length}`}</p>
      <p>


      </p>

    </div>
  )
}

CharacterDetail.propTypes = {

  characters: PropTypes.object

}
export default CharacterDetail;