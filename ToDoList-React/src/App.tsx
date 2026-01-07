import { useState } from 'react'
import './App.css'

import type { Todo } from "./types/todo"
import AddTodoForm from "./components/AddTodoForm"
import ShowTodoList from "./components/TodoList" 

function App() {
  // STATE: This holds all our todos
  const [todos, setTodos] = useState<Todo[]>([]);

  // FUNCTION: Add a new todo
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]); // Add to existing todos
  };

  // FUNCTION: Toggle todo between complete/incomplete
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // FUNCTION: Delete a todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          My Todo List in React
        </h1>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <AddTodoForm onAdd={addTodo} />
          <ShowTodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </div>
        <div className="mt-6 pt-4 border-t text-sm text-gray-500 text-center">
          Total: {todos.length} | Completed:{" "}
          {todos.filter((t) => t.completed).length}
        </div>
      </div>
    </div>
  );
}

export default App;
