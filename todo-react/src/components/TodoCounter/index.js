import React from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css';

function TodoCounter({}) {
  const {totalTodos, completedTodos} = React.useContext(TodoContext)
    // const{total,complete} = props; opcion para traer los props de app 
  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} Tareas</h2>
  );
}

export { TodoCounter };
