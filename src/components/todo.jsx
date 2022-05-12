import React from "react";
import { BiTrash, BiEdit, BiCheck } from "react-icons/bi";
import { useTodos } from "../contexts/AppContext";

function Todo({index, todo}) {
  const { setCompleted, editTodo, deleteTodo } = useTodos()

  return (
    <div className="flex mt-8 items-center w-[60%] min-w-[300px] mx-auto justify-between">
      <div className={`p-4 px-6 text-3xl ${todo.completed?'bg-green-500':'bg-blue-500'}`}>{index}</div>
      <div className="title">
        <p className="text-lg">Title:</p>
        <p className={`text-xl ${todo.completed?'compl':''}`}>{todo.text}</p>
      </div>
      <div className=" flex text-3xl">
        <BiCheck 
        onClick={()=> setCompleted(todo)}
        className="text-white bg-green-500 cursor-pointer" />
        <BiEdit
        onClick={()=> editTodo(todo)}
         className="cursor-pointer ml-3" />
        <BiTrash
          onClick={()=> deleteTodo(todo)}
         className="cursor-pointer ml-3 text-red-500" />
      </div>
    </div>
  );
}

export default Todo;
