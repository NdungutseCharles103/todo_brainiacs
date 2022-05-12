import React from "react";
import { BiTrash } from "react-icons/bi";

function Todo() {
  return (
    <div className="">
      <div className="title">
        <p className="">Title:</p>
        <p className="">Watching Television</p>
      </div>
      <div className="action">
        <BiTrash />
      </div>
    </div>
  );
}

export default Todo;
