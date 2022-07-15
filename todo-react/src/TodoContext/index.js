import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){

    const {item: todos, 
        saveItem: saveTodos, 
        loading,
      error
    } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearch] = React.useState('');
      const [openModal, setModal] = React.useState(false);
      const completedTodos = todos.filter(todo=>!!todo.completed).length;
      const totalTodos = todos.length;
    
      const filterTodos = todos.filter((todo) => (
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
       )); 

        const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        })
  
        
        saveTodos(newTodos);
      };

         const completTodo = (text) => {
          const todoIndex = todos.findIndex(todo=>todo.text === text);
          const newTodos = [...todos];
    
          newTodos[todoIndex].completed = true;
          saveTodos(newTodos);
        };
    
          const deletTodo = (text) => {
            const todoIndex = todos.findIndex(todo=>todo.text === text);
            const newTodos = [...todos];
    
            newTodos.splice(todoIndex,1);
            saveTodos(newTodos);
          } 

          

        
    return(
        <TodoContext.Provider value={{
        error,
        loading,
    
        totalTodos,
        completedTodos,
    
        searchValue,
        setSearch,
    
        filterTodos,
    
        addTodo,
        completTodo,
        deletTodo,

        openModal,
        setModal

        }}> 
        {props.children}

        </ TodoContext.Provider>
        
    )

}

export {TodoContext,TodoProvider};