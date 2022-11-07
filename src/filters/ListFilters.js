import React from 'react';

import './ListFilters.scss';

function ListFilters(props) {
  return (
    <div className="filter">
      <p className="filter__items-left">5 items left</p>
      <div className="filter__buttons-container">
        <button className="button">All</button>
        <button className="button" onClick={props.onActiveFilter}>
          Active
        </button>
        <button className="button">Completed</button>
      </div>
      <button className="filter__button-clear">Clear Completed</button>
    </div>
  );
}

export default ListFilters;
