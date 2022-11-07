import React, { useRef } from 'react';
import icons from '../../assets/images/icons-sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../features/UserInput';

import './UserInput.scss';

function UserInput() {
  const todoListItems = useSelector((state) => state.userInput.value);
  const userInput = useRef();
  const dispatch = useDispatch();
  console.log(todoListItems[0].isCompleted);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      addTodo({
        id:
          todoListItems.length === 0
            ? 0
            : todoListItems[todoListItems.length - 1].id + 1,
        task: userInput.current.value,
      })
    );
    userInput.current.value = '';
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="text"
          placeholder="Create a new todo..."
          ref={userInput}
        />
        <svg className="form__icon">
          <use className="form__svg" xlinkHref={`${icons}#add-note-icon`} />
        </svg>
      </form>
    </div>
  );
}

export default UserInput;
