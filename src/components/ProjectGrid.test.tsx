import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProjectGrid } from './ProjectGrid'
import { projects } from '../data/portfolio'

it('selects a case study through a labelled button', async () => {
  const select = vi.fn()
  render(<ProjectGrid projects={projects} onProjectSelect={select} />)
  await userEvent.setup().click(screen.getByRole('button', { name: /view category workbench/i }))
  expect(select).toHaveBeenCalledWith('category-workbench')
})

