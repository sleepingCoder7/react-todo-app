import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, setShowCompleted, showCompleted, actions }) => {
    const { toggleTodo, handleDelete, handleEdit, handleCheckbox } = actions;
    const activeTodos = todos.filter(todo => !todo.isCompleted);
    const completedTodos = todos.filter(todo => todo.isCompleted);

    return (
        <div>
            <div className='my-3'>
                <label className='flex items-center gap-2'>
                    <input type="checkbox" checked={showCompleted} onChange={() => setShowCompleted(!showCompleted)} />
                    Show Completed
                </label>
            </div>
            <hr className="my-4 border-gray-400" />
            <h1 className="text-2xl font-bold">Your Todos</h1>
            <div className="todos">
                {todos.length === 0 && <div className="text-center">No todos to display</div>}
                {todos.filter((todo) => showCompleted || !todo.isCompleted).map((todo) => <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} handleDelete={handleDelete} handleEdit={handleEdit} handleCheckbox={handleCheckbox} />)}
            </div>
            <div className="flex justify-between items-center mt-4">
                <span className={`text-md px-2 py-1`} style={{ color: "var(--text-main)" }}>
                    {activeTodos.length} task{activeTodos.length === 1 ? "" : "s"} left
                </span>
                {completedTodos.length > 0 && (
                    <button className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md' onClick={() => setTodos(activeTodos)}>Clear Completed</button>
                )}
            </div>

        </div>
    )
}

export default TodoList
