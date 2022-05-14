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
  const [isImage, setIsImage] = useState(false)

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
    setTodos(data)
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter((t) => t._id === todo._id));
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
         if (td._id === todo._id) {
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
    setTodos(todos.filter((t) => t._id !== todo._id));
  };

  const setCompleted = (todo) => {
    console.log(todo._id);
    setTodos(
      todos.map((td) => {
        if (td._id === todo._id) {
          return {
            ...td,
            completed: !td.completed,
          };
        }
        return td;
      })
    );
  };

  useEffect(() => {
    getTodos();
  }, []);

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
        isImage,
        setIsImage
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
