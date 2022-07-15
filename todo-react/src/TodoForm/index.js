import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';


function TodoForm () {

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const{addTodo, setModal} = React.useContext(TodoContext);

    const onCancel = () => {
        setModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onAdd = () =>{

    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setModal(false);
    };


    return (
        <form onSubmit={onSubmit}>
                
            <label> Agrega una nueva tarea  </label>

            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder='Cortar la cebolla almuerzo'
            />

            <div className='TodoForm-buttonContainer'>
                <button
                type = "button"
                className='TodoForm-button TodoForm-button--cancel'
                onClick={onCancel}
                >
                    cancelar
                </button>
                <button
                type = "submit"
                className='TodoForm-button TodoForm-button--add'
                >
                    añadir
                </button>
            </div>



        </form>
    );

};

export {TodoForm};