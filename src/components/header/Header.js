import React, { useEffect, useState } from 'react';
import moonIcon from '../../assets/images/icon-moon.svg';
import sunIcon from '../../assets/images/icon-sun.svg';

import '../../sass/_dark-theme.scss';
import './Header.scss';

function Header() {
  const [darkTheme, setDarkTheme] = useState(false);

  const bodyTag = document.querySelector('body');
  bodyTag.className = darkTheme ? 'dark' : '';

  function themeHandler() {
    setDarkTheme(() => !darkTheme);
    localStorage.setItem('theme', !darkTheme);
  }

  useEffect(() => {
    const preferedTheme = JSON.parse(localStorage.getItem('theme'));
    setDarkTheme(preferedTheme);
  }, []);

  return (
    <div className="header">
      <h1 className="header__heading">todo</h1>
      <div onClick={themeHandler} className="header__icon-container">
        <img
          className="header__icon"
          src={darkTheme ? sunIcon : moonIcon}
          alt="Theme switch button"
        />
      </div>
    </div>
  );
}

export default Header;
