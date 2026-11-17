import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProjectDetail } from './ProjectDetail'
import { projects } from '../data/portfolio'

it('explains an unknown project safely', () => {
  render(<ProjectDetail project={undefined} onDismiss={() => undefined} />)
  expect(screen.getByText(/project not found/i)).toBeVisible()
})

it('closes the project detail when Escape is pressed', async () => {
  const dismiss = vi.fn()
  render(<ProjectDetail project={projects[0]} onDismiss={dismiss} />)
  await userEvent.setup().keyboard('{Escape}')
  expect(dismiss).toHaveBeenCalledTimes(1)
})

it('moves focus to the dialog close control when opened', () => {
  render(<ProjectDetail project={projects[0]} onDismiss={() => undefined} />)
  expect(screen.getByRole('button', { name: /close project detail/i })).toHaveFocus()
})

