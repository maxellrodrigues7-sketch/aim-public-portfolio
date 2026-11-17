import type { AudienceId } from '../types/portfolio'

interface HeroProps {
  activeAudience: AudienceId
  onAudienceSelect: (audience: AudienceId) => void
}

export function Hero({ activeAudience, onAudienceSelect }: HeroProps) {
  return <section className="hero" aria-labelledby="hero-title">
    <p className="eyebrow">AIM / AI AND MAXELL</p>
    <h1 id="hero-title">Human judgment.<br /><span>Amplified.</span></h1>
    <p className="hero-copy">A public portfolio for thoughtful systems, practical automation, and interfaces made to move real work forward.</p>
    <div className="audience-actions" aria-label="Choose your path">
      <button className={activeAudience === 'recruiter' ? 'active' : ''} aria-pressed={activeAudience === 'recruiter'} onClick={() => onAudienceSelect('recruiter')}>Hire Maxell <span>↗</span></button>
      <button className={activeAudience === 'client' ? 'active' : ''} aria-pressed={activeAudience === 'client'} onClick={() => onAudienceSelect('client')}>Work with Maxell <span>↗</span></button>
    </div>
    <div className="system-orbit" aria-hidden="true"><i /><i /><i /><b>AIM</b></div>
  </section>
}

