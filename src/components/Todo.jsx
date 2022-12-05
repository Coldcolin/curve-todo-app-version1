import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import "../App.css"

const Todo = ({todo, setTodo}) => {
  const deleteItem =(val)=>{
    const newArray = todo.filter((list)=> list.id !== val);
    setTodo(newArray);
  }

  return (
    <div className="List-part">
          <h1 >TO-DO LIST</h1>
          {
            todo?.map((item)=> (
              <div key={item.id} className="to-do-card">
                <div>
                  <h4 className="to-do-item">{item.todo}</h4>
                  <p className="to-do-item">{item.day}</p>
                </div>
                <div>
                  <div className="delete-button" onClick={()=> deleteItem(item.id)}><MdDeleteOutline /></div>
                </div>
              </div>
            ))
          }
        </div>
  )
}

export default Todo