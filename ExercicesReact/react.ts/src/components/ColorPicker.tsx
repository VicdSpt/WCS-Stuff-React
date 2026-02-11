import React, { useState } from 'react'
import ColorButton from './ColorButton'

function ColorPicker() {
    const [selectColor, setSelectColor] = useState("")

    const handleSelect = (value: string) => {
        setSelectColor(value)

    }
  return (
    <div>
        <p>Select: {selectColor}</p>
      <ColorButton color='red' onPick={handleSelect}/>
      <ColorButton color='blue' onPick={handleSelect}/>
      <ColorButton color='green' onPick={handleSelect}/>
    </div>
  )
}

export default ColorPicker
