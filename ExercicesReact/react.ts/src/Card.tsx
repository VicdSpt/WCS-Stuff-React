import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  variant?: "default" | "warning" | "success";
}

function Card({ title, children, variant }: CardProps) {
      const borderColor = variant === "warning" ? "orange"
    : variant === "success" ? "green"
    : "gray";

  return (
    <div style={{ border: `1px solid ${borderColor}`, padding: "16px" }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default Card;
