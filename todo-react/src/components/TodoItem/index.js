import React from 'react';
import { IoChevronDownCircleOutline } from "react-icons/io5"
import { FiTrash2 } from "react-icons/fi";
import './TodoItem.css';


function TodoItem(props) {
  // const onComplete = () => {
  //   alert('ya completaste el todo ✅ ' + props.text);
  // }


  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick ={props.onComplete}
      >
        <IoChevronDownCircleOutline/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <FiTrash2/>
      </span>
    </li>
  );
}

export { TodoItem };