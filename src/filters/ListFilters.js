import React from 'react';
import { useSelector } from 'react-redux';

import './ListFilters.scss';

function ListFilters({
  onShowAll,
  onShowActive,
  onShowCompleted,
  onClearCompleted,
}) {
  const itemsLeft = useSelector((state) =>
    state.userInput.value.filter((todo) => todo.isCompleted !== true)
  );

  return (
    <div className="filter">
      <p className="filter__items-left">{itemsLeft.length} items left</p>
      <div className="filter__buttons-container">
        <button className="button" onClick={onShowAll}>
          All
        </button>
        <button className="button" onClick={onShowActive}>
          Active
        </button>
        <button className="button" onClick={onShowCompleted}>
          Completed
        </button>
      </div>
      <button className="filter__button-clear" onClick={onClearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}

export default ListFilters;
