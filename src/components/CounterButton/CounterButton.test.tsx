import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { CounterButton } from './CounterButton'

describe('function test', () => {
  it('should function work', () => {
    const incre = jest.fn()
    const decre = jest.fn()
    render(
      <CounterButton decrementFunction={decre} incrementFunction={incre} />
    )

    const increButton = screen.getByRole('button', { name: 'Increment' })
    const decreButton = screen.getByRole('button', { name: 'Decrement' })
    user.click(increButton)
    user.click(decreButton)
    expect(incre).toHaveBeenCalledTimes(1)
    expect(decre).toHaveBeenCalledTimes(1)
  })
})
