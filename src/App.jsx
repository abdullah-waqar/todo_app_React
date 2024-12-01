import { useState } from 'react'
import Navbar from './components/Navbar'
import { useRef } from 'react';

import { v4 as uuidv4 } from 'uuid';

function App() {

//* this is a todo that we take from the user as an input
let [todo , setTodo] = useState("")
//* this is our array which holds all the todos
let [todos, setTodos] = useState([])

const handleChange = (e) => {
  setTodo(e.target.value)
  console.log(todo)
}


const handleEdit = () => {
  
}

const handleDelete = () => {
  
}



const handleAdd = () => {
setTodos([...todos, {id: uuidv4(),todo, isCompleted: false}]);
setTodo("")
console.log(todos)
  
}

const handleCheckBox = (e) => {
   let id = e.target.name;
   let index = todos.findIndex(item=>{
    return item.id === id
   })
   let newTodos = [...todos];
   newTodos[index].isCompleted = !newTodos[index].isCompleted;
   setTodos(newTodos)
}

  return (
    <>
    <Navbar />
    <div className="container mx-auto my-5 rounded-md border ">
        <div className="bg-violet-100 min-h-[70vh] px-3 py-2">
          {/* Add a todo */}
          <div className="addTodo">

            <h2 className='text-lg font-bold'>Add a Todo</h2>
            <input onChange={handleChange} value={todo} type="text" />
            <button onClick={handleAdd} className='bg-violet-800 text-gray-200 px-4 py-1 ml-3 hover:bg-violet-950 rounded-md '>Add</button>

          </div>
          
          {/*  Showing all todos */}
           <h1 className='font-bold text-violet-800 p-1 text-xl mt-5'>Your Todos</h1>
          <div className="todos">
            {todos.map(item=>{

            
           return <div key={item.id} className="todo flex justify-between  ">
                <div className={`text mt-1 ${item.isCompleted  ? "line-through" : ""}`}>{item.todo}</div>
                <div className="buttons flex gap-5 ">
                  <input name={item.id} onChange={handleCheckBox} type="checkbox" />
                  <button onClick={handleEdit} className='bg-violet-800 text-gray-200 px-4 py-1 ml-3 hover:bg-violet-950 rounded-md'>Edit</button>
                  <button onClick={handleDelete} className='bg-violet-800 text-gray-200 px-4 py-1 ml-3 hover:bg-violet-950 rounded-md'>Delete</button>
                </div>
            </div>
            })}
          </div>
        </div>
    </div>
   </>
  )
}

export default App
