import React from 'react'

const todosContext = React.createContext({
  todos: [],
  currentTodo: {}
})

export default todosContext
