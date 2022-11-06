import React, { useState } from 'react';
import moonIcon from '../../assets/images/icon-moon.svg';
import sunIcon from '../../assets/images/icon-sun.svg';

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <h1 className="header__heading">todo</h1>
      <div className="header__icon-container">
        <img
          className="header__icon"
          src={moonIcon}
          alt="Theme switch button"
        />
      </div>
    </div>
  );
}

export default Header;
