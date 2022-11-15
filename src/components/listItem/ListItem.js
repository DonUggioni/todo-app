import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completedTodo, editTodo, removeTodo } from '../../features/UserInput';
import icons from '../../assets/images/icons-sprite.svg';
import './ListItem.scss';

function ListItem({ description, id, listClass, descriptionClass, index }) {
  const todoListItems = useSelector((state) => state.userInput.value);
  const [isActive, setIsActive] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const editInput = useRef(null);

  function checkHandler() {
    setIsActive(() => !isActive);
  }

  function editTodoHandler() {
    setIsEditing(() => !isEditing);
    const currentTodo = todoListItems.map((todo) => todo.task);
    editInput.current.value = currentTodo[index];
  }

  useEffect(() => {
    editInput.current.focus();
  }, [isEditing]);

  function editedTodoHandler(e) {
    e.preventDefault();
    dispatch(editTodo({ task: editInput.current.value, id: id }));
    setIsEditing(false);
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
      <p className={descriptionClass} onClick={editTodoHandler}>
        {description}
      </p>
      <form
        onSubmit={editedTodoHandler}
        className={isEditing ? 'item__edit item__edit--visible' : 'item__edit'}
        onChange={editedTodoHandler}
      >
        <input
          type="text"
          onBlur={editedTodoHandler}
          className="item__edit-input"
          ref={editInput}
        />
      </form>
      <div className="item__icons-container">
        <svg onClick={editTodoHandler} className="item__icon">
          <use className="item__svg" xlinkHref={`${icons}#edit-pen-icon`} />
        </svg>
        <svg
          onClick={() => dispatch(removeTodo({ id: id }))}
          className="item__icon"
        >
          <use className="item__svg" xlinkHref={`${icons}#icon-cross`} />
        </svg>
      </div>
    </div>
  );
}

export default ListItem;
