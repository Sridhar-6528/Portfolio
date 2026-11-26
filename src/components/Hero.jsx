import { useState } from 'react';
import { ArrowRight, Code2, Download, Github, Mail, MapPin } from 'lucide-react';
import { PROFILE } from '../data/profile';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            <span>M.Sc Software Systems · Kongu Engineering College</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-accent">{PROFILE.name}</span>
          </h1>

          <p className="hero-role">{PROFILE.headlineRole}</p>

          <p className="hero-tagline">{PROFILE.tagline}</p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <ArrowRight size={17} />
            </a>
            <a
              href={PROFILE.resumeFile}
              download={PROFILE.resumeDownloadName}
              className="btn btn-secondary"
            >
              <Download size={17} />
              Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              <Mail size={17} />
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href={PROFILE.contact.github}
              target="_blank"
              rel="noreferrer"
              className="social-pill"
            >
              <Github size={15} />
              <span>github.com/{PROFILE.contact.githubHandle}</span>
            </a>
            <a
              href={PROFILE.contact.leetcode}
              target="_blank"
              rel="noreferrer"
              className="social-pill"
            >
              <Code2 size={15} />
              <span>LeetCode · 150+ Solved</span>
            </a>
            <span className="social-pill">
              <MapPin size={15} />
              <span>{PROFILE.contact.shortLocation}</span>
            </span>
          </div>
        </div>

        <aside className="card hero-profile-card" aria-label="Profile overview and portrait">
          <div className={`profile-frame ${!imgError ? 'has-photo' : ''}`}>
            {!imgError ? (
              <>
                <img
                  src={PROFILE.photo}
                  alt={`Portrait of ${PROFILE.name}`}
                  className="profile-photo"
                  loading="eager"
                  decoding="async"
                  onError={() => setImgError(true)}
                />
                <div className="profile-photo-scrim" aria-hidden="true" />
                <div className="profile-photo-caption">
                  <span className="profile-caption-name">{PROFILE.name}</span>
                  <span className="profile-caption-sub">M.Sc Software Systems</span>
                </div>
              </>
            ) : (
              <>
                <div className="profile-frame-grid" aria-hidden="true" />
                <div className="profile-avatar-ring">
                  <span className="profile-avatar-initials">{PROFILE.initials}</span>
                </div>
                <p className="profile-placeholder-title">{PROFILE.name}</p>
                <p className="profile-placeholder-note">M.Sc Software Systems</p>
              </>
            )}
          </div>

          <div className="profile-metrics">
            {PROFILE.quickStats.map((stat) => (
              <div key={stat.label} className="metric-chip">
                <div className="metric-chip-value">{stat.value}</div>
                <div className="metric-chip-label">{stat.detail}</div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
