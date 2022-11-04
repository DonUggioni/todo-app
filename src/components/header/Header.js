import React, { useState } from 'react';
import moonIcon from '../../assets/images/icon-moon.svg';
import sunIcon from '../../assets/images/icon-sun.svg';

import './Header.scss';

function Header() {
  const [isActive, setIsActive] = useState(false);

  function themeHandler() {
    setIsActive(() => !isActive);
  }
  return (
    <div className="header">
      <h1 className="header__heading">todo</h1>
      <div className="header__icon-container" onClick={themeHandler}>
        <img
          className="header__icon"
          src={isActive ? sunIcon : moonIcon}
          alt="Theme switch button"
        />
      </div>
    </div>
  );
}

export default Header;
