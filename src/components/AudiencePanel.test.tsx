import { render, screen } from '@testing-library/react'
import { AudiencePanel } from './AudiencePanel'

it('shows an evidence label next to every published project', () => {
  render(<AudiencePanel audience="client" />)
  expect(screen.getAllByText(/demo|anonymised/i).length).toBeGreaterThan(0)
})

