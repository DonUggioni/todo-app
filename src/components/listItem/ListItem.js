import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { completedTodo } from '../../features/UserInput';
import icons from '../../assets/images/icons-sprite.svg';
import './ListItem.scss';

function ListItem({ description, id, onClick }) {
  const [isActive, setIsActive] = useState(false);
  // const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  function checkHandler() {
    setIsActive(() => !isActive);
  }
  console.log(id, isActive);

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
          onChange={() =>
            dispatch(completedTodo({ isCompleted: isActive, id: id }))
          }
        />
        <svg className="item__icon-check">
          <use className="item__svg" xlinkHref={`${icons}#icon-check`} />
        </svg>
      </div>
      <p className={descriptionClasses}>{description}</p>
      <div className="item__icons-container">
        <svg className="item__icon">
          <use className="item__svg" xlinkHref={`${icons}#edit-pen-icon`} />
        </svg>
        <svg onClick={onClick} className="item__icon">
          <use className="item__svg" xlinkHref={`${icons}#icon-cross`} />
        </svg>
      </div>
    </div>
  );
}

export default ListItem;
