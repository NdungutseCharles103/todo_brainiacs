import React from 'react';
import { FaTasks } from "react-icons/fa";
import { useTodos } from '../contexts/AppContext'

function Header() {
  const { edit } = useTodos()


  return (
    <div>
      <div className="container">
      <h1>PANGA</h1>
      <button className="add-btn">
        {edit?'Edit Todo':'Add Todo'}
      <FaTasks className="fa"></FaTasks>
      </button>
      </div>
    </div>
  )
}

export default Header