import React from "react";
import { BiTrash, BiEdit, BiCheck } from "react-icons/bi";

function Todo() {
  return (
    <div className="flex mt-8 items-center w-[60%] min-w-[300px] mx-auto justify-between">
      <div className="p-4 px-6 text-3xl bg-blue-500">1</div>
      <div className="title">
        <p className="text-2xl">Title:</p>
        <p className="text-2xl">Watching Television</p>
      </div>
      <div className=" flex text-3xl">
        <BiCheck className="text-white bg-green-500 cursor-pointer" />
        <BiEdit className="cursor-pointer ml-3" />
        <BiTrash className="cursor-pointer ml-3 text-red-500" />
      </div>
    </div>
  );
}

export default Todo;
