// src/redux/todoSlice.js

// Import necessary functions and modules from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Create a Redux slice named 'todos' using createSlice function
const todoSlice = createSlice({
  // Name of the slice, used as a prefix for generated action types
  name: 'todos',
  
  // Initial state of the slice
  initialState: [],

  // Reducers define how the state should be updated in response to actions
  reducers: {
    // Reducer for adding a new todo to the state
    addTodo: (state, action) => {
      // Modify the state by pushing the new todo object from the action payload
      state.push(action.payload);
    },

    // Reducer for deleting a todo from the state
    deleteTodo: (state, action) => {
      // Filter the state to exclude the todo with the specified ID from the action payload
      return state.filter((todo) => todo.id !== action.payload);
    },

    // Reducer for editing a todo in the state
    editTodo: (state, action) => {
      // Find the index of the todo with the specified ID in the state
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      // Update the state by replacing the todo at the found index with the new todo from the action payload
      state[index] = action.payload;
    },

    // Reducer for marking a todo as completed in the state
    completeTodo: (state, action) => {
      // Find the index of the todo with the specified ID in the state
      const index = state.findIndex((todo) => todo.id === action.payload);
      // Update the 'completed' property of the todo at the found index to true
      state[index].completed = true;
    },
  },
});

// Export the action creators and the reducer from the todoSlice
export const { addTodo, deleteTodo, editTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
