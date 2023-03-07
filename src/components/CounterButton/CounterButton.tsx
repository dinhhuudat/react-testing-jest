export const CounterButton = ({
  incrementFunction,
  decrementFunction,
}: {
  incrementFunction: () => void
  decrementFunction: () => void
}) => {
  return (
    <div>
      <button onClick={incrementFunction}>Increment</button>
      <button onClick={decrementFunction}>Decrement</button>
    </div>
  )
}
