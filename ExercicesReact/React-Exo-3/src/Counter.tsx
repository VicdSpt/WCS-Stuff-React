import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState<number>(0)

  return (
    <div>
      <p>The score is {count}</p>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>- 1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
