import React from 'react'
import LudoBoard from './LudoBoard'
import ToDoList from './ToDoList'

export const App = () => {
  return (
    <div className='container'> 
      <LudoBoard/>
      <ToDoList/>
    </div>
  )
}
export default App