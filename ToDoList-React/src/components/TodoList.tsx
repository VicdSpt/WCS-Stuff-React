import type { Todo } from "../types/todo";
import  SoloTodoItem  from "./TodoItems"

// This component shows ALL todos
function ShowTodoList({
  todos,
  onToggle,
  onDelete,
}: {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  // If no todos, show a message
  if (todos.length === 0) {
    return (
      <div className="text-center text-gray-600 py-8">
        Not todos yet. Please write one above 👻
      </div>
    );
  }
  return (
    <div className="space-y-2">
      {/* Loop through each todo and render a TodoItem */}
      {todos.map((todo) => (
        <SoloTodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ShowTodoList