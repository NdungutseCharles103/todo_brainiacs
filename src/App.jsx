import React from "react";
import Trans from "./Trans";
import Login from "./components/Login";
import './App.css'
import { TodoProvider } from './contexts/AppContext'
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useTodos } from './contexts/AppContext'

function App() {
  const {isLogin} = useTodos()

  return (
    <TodoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Trans />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}

export default App;
