/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import Header from '../components/header/Header';
import UserInput from '../components/userInput/UserInput';
import ListItem from '../components/listItem/ListItem';
import ListFilters from '../filters/ListFilters';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTodo, clearCompleted } from '../features/UserInput';

import './Layout.scss';

function Layout() {
  const todoListItems = useSelector((state) => state.userInput.value);
  const dispatch = useDispatch();
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const [completed, setCompleted] = useState(false);

  function showAllTodos() {
    setShowAll(true);
    setIsActiveFilter(false);
    setCompleted(false);
  }

  function showActive() {
    setShowAll(false);
    setIsActiveFilter(true);
    setCompleted(false);
  }

  function showCompleted() {
    setShowAll(false);
    setIsActiveFilter(false);
    setCompleted(true);
  }

  function clearCompletedTodos() {
    dispatch(
      clearCompleted({
        isCompleted: todoListItems,
      })
    );
  }

  return (
    <main className="main">
      <Header />
      <UserInput />
      <div className="list__wrapper">
        {showAll &&
          todoListItems.map((item, index) => {
            return (
              <ListItem
                description={item.task}
                key={index}
                onClick={() => dispatch(removeTodo({ id: item.id }))}
                id={item.id}
                listClass={
                  item.isCompleted
                    ? 'item__checkbox-container--active'
                    : 'item__checkbox-container'
                }
                descriptionClass={
                  item.isCompleted
                    ? 'item__description-checked'
                    : 'item__description'
                }
              />
            );
          })}
        {isActiveFilter &&
          todoListItems.map((item, index) => {
            if (item.isCompleted === false) {
              return (
                <ListItem
                  description={item.task}
                  key={index}
                  onClick={() => dispatch(removeTodo({ id: item.id }))}
                  id={item.id}
                  listClass={
                    item.isCompleted
                      ? 'item__checkbox-container--active'
                      : 'item__checkbox-container'
                  }
                  descriptionClass={
                    item.isCompleted
                      ? 'item__description-checked'
                      : 'item__description'
                  }
                />
              );
            }
          })}
        {completed &&
          todoListItems.map((item, index) => {
            if (item.isCompleted) {
              return (
                <ListItem
                  description={item.task}
                  key={index}
                  onClick={() => dispatch(removeTodo({ id: item.id }))}
                  id={item.id}
                  listClass={
                    item.isCompleted
                      ? 'item__checkbox-container--active'
                      : 'item__checkbox-container'
                  }
                  descriptionClass={
                    item.isCompleted
                      ? 'item__description-checked'
                      : 'item__description'
                  }
                />
              );
            }
          })}
        <ListFilters
          onShowActive={showActive}
          onShowAll={showAllTodos}
          onShowCompleted={showCompleted}
          onClearCompleted={clearCompletedTodos}
        />
      </div>
    </main>
  );
}

export default Layout;
