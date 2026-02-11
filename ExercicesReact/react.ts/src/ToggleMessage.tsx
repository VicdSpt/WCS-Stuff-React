import React, { useState } from "react";

function ToggleMessage() {
  const [isVisible, setVisible] = useState(false);

  const showMessage = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div>
      <button onClick={showMessage}>
        {isVisible ? <p>Au Revoir !</p> : <p>Bonjour !</p>}
      </button>
    </div>
  );
}

export default ToggleMessage;
