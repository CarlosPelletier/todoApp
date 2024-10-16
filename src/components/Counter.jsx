import React from 'react';
import { Context } from './Context';
import '../index.css'

function Counter() {
  const {
    completedTodos,
    totalTodos
  } = React.useContext(Context)

  const message = totalTodos === 0 ? 'No pending asignements' : `${completedTodos} out of ${totalTodos} asignements have been completed` ;

    return(
      <h1 className="Counter">
        {message}
      </h1>
    )
  }

  export { Counter };