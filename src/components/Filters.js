import React from 'react'

const Filters = (props) => {

  function handleSearch(ev) {
    const inputValue = ev.target.value;
    props.handleSearch(inputValue);

  }

  return (
    <form>
      <label htmlFor="search">
        ¿Qué personaje estás buscando?
      </label>
      <input
        type="text"
        placeholder="Ej.Summer Smith"
        onChange={handleSearch}
      />
    </form>
  )
}

export default Filters;