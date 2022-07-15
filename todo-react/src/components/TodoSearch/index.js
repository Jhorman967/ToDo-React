import React from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoSearch.css';

function TodoSearch() {    

  const {searchValue, setSearch} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    };

  return [
    <input className="TodoSearch" placeholder="Encuentra tu Tarea!!!" 
    value ={searchValue}
    onChange={onSearchValueChange}
    />,
    <p>{searchValue}</p>
  ];
}

export { TodoSearch };
