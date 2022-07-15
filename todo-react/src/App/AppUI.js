import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import {Modal} from '../components/Modal';
import { TodoForm } from "../TodoForm";



function AppUI(){
   
  const {error, 
        loading,
        filterTodos,
        completTodo,
        deletTodo,
        openModal,
        setModal
      } = React.useContext(TodoContext);
    

    return (
        <React.Fragment>
        <TodoCounter/>
        <TodoSearch />
       
            <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !filterTodos.length) && <p>¡Crea tu primera TAREA!</p>}
          
              { filterTodos.map(todo =>(
                <TodoItem
                
      
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={()=>completTodo(todo.text)}
                  onDelete = {()=>deletTodo(todo.text)}
                />
              ))}
            </TodoList>
          
         {openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
         )}
                
  
        <CreateTodoButton 
          setModal={setModal}
        />
      </React.Fragment>
    );

};

export {AppUI}
