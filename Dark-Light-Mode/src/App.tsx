import { useEffect, useState } from "react";
import "./App.css";
import { GoSun } from "react-icons/go";
import { IoMoon } from "react-icons/io5";

function App() {
  // Initialize state from stored value or default to light mode
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("theme");
    return savedMode || ""
  });
  // Save to localStorage whenever mode changes
  useEffect(() => {
    if (mode) {
      localStorage.setItem("theme", mode)
    } else {
      localStorage.removeItem("theme")
    }
  }, [mode])

  return (
    <>
      <div className={`${mode ? "dark" : ""} bg-white dark:bg-zinc-800 grid place-items-center h-screen w-full`}>
        <div className="bg-zinc-100 p-2 rounded-xl dark:bg-zinc-700">
          <button
            onClick={() => {
              setMode("");
            }}
            className="bg-transparent p-3 hover:bg-zinc-200 rounded-lg cursor-pointer dark:hover:bg-zinc-100/10 text-black dark:text-white"
          >
            <GoSun />
          </button>
          <button
            onClick={() => {
              setMode("dark");
            }}
            className="bg-transparent p-3 hover:bg-zinc-200 rounded-lg cursor-pointer dark:hover:bg-zinc-100/10 text-black dark:text-white"
          >
            <IoMoon />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
