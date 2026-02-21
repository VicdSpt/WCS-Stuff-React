import { useState } from "react"

export default function ToggleButton() {

    const [isOn, setIsOn] = useState<boolean>(false)

    const handleToggle = () => {
        setIsOn(prev => !prev)
    }

  return (
    <div >
        <button onClick={handleToggle} style={{background: isOn ? "#22c55e" : "#ef4444"}}>Light is {isOn ? "ON" : "OFF"}</button>
    </div>
  )
}