import React, { useContext } from "react";
import TodosContext from "../context.js";
import AddTodoForm from "../components/addTodoForm.js";

export default function TodoList() {
  const { state, dispatch } = useContext(TodosContext);
  const title =
    state.todos.length > 0
      ? `${state.todos.length} Todos`
      : "Not to do, add one!";

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <AddTodoForm />
      <ul className="list-rest text-white p-0">
        {state.todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-orange-600 border-black border-dashed border-2 my-2 py-4 flex items-center"
          >
            <span
              className={`cursor-pointer flex-1 ml-12 ${
                todo.complete && "line-through text-gray-900"
              }`}
              onDoubleClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo })
              }
            >
              {todo.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: "SET_CURRENT_TODO", payload: todo })
              }
            >
              <img
                src="https://icon.now.sh/edit/0050c5"
                alt="Edit Todo"
                className="h-6"
              />
            </button>
            <button
              onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo })}
            >
              <img
                src="https://icon.now.sh/delete/8b0000"
                alt="Delete Todo"
                className="h-6"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
