import React from 'react'

const Character = (props) => {
  const { img, name, specie } = props;
  return (
    <div>
      <img
        src={img}
        alt={`Imagen del personaje ${name}`} />
      <h2>{name}</h2>
      <p>{`Especie: ${specie}`}</p>
    </div>
  )
}

export default Character;