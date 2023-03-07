import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState<number>(0)

  const handleCount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div data-testid="count">{count}</div>
      <input
        data-testid="count-input"
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value) || 0)}
      />
      <button onClick={handleCount}>Count</button>
    </>
  )
}
