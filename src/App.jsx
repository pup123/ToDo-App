import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from './components/TodoList'
function App() {

const [todos,setTodos]=useState([])
const [todoValue,setTodoValue]=useState('')
const [editIndex, setEditIndex] = useState(null)


function saveData(newList){

  localStorage.setItem('todos',JSON.stringify({todos:newList}))
}


function handleAddTodos(newTodo) {
  if (editIndex !== null) {
    const updatedTodos = [...todos]
    updatedTodos[editIndex] = newTodo
    saveData(updatedTodos)
    setTodos(updatedTodos)
    setEditIndex(null) 
  } else {
    const newTodoList = [...todos, newTodo]
    saveData(newTodoList)
    setTodos(newTodoList)
  }
  setTodoValue('')
}


function handeleDeletTodo(index){
  const newTodoList=todos.filter((todo,todoIndex)=>{
    return todoIndex !== index
  })
  saveData(newTodoList)
  setTodos(newTodoList)
}
function handleEditTodo(index) {
  const valueToBeEdited = todos[index]
  setTodoValue(valueToBeEdited)
  setEditIndex(index)
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
