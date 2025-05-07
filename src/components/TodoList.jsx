import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const { todos, handleEditTodo, handleDeleteTodo } = props

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => (
        <TodoCard
          key={todo.id}  // استخدم id بدلاً من index
          index={todoIndex}
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
        >
          <p>{todo.text}</p>
        </TodoCard>
      ))}
    </ul>
  )
}
