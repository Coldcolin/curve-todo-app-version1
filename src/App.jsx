import React, {useEffect, useState} from "react";
import "./App.css"
import { MdDeleteOutline } from "react-icons/md";


function App() {
  const [state, setState] = useState(" ");
  const [todo, setTodo] = useState(["first to-do", "second to-do"])

  const handleClick = () => {
    setTodo((curr)=>([...curr, state]))
    setState(" ")
  }

  const deleteItem =(val)=>{
    const newArray = todo.filter((list)=> list !== val);
    console.log(newArray)
    setTodo(newArray);
  }



  return (
    <div className="app">
      <div className="card" style={{color: "white"}}>
        <div className="Input-part">
          <input onChange={(e)=> setState(e.target.value)} type="text" placeholder="add to-do"/>
          <button onClick={handleClick}>add</button>
        </div>
        <div className="List-part">
          <h1>TO-DO LIST</h1>
          {
            todo?.map((item)=> (
              <div className="to-do-card">
                <div>
                  <p className="to-do-item">{item}</p>
                </div>
                <div>
                  <div className="delete-button" onClick={()=>{deleteItem(item)}}><MdDeleteOutline /></div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App

