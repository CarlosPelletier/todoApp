import React from 'react'
import { Context } from './Context'

const NewTask = () => {

  const { addTodo, setOpenModal, } = React.useContext(Context);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false);
  }
  const onCancel = (event) => {
    setOpenModal(false);
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  return (

    <form onSubmit={ onSubmit }>
      <label>New asignement</label>
      <textarea
      placeholder='Type a new Todo'
      value={newTodoValue}
      onChange={onChange}
    />

    <div className='NewTask-buttonContainer'>
      <button
        type='button'
        className='NewTask-button NewTask-button--cancel'
        onClick={onCancel}
      >Cancel</button>
      <button
        type='submit'
        className='NewTask-button NewTask-button--add'
      >Add</button>
    </div>

    </form>


  )
}

export { NewTask };