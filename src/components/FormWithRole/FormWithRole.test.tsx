import { render, screen } from '@testing-library/react'
import { FormWithRole } from './FormWithRole'

describe('Form with role', () => {
  it('should render components', () => {
    render(<FormWithRole />)
    const textboxEL = screen.getByRole('textbox')
    expect(textboxEL).toBeInTheDocument()
    const checkboxEL = screen.getByRole('checkbox')
    expect(checkboxEL).toBeInTheDocument()
    const comboboxEL = screen.getByRole('combobox')
    expect(comboboxEL).toBeInTheDocument()
    const buttonEL = screen.getByRole('button')
    expect(buttonEL).toBeInTheDocument()
  })
})
