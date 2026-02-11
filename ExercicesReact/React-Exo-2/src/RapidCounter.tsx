import { useState } from "react"

function RapidCounter() {
    const [count, setCount] = useState<number>(0)

    const addPlusOne = () => {
        setCount(count + 1)
    }

    const addThreeBroken = () => {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
    }

    const addThree = () => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)

        //  setCount(prev => prev + 3);
    }

    const resetCount = () => {
        setCount(0)
    }
  return (
    <div>
        <p>The current count is {count}</p>
      <button onClick={addPlusOne}>+1</button>
      <button onClick={addThreeBroken}>+3(broken)</button>
      <button onClick={addThree}>+3(fixed)</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  )
}

export default RapidCounter
