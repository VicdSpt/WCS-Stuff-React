import React, { useState } from "react";

function BoxingCount() {
    const [boxingPunch, setboxingPunch] = useState(0)
  return (
    <div>
        <button onClick={() => setboxingPunch(boxingPunch + 1)}>{boxingPunch}</button>
    </div>
  )
}
export default BoxingCount