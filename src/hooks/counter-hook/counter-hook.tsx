import { useState } from 'react'

export const useCounter = ({ initValue = 0 }: { initValue?: number }) => {
  const [count, setCount] = useState(initValue)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  return { count, increment, decrement }
}
