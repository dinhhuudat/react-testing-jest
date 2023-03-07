import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState<number>(0)

  const handleCount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div data-testid="count">{count}</div>
      <button onClick={handleCount}>Count</button>
    </>
  )
}
