import React, { useState, useEffect, useContext } from 'react'
import TodosContext from '../context.js'

export default function AddTodoForm () {
  const [todo, addTodo] = useState('')
  const {state: { currentTodo = {} }, dispatch} = useContext(TodosContext)

  useEffect(() => {
    if (currentTodo.text) {
      addTodo(currentTodo.text)
    } else {
      addTodo('')
    }
  }, [currentTodo.id])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (currentTodo.text) {
      dispatch({ type: 'UPDATE_TODO', payload: todo })
    } else {
      dispatch({ type: 'ADD_TODO', payload: todo })
    }
    addTodo('')
  }

  return (
    <form className='flex justify-center p-5' onSubmit={handleSubmit}>
      <input
        type='text'
        className='border-gray-600 border-solid border-2'
        value={todo}
        onChange={event => addTodo(event.target.value)} />
    </form>
  )
}
