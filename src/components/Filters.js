import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {
  console.log(props);

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

Filters.propTypes = {
  handleSearch: PropTypes.func
}

export default Filters;