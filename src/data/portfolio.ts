import type { AudienceContent, AudienceId, Project } from '../types/portfolio'

export const portfolioContent: Record<AudienceId, AudienceContent> = {
  recruiter: {
    eyebrow: 'AIM / Talent view',
    title: 'Built for hiring teams.',
    introduction: 'A focused view of product thinking, practical automation, and thoughtful interface design.',
    proofPoints: ['Product-minded problem solving', 'AI-assisted workflow design', 'Clear, accessible interfaces'],
    primaryAction: 'Explore selected work'
  },
  client: {
    eyebrow: 'AIM / Client view',
    title: 'Built for ambitious work.',
    introduction: 'A focused view of how complex workflows can become clearer, calmer, and more useful.',
    proofPoints: ['Workflow improvement', 'Practical internal tools', 'From concept to usable interface'],
    primaryAction: 'See relevant work'
  }
}

export const projects: Project[] = [
  {
    slug: 'category-workbench',
    title: 'Category Workbench',
    summary: 'A concept for making structured category work easier to review and progress.',
    challenge: 'Complex category work can be difficult to navigate when information and decisions are spread across multiple steps.',
    contribution: 'Product framing, interaction design, and implementation exploration.',
    solution: 'A focused workbench concept that brings key category actions into a clear workflow.',
    outcome: 'A portfolio-ready concept demonstrating process-focused interface thinking.',
    tags: ['Workflow design', 'Frontend', 'Product thinking'],
    evidenceLabel: 'Demo case study — outcomes are intentionally not published.'
  },
  {
    slug: 'ticket-dashboard',
    title: 'Production Ticket Dashboard',
    summary: 'A concept for turning operational ticket information into an easier-to-scan dashboard.',
    challenge: 'Operational queues require a fast way to surface priority, ownership, and next actions.',
    contribution: 'Information hierarchy and interface concept development.',
    solution: 'A dashboard-oriented presentation of tickets and their operational status.',
    outcome: 'A demo case study focused on clarity and decision support.',
    tags: ['Dashboard UX', 'Operations', 'Data presentation'],
    evidenceLabel: 'Demo case study — examples are anonymised and not live operational data.'
  },
  {
    slug: 'agent-world',
    title: 'Maxell’s Agent World',
    summary: 'A personal AI ecosystem concept with explicit public/private boundaries.',
    challenge: 'An AI assistant experience must remain trustworthy when it represents tasks, progress, and permissions.',
    contribution: 'System concept, trust model, and local companion architecture.',
    solution: 'A public-facing story separated from private, local-only task and approval workflows.',
    outcome: 'A demonstrable approach to transparent AI product design.',
    tags: ['AI product design', 'Trust & safety', 'System design'],
    evidenceLabel: 'Demo case study — no live agents, connectors, or local data are exposed.'
  }
]

