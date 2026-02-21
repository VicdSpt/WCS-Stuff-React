import { useState } from "react";

export default function ExoInput() {
  const [text, setText] = useState<string>("");
  const remaining = text.length;

  return (
    <div>
      <button onClick={() => setText("")}>Reset Text</button>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={110}
      ></textarea>
      <p style={{ color: remaining > 100 ? "red" : "white" }}>
        {remaining} / 100 characters
      </p>
    </div>
  );
}
