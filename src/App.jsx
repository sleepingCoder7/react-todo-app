import { use, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import "./theme.css";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    try {
      const storedTodos = localStorage.getItem("todos");
      return storedTodos ? JSON.parse(storedTodos) : [];
    } catch (error) {
      return [];
    }
  });
  const [editId, setEditId] = useState(null);
  const [showCompleted, setShowCompleted] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });

  const handleAdd = () => {
    if (!todo.trim()) {
      return;
    }

    if (editId) {
      setTodos(todos.map(t => t.id === editId ? { ...t, text: todo } : t));
      setEditId(null);
    } else {
      setTodos((prevTodos) => [...prevTodos, { id: uuidv4(), text: todo, isCompleted: false }]);
    }
    setTodo("");
  }

  const handleEdit = (id) => {
    const todoToEdit = todos.find(todo => todo.id === id);
    setTodo(todoToEdit.text);
    setEditId(id);
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const handleCheckbox = (e) => {
    e.stopPropagation();
    const id = e.target.id;
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const todoActions = {
    setTodos,
    toggleTodo,
    handleDelete,
    handleEdit,
    handleCheckbox,
    showCompleted,
    setShowCompleted,
  }

  return (
    <div className={`${darkMode ? "theme-dark bg-black" : "theme-light bg-gray-100"} min-h-screen transition-colors duration-300`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={`container mx-auto rounded-xl p-5 min-h-screen shadow-md`} style={{ backgroundColor: "var(--bg-main)", color: "var(--text-main)" }}>
        <TodoInput todo={todo} setTodo={setTodo} handleAdd={handleAdd} editId={editId} />
        <TodoList todos={todos} actions={todoActions} />
      </div>
    </div>
  )
}

export default App
