/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import Header from '../components/header/Header';
import UserInput from '../components/userInput/UserInput';
import ListItem from '../components/listItem/ListItem';
import ListFilters from '../filters/ListFilters';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  removeTodo,
  clearCompleted,
  updateListOrder,
} from '../features/UserInput';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';

import './Layout.scss';

function Layout() {
  const todoListItems = useSelector((state) => state.userInput.value);
  const dispatch = useDispatch();
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const [completed, setCompleted] = useState(false);

  function handleListUpdate(result) {
    if (!result.destination) return;
    const list = Array.from(todoListItems);
    const [reorderedListArr] = list.splice(result.source.index, 1);
    list.splice(result.destination.index, 0, reorderedListArr);
    dispatch(updateListOrder(list));
  }

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

  function setBtnActiveClass(state) {
    if (state) return 'button active';
    else return 'button';
  }

  return (
    <main className="main">
      <Header />
      <UserInput />
      <DragDropContext onDragEnd={handleListUpdate}>
        <Droppable droppableId="todos-list">
          {(provided) => (
            <div
              className="list__wrapper"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {showAll &&
                todoListItems.map((item, index) => {
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <ListItem
                            description={item.task}
                            onClick={() =>
                              dispatch(removeTodo({ id: item.id }))
                            }
                            id={item.id}
                            index={index}
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
                        </div>
                      )}
                    </Draggable>
                  );
                })}
              {provided.placeholder}

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
                classNameAll={setBtnActiveClass(showAll)}
                classNameActive={setBtnActiveClass(isActiveFilter)}
                classNameCompleted={setBtnActiveClass(completed)}
              />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </main>
  );
}

export default Layout;
