import React, { useState, useEffect } from 'react'
import { BiPlus } from 'react-icons/bi'
import '../App.css'
import { useTodos } from '../contexts/AppContext'

function Form() {
    const [input, setInput]= useState('')
    const {todos, setTodos} = useTodos()

    const submitTodo = (e)=>{
        e.preventDefault();
        const todo = {
            text: input,
            completed: false,
        }

        setTodos([...todos, todo])
    }

  return (
    <form className="w-3/4 mx-auto rounded-3xl flex items-center justify-between bg-sky-300">
      <input
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        className="w-[80%] outline-none border-none mx-auto bg-transparent text-white text-xl px-2"
        type="text"
        placeholder="Add a Todo"
      />
      <div className=" rounded-full p-4 bg-sky-600">
        <BiPlus className=" text-white" onClick={submitTodo} />
      </div>
    </form>
  );
}

export default Form