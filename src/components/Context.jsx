import React from 'react'
import { useLocalStorage } from './useLocalStorage';
import '../index.css'

const Context = React.createContext();

function TodoProvider({children}) {
    
    const {
        item: todos, 
        saveItem: saveTodos, 
        error, 
        loading
      } = useLocalStorage('TODOS_V1', []);
      
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length; 
    
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchedText = searchValue.toLowerCase();
          return todoText.includes(searchedText)
        }
      );
    
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,
        })
        saveTodos(newTodos);
      }
    
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos)
      }
      
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos)
      }

    return (
        <Context.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </Context.Provider>
    )
};

export { Context, TodoProvider };