

export default function reducer (state, action) {
  switch (action.type) {
    case 'TOGGLE_TODO':
      const toggleTodos = state.todos.map(t => t.id === action.payload.id ? {...action.payload, complete: !action.payload.complete} : t)
      return {
        ...state, todos: toggleTodos
      }
      
    case "REMOVE_TODO":
      const filterTodos = state.todos.filter(t => t.id !== action.payload.id);
      return {
        ...state,
        todos: filterTodos
      }
      
    default:
      return state
  }
}
