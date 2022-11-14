import { createSlice } from '@reduxjs/toolkit';

function updateLocalStorage(data) {
  localStorage.setItem('todo', JSON.stringify(data.value.map((todo) => todo)));
}

const initialState =
  localStorage.getItem('todo') !== null
    ? JSON.parse(localStorage.getItem('todo'))
    : [];

export const listDataSlice = createSlice({
  name: 'userInput',
  initialState: { value: initialState },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
      updateLocalStorage(state);
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter((task) => task.id !== action.payload.id);
      updateLocalStorage(state);
    },
    completedTodo: (state, action) => {
      const toggleCompleted = state.value.find(
        (todo) => todo.id === action.payload.id
      );
      toggleCompleted.isCompleted = action.payload.isCompleted;
      updateLocalStorage(state);
    },
    editTodo: (state, action) => {
      const editedTodo = state.value.find(
        (todo) => todo.id === action.payload.id
      );
      editedTodo.task = action.payload.task;
      updateLocalStorage(state);
    },
    clearCompleted: (state) => {
      state.value = state.value.filter((todo) => todo.isCompleted !== true);
      updateLocalStorage(state);
    },
    updateListOrder: (state, action) => {
      state.value = action.payload;
      updateLocalStorage(state);
    },
  },
});

export const {
  addTodo,
  removeTodo,
  completedTodo,
  clearCompleted,
  editTodo,
  updateListOrder,
} = listDataSlice.actions;
export default listDataSlice.reducer;
