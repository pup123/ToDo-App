import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from './components/TodoList'
function App() {

const [todos,setTodos]=useState([])
const [todoValue,setTodoValue]=useState('')

function saveData(newList){

  localStorage.setItem('todos',JSON.stringify({todos:newList}))
}


function handleAddTodos(newTodo){
  const newTodoList =[...todos,newTodo]
  saveData(newTodoList)
  setTodos(newTodoList)
}
function handeleDeletTodo(index){
  const newTodoList=todos.filter((todo,todoIndex)=>{
    return todoIndex !== index
  })
  saveData(newTodoList)
  setTodos(newTodoList)
}
function handleEditTodo(index){
  const valueTobeEdited=todos[index]
  setTodoValue(valueTobeEdited)
  handeleDeletTodo(index)
}

useEffect(()=>{
  if(!localStorage){
    return
  }
  let localTodos=localStorage.getItem('todos')
  if(!localTodos){
    return
  }
  localTodos=JSON.parse(localTodos).todos
  setTodos(localTodos)
},[])

  return (
    <>
     <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
     <TodoList handleEditTodo={handleEditTodo} handeleDeletTodo={handeleDeletTodo} todos={todos}/>
    </>
  )
}

export default App
