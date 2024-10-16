import React from 'react'
import { Counter } from './components/Counter';
import { SearchBar } from './components/SearchBar';
import { List } from './components/List';
import { Item } from './components/Item';
import { CreateTodoButton } from './components/CreateTodoButton';
import { Loading } from './components/Loading';
import { Error } from './components/Error';
import { EmptyTodo } from './components/EmptyTodo';
import { Context } from './components/Context';
import { Modal } from './components/Modal';
import { NewTask } from './components/NewTask';


function AppUI() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
  } = React.useContext(Context)

  return (
    <>
      <Counter />
      <SearchBar />
  
    
        <List>
        {loading && 
          <>
            <Loading />
            <Loading />
            <Loading />
          </>
        }
        {error && <Error />}
        {(!loading && searchedTodos.length === 0) && <EmptyTodo />}
  
        {searchedTodos.map(todo => (
          <Item 
            key={todo.text}
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </List>

      
      <CreateTodoButton />

      {openModal && (

        <Modal>
          <NewTask />
        </Modal>  
      )}  

    </>
  
  
  )
}

export { AppUI };