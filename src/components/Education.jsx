import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../data/profile';
import { useReveal } from '../hooks/useReveal';

export default function Education() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="education" className="section">
      <div ref={ref} className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="section-header">
          <span className="section-kicker">05 // Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            Formal academic progression in Software Systems and secondary schooling.
          </p>
        </div>

        <div className="timeline">
          {EDUCATION.map((edu) => (
            <div key={edu.degree} className="card timeline-item">
              <span
                className={`timeline-dot ${edu.current ? 'current' : ''}`}
                aria-hidden="true"
              />
              <div className="edu-top">
                <h3 className="edu-degree">{edu.degree}</h3>
                <span className="edu-period">{edu.period}</span>
              </div>

              <p className="edu-institution">
                <GraduationCap
                  size={16}
                  style={{ verticalAlign: '-3px', marginRight: '7px', color: 'var(--accent-cyan)' }}
                />
                {edu.institution}
              </p>

              {edu.score && (
                <div className="edu-meta">
                  <span className="edu-score">{edu.score}</span>
                </div>
              )}

              <p className="edu-details">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
