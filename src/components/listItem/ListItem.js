import React, { useState } from 'react';
import icons from '../../assets/images/icons-sprite.svg';
import './ListItem.scss';

function ListItem(props) {
  const [isActive, setIsActive] = useState(false);

  function checkHandler() {
    setIsActive(() => !isActive);
  }

  const checkboxClasses = isActive
    ? 'item__checkbox-container--active'
    : 'item__checkbox-container';

  const descriptionClasses = isActive
    ? 'item__description-checked'
    : 'item__description';

  return (
    <div className="item">
      <div className={checkboxClasses}>
        <input
          onClick={checkHandler}
          type="checkbox"
          className="item__checkbox"
        />
        <svg className="item__icon-check">
          <use className="item__svg" xlinkHref={`${icons}#icon-check`} />
        </svg>
      </div>
      <p className={descriptionClasses}>{props.description}</p>
      <div className="item__icons-container">
        <svg className="item__icon">
          <use className="item__svg" xlinkHref={`${icons}#edit-pen-icon`} />
        </svg>
        <svg onClick={props.onRemoveTodo} className="item__icon">
          <use className="item__svg" xlinkHref={`${icons}#icon-cross`} />
        </svg>
      </div>
    </div>
  );
}

export default ListItem;
