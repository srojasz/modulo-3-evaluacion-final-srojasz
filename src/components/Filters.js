import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {
  function handleSearch(ev) {
    const inputValue = ev.target.value;
    props.handleSearch(inputValue);

  }

  function handleSpecies(ev) {
    const specieSelected = ev.target.value;
    props.handleSpecies(specieSelected);

  }

  return (
    <form
      action=""
      method=""
      className="form-inline mb-5 d-flex justify-content-center align-items-end">
      <label
        className="mb-2" htmlFor="search">
        ¿Qué personaje estás buscando?
      </label>
      <input
        className="form-control ml-2 mt-3 text-left"
        type="text"
        name="search"
        placeholder="Ej.Summer Smith"
        value={props.search}
        onChange={handleSearch}
      />

      <label
        className="mb-2"
        name="species"
        htmlFor="human">
        Humano
      </label>
      <input
        className="form-control ml-2 mt-3 mr-3 text-left"
        name="species"
        type="radio"
        value="Human"
        onChange={handleSpecies}
      />
      <label
        className="mb-2"
        name="species"
        htmlFor="alien">
        Alien
      </label>
      <input
        className="form-control ml-2 mr-2 mt-3 text-left"
        type="radio"
        name="species"
        value="Alien"
        onChange={handleSpecies}
      />
      <label
        className="mb-2"
        name="species"
        htmlFor="all">
        Todos
      </label>
      <input
        className="form-control ml-2 mt-3 text-left"
        type="radio"
        name="species"
        value="All"
        onChange={handleSpecies}
      />
    </form >
  )
}

Filters.propTypes = {
  handleSearch: PropTypes.func
}

export default Filters;