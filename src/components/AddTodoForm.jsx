import React, { useState } from 'react';

function AddTodoForm({ addTodo }) {
  const [text, setText] = useState('');

  // Manejar envío del formulario para agregar una nueva tarea
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // No agregar tarea vacía
    addTodo({ text, status: 'Por hacer' });
    setText(''); // Limpiar el campo de entrada después de agregar la tarea
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agregar nueva tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default AddTodoForm;
