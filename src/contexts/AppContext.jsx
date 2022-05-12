import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const TodoContext = React.createContext();
export const api = axios.create({
  baseURL: `https://wepanga.herokuapp.com`,
});
export function useTodos() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState({});
  const [todo, setTodo] = useState({});
  const [edit, setEdit] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [input, setInput] = useState("");

  const getSavedUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user.names);
      console.log(user);
      setIsLogedIn(true);
    }
    return;
  };

  const getTodos = async () => {
    const res = await api.get("/todos");
    const data = await res.data;
    console.log(data);
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter((t) => t.id === todo.id));
  };
  const AddTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const editTodo = (todo) => {
    setEdit(true);
    setInput(todo.text);
    setTodo(todo);
  };

  const updateTodo = (e) => {
    e.preventDefault();
    todo.text = input;
     setTodos(
       todos.map((td) => {
         if (td.id === todo.id) {
           return {
             ...td,
             text: input,
           };
         }
         return td;
       })
     );
    setInput("");
    setEdit(false);
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const setCompleted = (todo) => {
    console.log(todo.id);
    setTodos(
      todos.map((td) => {
        if (td.id === todo.id) {
          return {
            ...td,
            completed: !td.completed,
          };
        }
        return td;
      })
    );
  };

  // useEffect(() => {
  //   getTodos();
  // }, []);

  useEffect(() => {
    getSavedUser();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        user,
        todos,
        setCompleted,
        edit,
        setEdit,
        setTodos,
        setUser,
        input,
        setInput,
        editTodo,
        updateTodo,
        deleteTodo,
        todo,
        AddTodo,
        isLogedIn,
        setIsLogedIn,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
