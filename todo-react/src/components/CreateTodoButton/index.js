import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = () => {
      props.setModal(prevState => !prevState)
    }; // is a function for no render inmediately when recharge the page


  return (
    <button className="CreateTodoButton"
        onClick={onClickButton}
    >
        +
    </button>
  );
}

export { CreateTodoButton };