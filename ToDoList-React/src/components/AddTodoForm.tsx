import { useState } from "react";

// This component has the input and button to add new todos
function AddTodoForm({ onAdd }: { onAdd: (text: string) => void }) {
  const [writeTask, setWriteTask] = useState("");

  const clickOnSubmitTask = () => {
    if (writeTask.trim()) {
      onAdd(writeTask);
      setWriteTask("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter"){
    clickOnSubmitTask();}
  };

  return(
    <div className="flex gap-2 mb-6">
        <input type="text" value={writeTask} onChange={(e) => setWriteTask(e.target.value)} onKeyPress={handleKeyPress} placeholder="What needs to be done ?" className="text-lg flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  />
        <button onClick={clickOnSubmitTask} className="text-lg px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 hover:cursor-pointer">Add</button>
    </div>
  )
}

export default AddTodoForm
