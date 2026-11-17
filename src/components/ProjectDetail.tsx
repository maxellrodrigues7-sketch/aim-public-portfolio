import { useEffect } from 'react'
import type { Project } from '../types/portfolio'

export function ProjectDetail({ project, onDismiss }: { project?: Project; onDismiss: () => void }) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') onDismiss() }
    addEventListener('keydown', closeOnEscape)
    return () => removeEventListener('keydown', closeOnEscape)
  }, [onDismiss])
  if (!project) return <section className="project-detail empty" role="status"><h2>Project not found.</h2><p>This public portfolio only shows approved case studies.</p><button onClick={onDismiss}>Back to projects</button></section>
  return <section className="project-detail" role="dialog" aria-modal="true" aria-labelledby="detail-title">
    <button className="close" onClick={onDismiss} aria-label="Close project detail">×</button><p className="eyebrow">CASE STUDY / {project.slug.toUpperCase()}</p>
    <h2 id="detail-title">{project.title}</h2><p className="detail-summary">{project.summary}</p>
    <div className="detail-grid"><div><strong>Challenge</strong><p>{project.challenge}</p></div><div><strong>Contribution</strong><p>{project.contribution}</p></div><div><strong>Approach</strong><p>{project.solution}</p></div><div><strong>Outcome</strong><p>{project.outcome}</p></div></div>
    <p className="evidence-label">{project.evidenceLabel}</p>
  </section>
}

