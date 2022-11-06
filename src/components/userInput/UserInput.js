import React from 'react';
import icons from '../../assets/images/icons-sprite.svg';

import './UserInput.scss';

function UserInput() {
  return (
    <div>
      <form className="form">
        <input
          className="form__input"
          type="text"
          placeholder="Create a new todo..."
        />
        <svg class="form__icon">
          <use className="form__svg" xlinkHref={`${icons}#add-note-icon`} />
        </svg>
      </form>
    </div>
  );
}

export default UserInput;
