import React from "react";
import Todo from "./todo";
import { useTodos } from "../contexts/AppContext";

function TodoList() {
  const { todos } = useTodos();
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
