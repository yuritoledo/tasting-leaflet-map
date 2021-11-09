import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Map from './Map'

describe('Map page', () => {
  it('should change the button text to the default or original', () => {
    render(<Map />)

    expect(
      screen.getByText('Default color'),
    ).toBeInTheDocument()

    userEvent.click(
      screen.getByText('Default color'),
    )

    expect(
      screen.getByText('Original color'),
    ).toBeInTheDocument()
  })
})
