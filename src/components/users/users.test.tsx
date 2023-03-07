import { render, screen } from '@testing-library/react'
import { Users } from './users'

describe('MSW user', () => {
  it('should render the user lists', async () => {
    render(<Users />)
    const users = await screen.findAllByTestId('user')
    expect(users).toHaveLength(2)
  })
})
