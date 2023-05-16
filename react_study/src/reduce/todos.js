import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action) => {
      const { payload } = action;
      state.todos = payload;
    },
    createTodo: (state, action) => {
      const { payload } = action;
      state.todos = [...state.todos, payload];
    },
    deleteTodo: (state, action) => {
      const { payload } = action;
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
    deleteSelectedTodos: (state, action) => {
      const { payload } = action;
      state.todos = state.todos.filter(todo => !payload.includes(todo.id));
    },
  },
});

export const { setTodos, createTodo, deleteTodo, deleteSelectedTodos } = todoSlice.actions;
export default todoSlice.reducer;
