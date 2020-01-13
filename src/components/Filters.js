import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {
  console.log(props);

  function handleSearch(ev) {
    const inputValue = ev.target.value;
    props.handleSearch(inputValue);

  }

  return (
    <form className="form-inline mb-5 d-flex justify-content-center">
      <label
        className="" htmlFor="search">
        ¿Qué personaje estás buscando?
      </label>
      <input
        className="form-control ml-2 text-left"
        type="text"
        placeholder="Ej.Summer Smith"
        onChange={handleSearch}
      />
    </form >
  )
}

Filters.propTypes = {
  handleSearch: PropTypes.func
}

export default Filters;