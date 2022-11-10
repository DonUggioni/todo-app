import React from 'react';
import { useSelector } from 'react-redux';

import './ListFilters.scss';

function ListFilters({
  onShowAll,
  onShowActive,
  onShowCompleted,
  onClearCompleted,
  classNameAll,
  classNameActive,
  classNameCompleted,
}) {
  const itemsLeft = useSelector((state) =>
    state.userInput.value.filter((todo) => todo.isCompleted !== true)
  );

  return (
    <div className="filter">
      <p className="filter__items-left">{itemsLeft.length} items left</p>
      <div className="filter__buttons-container">
        <button className={classNameAll} onClick={onShowAll}>
          All
        </button>
        <button className={classNameActive} onClick={onShowActive}>
          Active
        </button>
        <button className={classNameCompleted} onClick={onShowCompleted}>
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
