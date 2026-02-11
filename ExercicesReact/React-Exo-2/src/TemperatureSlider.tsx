import { useState } from "react"


function TemperatureSlider() {
    const [temperature, setTemperature] = useState<number>(0)

    const colorTemperature = temperature < 10 ? "#3b82f6" : temperature <= 25 ? "#22c55e" : "#ef4444";

    const increase = () => {
        setTemperature(prev => Math.min(prev + 1, 40))
    }
    const decrease = () => {
        setTemperature(prev => Math.max(prev - 1, -40))
    }

  return (
    <div>
      <p style={{ color: colorTemperature }}>The current temperature is {temperature}°C</p>
      <input type="range" min={-40} max={40} value={temperature} onChange={(e) => setTemperature(Number(e.target.value))} />
      <button onClick={decrease} disabled={temperature <= -40}>-</button>
      <button onClick={increase} disabled={temperature >= 40}>+</button>
    </div>
  )
}

export default TemperatureSlider
