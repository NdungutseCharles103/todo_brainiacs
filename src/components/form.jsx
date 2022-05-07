import React from 'react'
import { BiPlus } from 'react-icons/bi'
import '../App.css'

function Form() {
  return (
    <form className="w-3/4 mx-auto rounded-3xl flex items-center justify-between bg-sky-300">
      <input
        className="w-[80%] outline-none border-none mx-auto bg-transparent text-white text-xl px-2"
        type="text"
        placeholder="Add a Todo"
      />
      <div className=" rounded-full p-4 bg-sky-600">
        <BiPlus className=" text-white" />
      </div>
    </form>
  );
}

export default Form