import uuidv4 from "uuid/v4";

export default function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_TODO":
      const toggleTodos = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, complete: !action.payload.complete }
          : t
      );
      return {
        ...state,
        todos: toggleTodos,
      };

    case "REMOVE_TODO":
      const filterTodos = state.todos.filter((t) => t.id !== action.payload.id);
      return {
        ...state,
        todos: filterTodos,
      };

    case "ADD_TODO":
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        complete: false,
      };
      const addedTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodos,
      };
    default:
      return state;
  }
}
