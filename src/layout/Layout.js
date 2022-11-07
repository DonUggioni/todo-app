import React from 'react';
import Header from '../components/header/Header';
import UserInput from '../components/userInput/UserInput';
import ListItem from '../components/listItem/ListItem';
import ListFilters from '../filters/ListFilters';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/UserInput';

import './Layout.scss';

function Layout() {
  const todoListItems = useSelector((state) => state.userInput.value);
  const dispatch = useDispatch();

  return (
    <main className="main">
      <Header />
      <UserInput />
      <div className="list__wrapper">
        {todoListItems.map((item, index) => {
          return (
            <ListItem
              description={item.task}
              key={index}
              onClick={() => dispatch(removeTodo({ id: item.id }))}
              id={item.id}
            />
          );
        })}
        <ListFilters />
      </div>
    </main>
  );
}

export default Layout;
