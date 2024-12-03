import React from 'react'

function Todolist({ item, deleteItem, index }) {
  return (
    <li className="list-item">
      {item}
      <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete"
          onClick={e => {
            deleteItem(index)
          }}></i>
      </span>
    </li>
  )
}

export default Todolist