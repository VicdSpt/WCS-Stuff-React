import React, { useState } from 'react'

function SimpleToggle() {
    const [isOn, setIsOn] = useState(false)

    const handleToggle = () => {
        setIsOn(prev => !prev)
    }

  return (
    <div style={{background: isOn ? "#22c55e" : "#ef4444"}} onClick={handleToggle}>
        {isOn ? "ON" : "OFF"}
    </div>
  )
}

export default SimpleToggle
