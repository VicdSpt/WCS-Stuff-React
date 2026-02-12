import React, { useState } from "react";

type TrafficColor = "Red" | "Orange" | "Green";

function TrafficLight() {
  const [trafficColor, setTrafficColor] = useState<TrafficColor>("Red");

  const nextButton = () => {
    setTrafficColor((prev) => {
      if (prev === "Red") return "Orange";
      if (prev === "Orange") return "Green";
      return "Red";
    });
  };

  return (
    <div>
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: trafficColor === "Red" ? "#ef4444" : "#333", // bright if active, gray if not
          margin: "8px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Red
      </div>
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: trafficColor === "Orange" ? "#f59a1b" : "#333",
          margin: "8px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Orange
      </div>
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: trafficColor === "Green" ? "#0aa128" : "#333",
          margin: "8px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Green
      </div>
      <p>{trafficColor}</p>
      <button onClick={nextButton}>Next</button>
    </div>
  );
}

export default TrafficLight;
