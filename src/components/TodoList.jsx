import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <TodoItem key={index} index={index} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        ))
      ) : (
        <p>No hay tareas por el momento</p>
      )}
    </div>
  );
}

export default TodoList;

