import React, { useState, useEffect, useContext } from "react";
import uuidv4 from "uuid/v4";
import TodosContext from "../context.js";

export default function AddTodoForm() {
  const [todo, addTodo] = useState("");
  const {
    state: { currentTodo = {} },
    dispatch,
  } = useContext(TodosContext);

  useEffect(() => {
    if (currentTodo.text) {
      addTodo(currentTodo.text);
    } else {
      addTodo("");
    }
  }, [currentTodo.id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (currentTodo.text) {
      await fetch(`https://hooks-api-eight-mu.now.sh/todos/${currentTodo.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: todo,
        }),
      })
        .then((response) => response.json())
        .then((data) => dispatch({ type: "UPDATE_TODO", payload: data }));
    } else {
      await fetch(`https://hooks-api-eight-mu.now.sh/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: uuidv4(),
          text: todo,
          complete: false,
        }),
      })
        .then((response) => response.json())
        .then((data) => dispatch({ type: "ADD_TODO", payload: data }));
    }
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
