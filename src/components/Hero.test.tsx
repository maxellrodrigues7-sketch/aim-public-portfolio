import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

it('lets a visitor enter the recruiter experience', async () => {
  const user = userEvent.setup()
  render(<App />)
  await user.click(screen.getByRole('button', { name: /hire maxell/i }))
  expect(screen.getByRole('heading', { name: /built for hiring teams/i })).toBeVisible()
})

