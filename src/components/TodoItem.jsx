import React, { useState } from 'react';

function TodoItem({ todo, index, updateTodo, deleteTodo }) {
  const [text, setText] = useState(todo.text);
  const [status, setStatus] = useState(todo.status);

  // Manejar cambios en el estado de la tarea
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    updateTodo(index, { text, status: e.target.value });
  };

  // Manejar cambios en el texto de la tarea
  const handleTextChange = (e) => {
    setText(e.target.value);
    updateTodo(index, { text: e.target.value, status });
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <select value={status} onChange={handleStatusChange}>
        <option value="Por hacer">Por hacer</option>
        <option value="En progreso">En progreso</option>
        <option value="Finalizada">Finalizada</option>
      </select>
      <button onClick={() => deleteTodo(index)}>Eliminar</button>
    </div>
  );
}

export default TodoItem;
