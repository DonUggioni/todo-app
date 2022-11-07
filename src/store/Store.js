import { configureStore } from '@reduxjs/toolkit';

import userInputReducer from '../features/UserInput';
import removeTodoReducer from '../features/UserInput';
import completedTodoReducer from '../features/UserInput';

export const store = configureStore({
  reducer: {
    userInput: userInputReducer,
    removeTodoReducer,
    completedTodo: completedTodoReducer,
  },
});
