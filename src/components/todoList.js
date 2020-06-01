import React, { useContext } from "react";
import TodosContext from "../context.js";

export default function TodoList() {
  const { state } = useContext(TodosContext);

  return (
    <>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
