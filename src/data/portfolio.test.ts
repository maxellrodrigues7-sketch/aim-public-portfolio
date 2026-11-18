import { portfolioContent, projects } from './portfolio'

describe('public portfolio content', () => {
  it('publishes both audience paths', () => {
    expect(Object.keys(portfolioContent).sort()).toEqual(['client', 'recruiter'])
  })

  it('labels every case study as demo or anonymised evidence', () => {
    expect(projects).not.toHaveLength(0)
    expect(projects.every((project) => /demo|anonymised/i.test(project.evidenceLabel))).toBe(true)
  })
})

