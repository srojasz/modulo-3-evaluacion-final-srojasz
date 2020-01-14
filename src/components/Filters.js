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

  function handleSubmit(ev) {
    ev.preventDefault();
  }

  return (
    <form
      action=""
      method=""
      className="form-inline mb-5 flex-column d-flex justify-content-center align-items-center text-white"
      onSubmit={handleSubmit}
    >
      <label
        className="mb-2" htmlFor="search">
        ¿Qué personaje estás buscando?
      </label>
      <input
        className="form-control ml-2 mt-4 pt-3 text-left"
        type="text"
        name="search"
        placeholder="Ej.Summer Smith"
        value={props.search}
        onChange={handleSearch}
      />
      <div className="d-flex align-items-center mt-5 text-dark bg-light rounded-pill px-3">
        <label
          className="mb-2"
          name="species"
          htmlFor="human">
          Humano
      </label>
        <input
          className="form-control input-radio ml-2 mt-3 mr-3 text-left"
          id="human"
          name="species"
          type="radio"
          value="Human"
          checked={props.specieSelected === "Human"}
          onChange={handleSpecies}
        />
        <label
          className="mb-2"
          name="species"
          htmlFor="alien">
          Alien
      </label>
        <input
          className="form-control input-radio ml-2 mr-2 mt-3 text-left"
          type="radio"
          id="alien"
          checked={props.specieSelected === "Alien"}
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
          className="input-radio form-control ml-2 mt-3 text-left"
          id="all"
          type="radio"
          name="species"
          checked={props.specieSelected === "All"}
          value="All"
          onChange={handleSpecies}
        />
      </div>
    </form >
  )
}

Filters.propTypes = {
  handleSearch: PropTypes.func
}

export default Filters;