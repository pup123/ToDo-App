
const TodoInput = (props) => {
  const {handleAddTodos,todoValue,setTodoValue,editIndex}=props
  return (
    <header>
      <input value={todoValue} onChange={(e)=>{
                    setTodoValue(e.target.value)
      }}
       placeholder='Enter todo...'/>
      <button onClick={()=>{
        handleAddTodos(todoValue)
        setTodoValue('')
      }}> {editIndex !== null ? 'Edit' : 'Add'}</button>
    </header>
  )
}

export default TodoInput
// import React from 'react'

// function TodoInput({ todoValue, setTodoValue, handleAddTodos, editIndex }) {
//   return (
//     <div>
//       <input
//         type="text"
//         value={todoValue}
//         onChange={(e) => setTodoValue(e.target.value)}
//         placeholder="Add Todo..."
//       />

//       <button onClick={() => handleAddTodos(todoValue)}>
//         {editIndex !== null ? 'Edit' : 'Add'}
//       </button>
//     </div>
//   )
// }

// export default TodoInput
