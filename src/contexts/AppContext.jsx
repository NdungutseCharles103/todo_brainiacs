import React, { useContext, useState, useEffect } from "react";

const TodoContext = React.createContext();

export function useTodos() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState({});
  const [isLogedIn, setIsLogedIn] = useState(false);

  const getSavedUser = ()=>{
      const user = JSON.parse(localStorage.getItem('user'))
      if(user){
          setUser(user.names)
          console.log(user);
          setIsLogedIn(true);
      }
      return
  }

  useEffect(() => {
      getSavedUser();
  }, []);


  return (
    <TodoContext.Provider
      value={{ user, todos, setTodos, setUser, isLogedIn, setIsLogedIn }}
    >
      {children}
    </TodoContext.Provider>
  );
}

