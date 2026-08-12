import { CreateContext } from "../context api/src/CreateContext";
import { useState } from "react";
import { useEffect } from "react";
 export   function Todoprovider({children}){
const [Todos,setTodos]=useState(()=>{
const saved= JSON.parse(localStorage.getItem('Todos'))
return   saved?saved:[]
})
const addTodo=(title)=>{
const newTodo={
id:Date.now(),
title:title,
completed:false
}
setTodos((prevTodos)=>{
return  [...prevTodos,newTodo]
})
}


const deleteTodo=(id)=>{
setTodos((prevs)=>{
return    prevs.filter((Todo)=>{
return   Todo.id!==id
})
})
}
const UpdateTodo=(id,newtitle)=>{
setTodos((prev)=>{
 return   prev.map((obj)=>{
return  obj.id===id?{...obj,title:newtitle}:obj
})
})
}
const toggleTodo=(id)=>{
setTodos((prev)=>{
 return prev.map((prevtodo)=>{
    console.log(prevtodo);
  return  prevtodo.id===id?{...prevtodo,completed:!prevtodo.completed}:prevtodo;
})
})
}

useEffect(()=>{
localStorage.setItem('Todos',JSON.stringify(Todos))
},[Todos])


return (
<CreateContext.Provider  value={{Todos,setTodos,addTodo,deleteTodo,UpdateTodo,toggleTodo}}>
    {children}
</CreateContext.Provider>
)
}