import React, { useState } from 'react';

function TodoUI({ todos, addTodo, toggleTodo, removeTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">To-Do List</h2>

        {/* Form thêm công việc */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-3 rounded-r-lg hover:bg-blue-600 transition-all"
            >
              Add
            </button>
          </div>
        </form>

        {/* Danh sách công việc */}
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between p-3 border rounded-lg ${todo.completed ? 'bg-gray-100' : ''}`}
            >
              <span
                className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button
                onClick={() => removeTodo(todo.id)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoUI;