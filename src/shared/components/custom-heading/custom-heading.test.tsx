import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CustomHeading from './custom-heading'

describe('Page', () => {
  it('renders a heading', () => {
    render(<CustomHeading type={'primary'} />)

    const heading = screen.getByTestId('custom-heading')

    expect(heading).toBeInTheDocument()
  })

  it('renders a heading', () => {
    render(<CustomHeading type={'primary'}>Test Value</CustomHeading>)

    const heading = screen.getByText(/test value/i)

    expect(heading).toBeInTheDocument()
  })

  it('renders a heading', () => {
    render(<CustomHeading type={'secondary'}>Test str</CustomHeading>)

    const heading = screen.getByTestId('custom-heading')

    expect(heading).toBeInTheDocument()
  })
})
