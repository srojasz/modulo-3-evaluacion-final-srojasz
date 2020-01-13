import React from 'react'

const CharacterDetail = (props) => {
  const { img, name, specie } = props.character;
  console.log(props);
  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

export default CharacterDetail;