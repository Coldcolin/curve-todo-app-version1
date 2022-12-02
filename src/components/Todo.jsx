import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import "../App.css"

const Todo = ({todo, setTodo}) => {
  const deleteItem =(val)=>{
    const newArray = todo.filter((list)=> list !== val);
    setTodo(newArray);
  }
  return (
    <div className="List-part">
          <h1>TO-DO LIST</h1>
          {
            todo?.map((item)=> (
              <div className="to-do-card">
                <div>
                  <p className="to-do-item">{item}</p>
                </div>
                <div>
                  <div className="delete-button" onClick={()=> deleteItem(item)}><MdDeleteOutline /></div>
                </div>
              </div>
            ))
          }
        </div>
  )
}

export default Todo