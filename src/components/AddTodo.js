// src/components/AddTodo.js

// Import necessary functions and modules from React and Redux
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Import action creator from the todoSlice file
import { addTodo } from '../redux/todoSlice';

// Functional component for adding a new todo
const AddTodo = () => {
  // State to manage the input value for the new todo
  const [newTodo, setNewTodo] = useState('');

  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();

  // Handle submitting the new todo by dispatching the addTodo action
  const handleSubmit = () => {
    // Check if the input value is not empty or only contains whitespaces
    if (newTodo.trim() !== '') {
      // Dispatch the addTodo action with a new todo object
      dispatch(addTodo({ id: Date.now(), title: newTodo, completed: false }));
      // Clear the input field after adding the todo
      setNewTodo('');
    }
  };

  // Render the input field and 'Add' button for adding a new todo
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

// Export the AddTodo component to make it available for use in other parts of the application
export default AddTodo;
