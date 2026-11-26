import { useState } from 'react';
import { Check, Code2, Copy, ExternalLink, Github, Mail, MapPin, Phone, Send } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const [ref, isVisible] = useReveal();
  const [copiedKey, setCopiedKey] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [statusMsg, setStatusMsg] = useState('');

  const handleCopy = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(''), 2000);
    } catch {
      setCopiedKey('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formState.subject.trim() || `Portfolio Inquiry from ${formState.name.trim() || 'Visitor'}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:${PROFILE.contact.email}?subject=${subject}&body=${body}`;
    setStatusMsg('Opening your default mail client addressed to sridharkumar2306@gmail.com.');
  };

  return (
    <section id="contact" className="section">
      <div ref={ref} className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="section-header">
          <span className="section-kicker">07 // Contact</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Open to software engineering internships, research collaborations, and academic inquiries.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-list">
            <div className="card contact-card">
              <div className="contact-card-left">
                <div className="icon-badge">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="contact-label">Email</div>
                  <a href={`mailto:${PROFILE.contact.email}`} className="contact-value">
                    {PROFILE.contact.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={() => handleCopy('email', PROFILE.contact.email)}
              >
                {copiedKey === 'email' ? <Check size={14} /> : <Copy size={14} />}
                {copiedKey === 'email' ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="card contact-card">
              <div className="contact-card-left">
                <div className="icon-badge">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="contact-label">Phone</div>
                  <a href={`tel:${PROFILE.contact.phone}`} className="contact-value">
                    {PROFILE.contact.phone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={() => handleCopy('phone', PROFILE.contact.phone)}
              >
                {copiedKey === 'phone' ? <Check size={14} /> : <Copy size={14} />}
                {copiedKey === 'phone' ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="card contact-card">
              <div className="contact-card-left">
                <div className="icon-badge">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="contact-label">Address</div>
                  <div className="contact-value">{PROFILE.contact.address}</div>
                </div>
              </div>
            </div>

            <div className="card contact-card">
              <div className="contact-card-left">
                <div className="icon-badge icon-badge-indigo">
                  <Github size={18} />
                </div>
                <div>
                  <div className="contact-label">GitHub</div>
                  <a
                    href={PROFILE.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-value"
                  >
                    github.com/{PROFILE.contact.githubHandle}
                  </a>
                </div>
              </div>
              <a
                href={PROFILE.contact.github}
                target="_blank"
                rel="noreferrer"
                className="copy-btn"
                aria-label="Open GitHub profile"
              >
                <ExternalLink size={14} />
                Open
              </a>
            </div>

            <div className="card contact-card">
              <div className="contact-card-left">
                <div className="icon-badge icon-badge-indigo">
                  <Code2 size={18} />
                </div>
                <div>
                  <div className="contact-label">LeetCode</div>
                  <a
                    href={PROFILE.contact.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-value"
                  >
                    leetcode.com/{PROFILE.contact.leetcodeHandle}
                  </a>
                </div>
              </div>
              <a
                href={PROFILE.contact.leetcode}
                target="_blank"
                rel="noreferrer"
                className="copy-btn"
                aria-label="Open LeetCode profile"
              >
                <ExternalLink size={14} />
                Open
              </a>
            </div>
          </div>

          <div className="card contact-form-card">
            <h3 style={{ fontSize: '1.22rem', marginBottom: '6px' }}>Send a Direct Message</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px' }}>
              Compose an email directly to {PROFILE.contact.email}.
            </p>

            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="form-row-2">
                <div className="form-field">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    className="form-input"
                    placeholder="Recruiter / Professor / Collaborator"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email">Your Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    className="form-input"
                    placeholder="you@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  className="form-input"
                  placeholder="Internship / R&D Collaboration / Inquiry"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  required
                  className="form-textarea"
                  placeholder="Write your message here..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              {statusMsg && <div className="form-feedback">{statusMsg}</div>}

              <button type="submit" className="btn btn-primary" style={{ justifySelf: 'start' }}>
                <Send size={16} />
                Compose Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
