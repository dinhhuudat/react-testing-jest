import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'
import user from '@testing-library/user-event'

describe('Counter', () => {
  it('should render a counter', () => {
    render(<Counter />)
    const countEL = screen.getByTestId('count')
    expect(countEL).toBeInTheDocument()
    expect(countEL).toHaveTextContent('0')

    const countButton = screen.getByRole('button')
    expect(countButton).toBeInTheDocument()
  })

  it('should count button work', async () => {
    render(<Counter />)
    const countButton = screen.getByRole('button')
    user.click(countButton)
    const countEL = screen.getByTestId('count')
    expect(countEL).toHaveTextContent('1')
  })

  it('should render count when input', async () => {
    render(<Counter />)
    const countInput = screen.getByTestId('count-input')
    user.type(countInput, '10')
    const countEL = screen.getByTestId('count')
    expect(countEL).toHaveTextContent('10')
  })
})
