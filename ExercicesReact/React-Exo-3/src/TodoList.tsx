import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks((prev) => [...prev, input.trim()]);
    setInput("");
  };

  const deleteTask = (index: number) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <div>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && addTask()}
          placeholder="add a task"
        />
        <button onClick={addTask}>Add task</button>
      </div>
      {tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        <ul>
          {tasks.map((task, i) => (
            <li key={i}>
              {task}
              <button onClick={() => deleteTask(i)}>X</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
