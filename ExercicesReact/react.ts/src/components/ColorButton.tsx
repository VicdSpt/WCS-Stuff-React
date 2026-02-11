import React from 'react'

interface ColorButtonProps{
    color: string;
    onPick: (value: string) => void;
}

function ColorButton({color, onPick}: ColorButtonProps) {
  return (
    <div>
      <button onClick={() => onPick(color)}>{color}</button>
    </div>
  )
}

export default ColorButton
