// src/redux/store.js

// Import the necessary functions and modules from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import the todoReducer from the todoSlice file
import todoReducer from './todoSlice';

// Configure the Redux store using configureStore function
const store = configureStore({
  // Define the initial state and action handlers for the store
  reducer: {
    // Use the todoReducer to handle actions related to the 'todos' slice of the state
    todos: todoReducer,
  },
});

// Export the configured store to make it available to other parts of the application
export default store;
