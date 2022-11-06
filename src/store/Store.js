import { configureStore } from '@reduxjs/toolkit';

import userInputReducer from '../features/UserInput';
import removeTodoReducer from '../features/UserInput';

export const store = configureStore({
  reducer: {
    userInput: userInputReducer,
    removeTodoReducer,
  },
});
