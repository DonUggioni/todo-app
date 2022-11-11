import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completedTodo } from '../../features/UserInput';
import icons from '../../assets/images/icons-sprite.svg';
import './ListItem.scss';

function ListItem({
  description,
  id,
  onClick,
  listClass,
  descriptionClass,
  index,
}) {
  const [isActive, setIsActive] = useState(false);
  const [editedTodo, setEditedTodo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const todoListItems = useSelector((state) => state.userInput.value);
  const editInput = useRef(null);
  const editingClasses = isEditing
    ? 'item__edit item__edit--visible'
    : 'item__edit';

  function checkHandler() {
    setIsActive(() => !isActive);
  }

  function editTodoHandler() {
    setIsEditing(() => !isEditing);
    const currentTodo = todoListItems.map((todo) => todo.task);
    console.log(currentTodo[index]);
    editInput.current.value = currentTodo[index];
    editInput.current.focus();
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
      <form className={editingClasses}>
        <input ref={editInput} type="text" className="item__edit-input" />
      </form>
      <div className="item__icons-container">
        <svg onClick={editTodoHandler} className="item__icon">
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
