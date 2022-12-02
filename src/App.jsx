import React, {useEffect, useState, useRef} from "react";
import "./App.css"

import Todo from "./components/Todo";


function App() {
  const [state, setState] = useState(" ");
  const [todo, setTodo] = useState(["first to-do", "second to-do"])
  // const [form, setForm] = useState({})
  // const firstName = useRef("")
  
  const handleClick = () => {
    setTodo((curr)=>([...curr, state]))
    setState("")
  }
  const handleChange = (event) => {
    setForm(prevForm =>(
      {...prevForm,
      firstName : firstName.current.value
      }
    ))
  }



  return (
    <div className="app">
      <div className="card" style={{color: "white"}}>
        <div className="Input-part">
          <input value={state} type="text" onChange={(e)=> setState(e.target.value)} placeholder="add to-do"/>
          <button onClick={handleClick}>add</button>

          {/* <input ref={firstName} type="text" placeholder="first name" name="firstName"/>
          <input onChange={handleChange} type="text" placeholder="last name" name="lastName" />
          <button onClick={handleChange}>change name</button> */}
        </div>
        <Todo todo={todo} setTodo={setTodo}/>
      </div>
    </div>
  )
}

export default App

