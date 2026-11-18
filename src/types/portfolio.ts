export type AudienceId = 'recruiter' | 'client'

export interface Project {
  slug: string
  title: string
  summary: string
  challenge: string
  contribution: string
  solution: string
  outcome: string
  tags: string[]
  evidenceLabel: string
}

export interface AudienceContent {
  eyebrow: string
  title: string
  introduction: string
  proofPoints: string[]
  primaryAction: string
}

