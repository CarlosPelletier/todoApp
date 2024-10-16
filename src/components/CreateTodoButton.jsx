import { Context } from './Context';
import React from 'react';
import '../index.css'

function CreateTodoButton() {

  const {openModal, setOpenModal} = React.useContext(Context);

  function changeModal () {
    setOpenModal(!openModal)
  }

    return( 
      <button 
        onClick={changeModal}
        className="CreateTodoButton"
      > + </button>
    )
  }

  export { CreateTodoButton };