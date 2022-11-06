import { createSlice } from '@reduxjs/toolkit';

const DUMMY_DATA = [
  {
    id: 0,
    task: 'Do laundry',
  },
  {
    id: 1,
    task: 'Take a nap',
  },
  {
    id: 2,
    task: 'Do stuff',
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
      state.value.filter((item) => state.value !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = listDataSlice.actions;
export default listDataSlice.reducer;
