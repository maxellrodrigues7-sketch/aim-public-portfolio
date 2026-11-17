import { portfolioContent, projects } from '../data/portfolio'
import type { AudienceId } from '../types/portfolio'

export function AudiencePanel({ audience }: { audience: AudienceId }) {
  const content = portfolioContent[audience]
  return <section className="audience-panel" aria-labelledby="audience-title">
    <div><p className="eyebrow">{content.eyebrow}</p><h2 id="audience-title">{content.title}</h2><p>{content.introduction}</p></div>
    <ul>{content.proofPoints.map((point) => <li key={point}><span>✦</span>{point}</li>)}</ul>
    <div className="evidence-note"><strong>Trust note</strong><p>{projects[0].evidenceLabel}</p></div>
  </section>
}

