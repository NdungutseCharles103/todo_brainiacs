import React from "react";
import Todo from "./todo";

function TodoList({ todos, setTodos }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} setTodos={setTodos} />
      ))}
    </div>
  );
}

export default TodoList;
