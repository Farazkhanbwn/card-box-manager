import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CustomInput from './custom-input'
import { CustomInputTypes } from './custom-input.types'

describe('Page', () => {
  test('Check input is exist?', () => {
    render(<CustomInput type={CustomInputTypes.PASSWORD} />)

    const customInput = screen.getByTestId('custom-input')

    expect(customInput).toBeInTheDocument()
  })

  it('Input Value Validation', () => {
    render(<CustomInput type={CustomInputTypes.EMAIL} value={123} />)

    const getInputElement = screen.getByTestId('custom-input')

    expect(getInputElement).toHaveValue('123')
  })

  it('Expected Name faraz', () => {
    render(<CustomInput type={CustomInputTypes.TEXT} name="faraz" />)

    const heading = screen.getByTestId('custom-input')

    expect(heading).toHaveAttribute('name', 'faraz')
  })
})
