import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState({ text: '' })
  const [editIndex, setEditIndex] = useState(null)

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify(newList))
  }

  function handleAddTodos(newTodo) {
    let newTodoList
    if (editIndex !== null) {
      newTodoList = [...todos]
      newTodoList[editIndex] = newTodo
      setEditIndex(null)
    } else {
      // إضافة مع توليد id تلقائي أو بأي طريقة تختارها
      newTodoList = [...todos, { ...newTodo, id: Date.now() }]
    }
    persistData(newTodoList)
    setTodos(newTodoList)
    setTodoValue({ text: '' })
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index)
    persistData(newTodoList)
    setTodos(newTodoList)
    if (editIndex === index) {
      setTodoValue({ text: '' })
      setEditIndex(null)
    }
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue({ text: valueToBeEdited.text })
    setEditIndex(index)
  }

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos') || '[]')
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
        editIndex={editIndex}
      />
      <TodoList
        todos={todos}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  )
}

export default App
