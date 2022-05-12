import React from 'react';
import { FaTasks } from "react-icons/fa";

function Header() {
  return (
    <div>
      <div className="container">
      <h1>PANGA</h1>
      <button className="add-btn">
      Add Todo
      <FaTasks className="fa"></FaTasks>
      </button>
      </div>
    </div>
  )
}

export default Header