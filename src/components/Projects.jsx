import { ArrowDownRight, ExternalLink, Github, Microscope, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/profile';
import { useReveal } from '../hooks/useReveal';

export default function Projects() {
  const [ref, isVisible] = useReveal();
  const featured = PROJECTS.find((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="section">
      <div ref={ref} className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="section-header">
          <span className="section-kicker">03 // Featured Projects</span>
          <h2 className="section-title">Selected Research &amp; Engineering Work</h2>
          <p className="section-subtitle">
            Highlighting multimodal neuroimaging classification research alongside automated cloud
            deployment and accessibility system design.
          </p>
        </div>

        {featured && (
          <article className="card card-interactive project-featured">
            <span className="project-badge">
              <Sparkles size={13} />
              {featured.badge}
            </span>

            <h3 className="project-featured-title">{featured.title}</h3>
            <p className="project-summary">{featured.summary}</p>

            <div className="project-breakdown">
              <div className="breakdown-box">
                <div className="breakdown-label">Problem</div>
                <p className="breakdown-text">{featured.problem}</p>
              </div>
              <div className="breakdown-box">
                <div className="breakdown-label">Proposed Methodology</div>
                <p className="breakdown-text">{featured.methodology}</p>
              </div>
              <div className="breakdown-box">
                <div className="breakdown-label">Outcomes</div>
                <p className="breakdown-text">{featured.outcomes}</p>
              </div>
            </div>

            <div className="project-footer">
              <div className="tag-list">
                {featured.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <a href="#research" className="btn btn-primary" style={{ padding: '9px 16px' }}>
                  <Microscope size={16} />
                  Explore R&amp;D Workflow
                  <ArrowDownRight size={15} />
                </a>
                <a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '9px 16px' }}
                >
                  <Github size={16} />
                  GitHub Profile
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </article>
        )}

        <div className="projects-secondary-grid">
          {others.map((project) => (
            <article key={project.id} className="card card-interactive project-card">
              <div>
                <span className="project-badge">{project.badge}</span>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-summary" style={{ marginBottom: '14px' }}>
                  {project.summary}
                </p>

                <div className="project-mini-details">
                  <p className="project-mini-row">
                    <strong>Problem: </strong>
                    {project.problem}
                  </p>
                  <p className="project-mini-row">
                    <strong>Approach: </strong>
                    {project.methodology}
                  </p>
                  <p className="project-mini-row">
                    <strong>Outcome: </strong>
                    {project.outcomes}
                  </p>
                </div>
              </div>

              <div className="project-footer" style={{ paddingTop: '16px' }}>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-link"
                >
                  <Github size={15} />
                  View on GitHub
                  <ExternalLink size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
