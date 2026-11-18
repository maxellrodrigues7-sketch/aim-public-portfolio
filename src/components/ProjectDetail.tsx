import { useEffect, useRef } from 'react'
import type { Project } from '../types/portfolio'

export function ProjectDetail({ project, onDismiss }: { project?: Project; onDismiss: () => void }) {
  const dialogRef = useRef<HTMLElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const priorFocus = useRef<HTMLElement | null>(document.activeElement instanceof HTMLElement ? document.activeElement : null)
  useEffect(() => {
    closeRef.current?.focus()
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { onDismiss(); return }
      if (event.key !== 'Tab' || !dialogRef.current) return
      const controls = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])'))
      if (controls.length === 0) return
      const first = controls[0]
      const last = controls[controls.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    addEventListener('keydown', handleKeydown)
    return () => { removeEventListener('keydown', handleKeydown); priorFocus.current?.focus() }
  }, [onDismiss])
  if (!project) return <section ref={dialogRef} className="project-detail empty" role="dialog" aria-modal="true" aria-labelledby="detail-title"><h2 id="detail-title">Project not found.</h2><p>This public portfolio only shows approved case studies.</p><button ref={closeRef} onClick={onDismiss}>Back to projects</button></section>
  return <section ref={dialogRef} className="project-detail" role="dialog" aria-modal="true" aria-labelledby="detail-title">
    <button ref={closeRef} className="close" onClick={onDismiss} aria-label="Close project detail">×</button><p className="eyebrow">CASE STUDY / {project.slug.toUpperCase()}</p>
    <h2 id="detail-title">{project.title}</h2><p className="detail-summary">{project.summary}</p>
    <div className="detail-grid"><div><strong>Challenge</strong><p>{project.challenge}</p></div><div><strong>Contribution</strong><p>{project.contribution}</p></div><div><strong>Approach</strong><p>{project.solution}</p></div><div><strong>Outcome</strong><p>{project.outcome}</p></div></div>
    <p className="evidence-label">{project.evidenceLabel}</p>
  </section>
}

