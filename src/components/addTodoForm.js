import React, { useState, useContext } from "react";
import TodosContext from "../context.js";

export default function AddTodoForm() {
  const [todo, addTodo] = useState("");
  const { dispatch } = useContext(TodosContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo });
    addTodo("");
  };
  return (
    <form className="flex justify-center p-5" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-gray-600 border-solid border-2"
        value={todo}
        onChange={(event) => addTodo(event.target.value)}
      />
    </form>
  );
}
