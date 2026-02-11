import React, { useState } from "react";

function Livepreview() {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="type something"
      />
      <p >{text}</p>
    </div>
  );
}

export default Livepreview;
