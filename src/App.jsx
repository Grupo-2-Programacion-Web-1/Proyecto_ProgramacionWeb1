import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  // Estado para almacenar las tareas
  const [todos, setTodos] = useState([]);

  // Almacenar las tareas en el almacenamiento local al cargar la página
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Guardar las tareas en el almacenamiento local cada vez que se actualice el estado
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Agregar una nueva tarea
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Editar una tarea
  const updateTodo = (index, updatedTodo) => {
    const newTodos = [...todos];
    newTodos[index] = updatedTodo;
    setTodos(newTodos);
  };

  // Eliminar una tarea
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>TODO List</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
