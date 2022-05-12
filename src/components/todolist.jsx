import React from "react";
import Todo from "./todo";
import { useTodos } from "../contexts/AppContext";

function TodoList() {
  const { todos } = useTodos();
  return (
    <div className="w-full">
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
      <Todo />
    </div>
  );
}

export default TodoList;
