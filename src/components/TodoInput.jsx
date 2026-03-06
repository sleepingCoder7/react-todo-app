import React from 'react'

const TodoInput = ({ todo, handleAdd, setTodo, editId }) => {
  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  }

  return (
    <div>
      <div className="addTodo my-5 flex items-center gap-3">
        <input type="text" placeholder='Add a new task...' className="grow px-4 py-2 rounded-full shadow-md focus:outline-none   focus:ring-2 focus:ring-yellow-400 transitio border" value={todo} onChange={handleChange} onKeyDown={handleKeyDown} style={{
          backgroundColor: "var(--input-bg)",
          color: "var(--text-main)",
          borderColor: "var(--text-main)"
        }} />
        <button onClick={handleAdd} className={`hover:scale-105 text-white px-4 py-2 rounded-md mx-4 ${editId ? "bg-green-500 hover:bg-green-600" : "bg-violet-500 hover:bg-violet-600"}`}>{editId ? "Update" : "Add"}</button>
      </div>
    </div>
  )
}

export default TodoInput
