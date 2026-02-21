import  { useState } from "react";

export default function ShowHide() {
  const [showSpoiler, setShowSpoiler] = useState<boolean>(false);
  return (
    <div>
      {!showSpoiler && <p> Attention Spoilers - Click to see</p>}
      {showSpoiler && <p>🔥 Spoiler: The butler did it.</p>}
      <button onClick={() => setShowSpoiler((prev) => !prev)}>
        {showSpoiler ? "Hide spoiler" : "Reveal spoiler"}
      </button>
    </div>
  );
}
