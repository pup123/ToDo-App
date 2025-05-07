import { useEffect, useRef } from 'react'

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue, editIndex } = props

  const isEditing = editIndex !== null
  const inputRef = useRef(null) // مرجع لحقل الإدخال

  // إعطاء التركيز عند التعديل
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing]) // نراقب تغيير حالة التعديل

  return (
    <header>
      <input
        ref={inputRef} // ربط المرجع
        value={todoValue.text || ''}
        onChange={(e) => setTodoValue({ ...todoValue, text: e.target.value })}
        placeholder="Enter todo..."
      />
      <button onClick={() => {
        if ((todoValue.text || '').trim()) {
          handleAddTodos({
            ...todoValue,
            text: todoValue.text.trim()
          })
        }
      }}>
        {isEditing ? 'Edit' : 'Add'}
      </button>
    </header>
  )
}
