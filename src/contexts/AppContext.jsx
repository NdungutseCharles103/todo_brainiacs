import React, { useContext, useState, useEffect } from "react";

const TodoContext = React.createContext();

export function useTodos() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState({});
  return (
    <TodoContext.Provider value={{ user, todos, setTodos, setUser }}>
      {children}
    </TodoContext.Provider>
  );
}

