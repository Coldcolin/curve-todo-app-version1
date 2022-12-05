import React, {useEffect, useState, useRef} from "react";
import "./App.css"
import Todo from "./components/Todo";


function App() {
  const [todo, setTodo] = useState([{id:1, todo:"first todo", day: "today"}, {id:2, todo: "second todo", day: "today"}]);
  const todoRef = useRef('');
  const whenRef = useRef('')

  const handleClick = () => {
    setTodo((curr)=>([...curr, {
      id: curr.length + 1,
      todo: todoRef.current.value,
      day: whenRef.current.value
    }]))
    whenRef.current.value = "";
    todoRef.current.value = "";
  }



  return (
    <div className="app" style={{ color: "white"}}>
      <div className="card">
        <div className="Input-part">
          <input ref={todoRef} type="text"  placeholder="add to-do"/>
          <input ref={whenRef} type="text" placeholder="add when"/>
          <button onClick={handleClick}>add</button>
        </div>
        <Todo todo={todo} setTodo={setTodo} />
      </div>
    </div>
  )
}

export default App

