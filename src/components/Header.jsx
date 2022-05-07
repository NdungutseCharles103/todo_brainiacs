import React from 'react'

function Header() {
  return (
    <div>
      <h1>PANGA</h1>
      <button className="add-btn">Add Todo <FontAwesomeIcon icon="fa-solid fa-list-check" />
      </button>
    </div>
  )
}

export default Header