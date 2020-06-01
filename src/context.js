import React from "react";

const todosContext = React.createContext({
  todos: [
    { id: 1, text: "Breakfast", complete: false },
    { id: 2, text: "Do Laundry", complete: false },
    { id: 3, text: "Finish Learning", complete: true }
  ]
});

export default todosContext;
