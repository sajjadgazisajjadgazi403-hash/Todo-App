import { useState } from 'react'
import './App.css'
import { Todoprovider } from '../Todoprovider'
import { TodoApp } from './TodoApp'
function App() {

  return (
    <Todoprovider >
     <TodoApp />
    </Todoprovider>
    
  )
}

export default App
