import React, { useState } from "react";

function CharacterCount() {
  const [textInput, setTextInput] = useState<string>("");
  const charCount = textInput.length;
  const wordCount = textInput
    .trim()
    .split(" ")
    .filter((word) => word !== "").length;
  const wordOverLimit = charCount > 100;
  return (
    <div>
      <p style={{ color: wordOverLimit ? "red" : "green" }}>
        Characters: {charCount}
      </p>
      <p>Words: {wordCount}</p>
      <textarea
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
    </div>
  );
}

export default CharacterCount;
