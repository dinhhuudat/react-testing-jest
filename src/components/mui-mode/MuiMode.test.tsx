import { render, screen } from '@testing-library/react'
import { AppProvider } from '../../providers/app-provider'
import { MuiMode } from './MuiMode'

describe('MUI mode', () => {
  it('should render dard mode', () => {
    render(<MuiMode />, { wrapper: AppProvider })
    const heading = screen.getByRole('heading')
    expect(heading).toHaveTextContent('theme is light')
  })
})
