import React from "react";
import Form from "./components/form";
import Header from "./components/Header";
import TodoList from "./components/todolist";
import './App.css'

function App() {

  
  return (
    <div className="flex flex-col w-full App h-screen">
      <Header />
      <div className="flex flex-col bg-white w-2/3  mx-auto p-5 items-center">
        <Form />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
