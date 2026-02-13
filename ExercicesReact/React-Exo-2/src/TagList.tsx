import React, { useState } from "react";

function TagList() {
  const [tags, setTags] = useState<string[]>([]);
  const [hasInputs, setHasInputs] = useState("");

  const handleAddButton = () => {
    const trimmed = hasInputs.trim();
    if (trimmed === "") return;
    if (tags.includes(trimmed)) return;
    setTags((prev) => [...prev, trimmed]);
    setHasInputs("");
  };

  const handleReset = () => {
    setTags([])
    setHasInputs("")
  };

  return (
    <div>
      {tags.map((tag, index) => (
        <span key={index}>
          {tag}
          <button
            onClick={() =>
              setTags((prev) => prev.filter((_, i) => i !== index))
            }
          >
            X
          </button>
        </span>
      ))}
      <input
        type="text"
        value={hasInputs}
        onChange={(e) => setHasInputs(e.target.value)}
      />
      <button onClick={handleAddButton}>+ Add</button>
      <p>{tags.length} tags</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default TagList;
