import { act } from "react-dom/test-utils"

export default function reducer (state, action) {
  switch (action.type) {
    case 'TOGGLE_TODO':
      const toggleTodos = state.todos.map(t => t.id === action.payload.id ? {...action.payload, complete: !action.payload.complete} : t)
      return {
        ...state, todos: toggleTodos
      }
      break
    default:
      return state
  }
}
