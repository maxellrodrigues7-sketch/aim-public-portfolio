import { useEffect, useState } from 'react'
import { AudiencePanel } from './components/AudiencePanel'
import { Hero } from './components/Hero'
import { Header } from './components/Header'
import { ContactPanel } from './components/ContactPanel'
import { ProjectDetail } from './components/ProjectDetail'
import { ProjectGrid } from './components/ProjectGrid'
import { projects } from './data/portfolio'
import type { AudienceId } from './types/portfolio'
import './styles.css'

export default function App() {
  const [audience, setAudience] = useState<AudienceId>('recruiter')
  const [slug, setSlug] = useState(() => new URLSearchParams(location.search).get('project'))
  useEffect(() => { const sync = () => setSlug(new URLSearchParams(location.search).get('project')); addEventListener('popstate', sync); return () => removeEventListener('popstate', sync) }, [])
  const selectProject = (next: string) => { history.pushState({}, '', `?project=${next}`); setSlug(next) }
  const clearProject = () => { history.pushState({}, '', location.pathname); setSlug(null) }
  const selected = slug ? projects.find((project) => project.slug === slug) : undefined
  return <div className="app-shell"><Header /><main id="main-content"><Hero activeAudience={audience} onAudienceSelect={setAudience} /><AudiencePanel audience={audience} /><ProjectGrid projects={projects} onProjectSelect={selectProject} /><ContactPanel />{slug && <ProjectDetail project={selected} onDismiss={clearProject} />}</main></div>
}

