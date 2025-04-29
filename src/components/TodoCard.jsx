import React from 'react'

const TodoCard = (props) => {
  const {children,handeleDeletTodo,index,handleEditTodo}=props
  return (
    
      <li className='todoItem'>
        {children}
        <div className='actionsContainer'>
       <button onClick={()=>{
        handleEditTodo(index)
       }}>   
     <i className="fa-solid fa-pen-to-square"></i>
       </button>
        
        <button onClick={()=>{
          handeleDeletTodo(index)
        }}>
          <i className="fa-solid fa-trash"></i>
          </button>
        
    </div>
     </li>
  )
}

export default TodoCard