import React from 'react';
import Header from '../components/header/Header';
import UserInput from '../components/userInput/UserInput';
import ListItem from '../components/listItem/ListItem';

import './Layout.scss';
import ListFilters from '../filters/ListFilters';

const DUMMY_DATA = ['Do laundry', 'Take a nap', 'Do stuff'];

function Layout() {
  return (
    <main className="main">
      <Header />
      <UserInput />
      <div className="list__wrapper">
        {DUMMY_DATA.map((item) => {
          return <ListItem description={item} />;
        })}
        <ListFilters />
      </div>
    </main>
  );
}

export default Layout;
