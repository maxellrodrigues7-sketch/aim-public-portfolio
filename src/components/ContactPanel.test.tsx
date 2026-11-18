import { render, screen } from '@testing-library/react'
import { ContactPanel } from './ContactPanel'

it('does not expose a submitting contact form before delivery is configured', () => {
  render(<ContactPanel />)
  expect(screen.queryByRole('button', { name: /send/i })).not.toBeInTheDocument()
  expect(screen.getByText(/contact channel will be added/i)).toBeVisible()
})

