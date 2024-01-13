// src/components/TodoList.js

// Import necessary functions and modules from React and Redux
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import action creators from the todoSlice file
import { deleteTodo, editTodo, completeTodo } from '../redux/todoSlice';

// Functional component for displaying the list of todos
const TodoList = () => {
  // Get the 'todos' state from the Redux store
  const todos = useSelector((state) => state.todos);

  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();

  // Handle deleting a todo by dispatching the deleteTodo action
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  // Handle editing a todo by prompting the user for input and dispatching the editTodo action
  const handleEdit = (todo) => {
    const editedTodo = prompt('Edit todo:', todo.title);
    if (editedTodo !== null) {
      dispatch(editTodo({ id: todo.id, title: editedTodo }));
    }
  };

  // Handle completing a todo by dispatching the completeTodo action
  const handleComplete = (id) => {
    dispatch(completeTodo(id));
  };

  // Render the list of todos with corresponding buttons
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title} - Completed: {todo.completed ? 'Yes' : 'No'}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
          <button onClick={() => handleEdit(todo)}>Edit</button>
          <button onClick={() => handleComplete(todo.id)}>Complete</button>
        </li>
      ))}
    </ul>
  );
};

// Export the TodoList component to make it available for use in other parts of the application
export default TodoList;
