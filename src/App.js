import React, { useContext, useReducer, useState, useEffect } from 'react'

import TodosContext from './context.js'
import TodosReducer from './reducer.js'

import TodoList from './components/todoList.js'

const useApi = endpoint => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData(data)
  }, [])

  const getData = async () => {
    const response = await fetch("https://hooks-api-eight-mu.now.sh/todos");
    const responseData = await response.json()
    setData(responseData)
  }
  return data
}

export default function App () {
  const initialState = useContext(TodosContext)
  const [state, dispatch] = useReducer(TodosReducer, initialState)
  const saveTodos = useApi("https://hooks-api-eight-mu.now.sh/todos")

  useEffect(() => {
    dispatch({ type: "GET_TODOS", payload: saveTodos})
  }, [saveTodos])

  return (
    <TodosContext.Provider value={{ state, dispatch}}>
      <TodoList />
    </TodosContext.Provider>
  )
}
