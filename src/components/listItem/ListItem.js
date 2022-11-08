import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { completedTodo } from '../../features/UserInput';
import icons from '../../assets/images/icons-sprite.svg';
import './ListItem.scss';

function ListItem({ description, id, onClick, listClass, descriptionClass }) {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  function checkHandler() {
    setIsActive(() => !isActive);
  }

  return (
    <div className="item">
      <div className={listClass}>
        <input
          onClick={checkHandler}
          type="checkbox"
          className="item__checkbox"
          onChange={() =>
            dispatch(completedTodo({ isCompleted: !isActive, id: id }))
          }
        />
        <svg className="item__icon-check">
          <use className="item__svg" xlinkHref={`${icons}#icon-check`} />
        </svg>
      </div>
      <p className={descriptionClass}>{description}</p>
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
