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

    <div className="d-flex justify-content-center rounded bg-info align-items-center text-white col-12">

      <img
        className="img-fluid ard-img-top w-25 m-3 col-4 col-md-5 col-lg-3"
        src={image}
        alt={`Imagen del personaje ${name}`} />

      <aside className="card-body d-flex flex-column ustify-content-end text-left info">
        <h5 className="card-title" >{name}</h5>

        <p>Estado:
        <i className={`text-danger fa ${speciesClass()}`}></i>
        </p>
        <p>
          {species === "Human"
            ? <p>Especie: <i className="fas fa-user "></i></p>
            : <p>Especie: 👽 </p>
          }
        </p>
        <p className="line-height">{`Planeta: ${location.name}`}</p>
        <p>{`Capítulos: ${episode.length}`}</p>
      </aside>
      <Link title="Vuelve al listado" className="rounded align-self-start justify-content-start m-1 p-3 badge badge-info" to="/"><i className="fas fa-arrow-circle-left"></i>
      </Link>
    </div>

  )
}

CharacterDetail.propTypes = {

  characters: PropTypes.object

}
export default CharacterDetail;