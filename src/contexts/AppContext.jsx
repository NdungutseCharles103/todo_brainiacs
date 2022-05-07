import React, { useContext, useState, useEffect } from "react";

const TodoContext = React.createContext();

export function useTodos() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState({});
  const [islogin, setLogin] = useState(false)

  return (
    <TodoContext.Provider value={{ user, todos, setTodos, setUser, islogin }}>
      {children}
    </TodoContext.Provider>
  );
}

