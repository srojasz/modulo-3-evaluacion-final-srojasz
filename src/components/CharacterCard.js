import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const CharacterCard = (props) => {

  const { id, img, name, specie } = props;
  const route = `/character/${id}`


  return (
    <React.Fragment>
      <img
        className="img-fluid mt-3 mb-3"
        src={img}
        alt={`Imagen del personaje ${name}`} />
      <h5 className="card-title text-white font-weight-bold" >{name}</h5>
      <p className="text-white">
        {specie === "Human"
          ? <p>Humano <i className="fas fa-user"></i></p>
          : <p>Alien 👽 </p>
        }
      </p>



      <Link to={route}>
        <button
          className="btn btn-light btn-outline-secondary"
          title="Pincha para conocer más información">
          Más info
          </button>
      </Link>
    </React.Fragment>

  )
}
CharacterCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  specie: PropTypes.string



}

export default CharacterCard;