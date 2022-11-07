import { createSlice } from '@reduxjs/toolkit';

const DUMMY_DATA = [
  {
    id: 0,
    task: 'Do laundry',
    isCompleted: false,
  },
  {
    id: 1,
    task: 'Take a nap',
    isCompleted: false,
  },
  {
    id: 2,
    task: 'Do stuff',
    isCompleted: false,
  },
];

export const listDataSlice = createSlice({
  name: 'userInput',
  initialState: { value: DUMMY_DATA },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter((task) => task.id !== action.payload.id);
    },
    completedTodo: (state, action) => {
      const toggleCompleted = state.value.find(
        (todo) => todo.id === action.payload.id
      );
      toggleCompleted.isCompleted = action.payload.isCompleted;
    },
  },
});

export const { addTodo, removeTodo, completedTodo } = listDataSlice.actions;
export default listDataSlice.reducer;
