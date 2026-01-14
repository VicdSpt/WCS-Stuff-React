import React from "react";

interface BoxingCountProps {
  count: number;
  onClick?: () => void;
}

function BoxingCount({ count, onClick }: BoxingCountProps) {
  return (
    <div>
      <button className="avatar-btn" onClick={onClick}>
        💥{count}💥
      </button>
    </div>
  );
}

export default BoxingCount;