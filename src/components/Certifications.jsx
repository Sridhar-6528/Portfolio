import { Award, ExternalLink, ShieldCheck, Trophy } from 'lucide-react';
import { CERTIFICATIONS_AND_ACHIEVEMENTS } from '../data/profile';
import { useReveal } from '../hooks/useReveal';

export default function Certifications() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="certifications" className="section">
      <div ref={ref} className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="section-header">
          <span className="section-kicker">06 // Certifications &amp; Achievements</span>
          <h2 className="section-title">Verified Credentials &amp; Problem Solving</h2>
          <p className="section-subtitle">
            Technical certifications and competitive programming milestones documented on my resume.
          </p>
        </div>

        <div className="certs-grid">
          {CERTIFICATIONS_AND_ACHIEVEMENTS.map((item) => {
            const isAchievement = item.type === 'Achievement';
            const Icon = isAchievement ? Trophy : item.id === 'aws-cloud' ? ShieldCheck : Award;

            return (
              <article key={item.id} className="card card-interactive cert-card">
                <div>
                  <div className="cert-top">
                    <div className={`icon-badge ${isAchievement ? '' : 'icon-badge-indigo'}`}>
                      <Icon size={18} />
                    </div>
                    <span
                      className={`cert-type-badge ${isAchievement ? 'achievement' : ''}`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <h3 className="cert-title">{item.title}</h3>
                  <div className="cert-issuer">{item.issuer}</div>
                  <p className="cert-desc">{item.description}</p>
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-link"
                  >
                    {item.linkLabel}
                    <ExternalLink size={13} />
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
