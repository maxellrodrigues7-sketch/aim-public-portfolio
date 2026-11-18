import type { Project } from '../types/portfolio'

export function ProjectGrid({ projects, onProjectSelect }: { projects: Project[]; onProjectSelect: (slug: string) => void }) {
  return <section className="projects" id="projects" aria-labelledby="projects-title">
    <p className="eyebrow">SELECTED WORK / 03</p><h2 id="projects-title">Systems with a human center.</h2>
    <div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.slug}>
      <span>0{index + 1}</span><h3>{project.title}</h3><p>{project.summary}</p>
      <div>{project.tags.map((tag) => <small key={tag}>{tag}</small>)}</div>
      <button onClick={() => onProjectSelect(project.slug)}>View {project.title} <b>↗</b></button>
    </article>)}</div>
  </section>
}

