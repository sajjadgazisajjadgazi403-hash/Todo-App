import { CreateContext } from "../../context api/src/CreateContext";
import { Todoprovider } from "../Todoprovider";
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
export   function TodoApp(){
const [title,settitle]=useState('')
const {Todos,addTodo,deleteTodo,UpdateTodo,toggleTodo}=useContext(CreateContext)
return(

<div  className="flex items-center justify-center mt-20 ">
<div  className="bg-blue-500   py-2 px-2 mx-2 my-2 rounded-lg ">
<input type="text" className="bg-blue-200 py-2 px-2  rounded-lg" value={title} placeholder="Enter todo" onChange={(e)=>{settitle(e.target.value)}}  />
<button  onClick={()=>{
if(title.trim()===''){
return
}else{
addTodo(title)
settitle('')
}
}}  className="bg-green-500  py-2 px-2  rounded-lg my-2 mx-2  text-white">Add</button>
{Todos.map((todo)=>{
return  <div className={`${todo.completed?'bg-green-300 rounded-lg text-white':'bg-yellow-300 rounded-lg '}`} >
    <div  className=" flex  gap-2 my-2 mx-2  py-2 px-2 ">
    <input type="checkbox"  checked={todo.completed}  onChange={()=>{
      toggleTodo(todo.id)      
    }}    />
     <span  className={`${todo.completed?'line-through font-bold  decoration-red-500':'font-bold'}`}>{todo.title}</span>
     <button onClick={()=>{
    const newtitle=prompt('Add new Todo',todo.title);    
    if(newtitle===null){
      return
    }
      if (newtitle.trim() ==="") {
      return;
    }
    UpdateTodo(todo.id,newtitle)
     }}  className="bg-red-200 rounded-lg mx-2">✏️</button>     
      <button  className="bg-gray-700 rounded-lg"  onClick={()=>{  //delete button
        deleteTodo(todo.id)
      }}>❌</button>
    </div>

          </div>
})}
</div>
</div>



)
}
