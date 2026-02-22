import { useState } from "react";

type AllSize = "Extra Small" | "Small" | "Medium" | "Large" | "Extra Large";
const sizes: AllSize[] = [
  "Extra Small",
  "Small",
  "Medium",
  "Large",
  "Extra Large",
];

export default function DropDownButton() {
  const [selectedSize, setSelectedSize] = useState<AllSize>("Medium");

  return (
    <>
      <div>
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            style={{
              fontWeight: selectedSize === size ? "bold" : "normal",
              border:
                selectedSize === size ? "2px solid black" : "1px solid gray",
            }}
          >
            {size}
          </button>
        ))}
        <p>You selected: {selectedSize}</p>
      </div>
    </>
  );
}
