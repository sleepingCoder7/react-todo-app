import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const TodoItem = ( { todo, toggleTodo, handleDelete, handleEdit, handleCheckbox } ) => {
    return (
        <div className={`todo flex items-center justify-between gap-3 my-3 px-4 py-3 rounded-lg shadow-md  cursor-pointer hover:scale-[1.01] transition-all duration-200`} key={todo.id} onClick={() => toggleTodo(todo.id)} style={{ backgroundColor: "var(--card-bg)" }}>
            <div className='flex items-center gap-3 flex-1 min-w-0'>
                <input type="checkbox" checked={todo.isCompleted} onChange={handleCheckbox} name="completed" id={todo.id} className='w-5 h-5 cursor-pointer' />
                <span className={`text-lg break-all ${todo.isCompleted ? "line-through text-gray-500" : ""}`}>{todo.text}</span>
            </div>
            <div className="buttons flex gap-2 shrink-0">
                <button className="bg-violet-500 hover:bg-violet-600 hover:scale-105 text-white p-2 rounded-md mx-1"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(todo.id)
                    }}
                ><MdEdit size={20} /></button>
                <button className="bg-red-500 hover:bg-red-600 hover:scale-105 text-white p-2 rounded-md mx-1" onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(todo.id)
                }}><MdDeleteOutline size={20} /></button>
            </div>
        </div>
    )
}

export default TodoItem
