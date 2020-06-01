import React, { useContext, useReducer } from "react";

import TodosContext from "./context.js";
import TodosReducer from "./reducer.js";

import TodoList from "./components/todoList.js";

export default function App() {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(TodosReducer, initialState);
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <TodoList />
    </TodosContext.Provider>
  );
}
