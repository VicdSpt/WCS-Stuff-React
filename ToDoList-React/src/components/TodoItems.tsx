
import type { Todo } from "../types/todo";

// This component shows ONE todo item
function SoloTodoItem({
    todo,
    onToggle,
    onDelete
}: {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id:number) => void;
}) {
    return(
        <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} className="w-5 h-5 cursor-pointer" />
            <span className={`flex-1 ${todo.completed ? "line-through text-gray-400" : "text-gray-800"}`}>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)} className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 hover:cursor-pointer">Delete Task
            </button>
        </div>
    );
}

export default SoloTodoItem