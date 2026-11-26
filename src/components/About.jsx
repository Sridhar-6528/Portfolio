import { BrainCircuit, CloudCog, Code, Terminal } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { useReveal } from '../hooks/useReveal';

const INTEREST_CARDS = [
  {
    icon: Terminal,
    title: 'Software Development',
    desc: 'Applying Python, C++, C, Java, React, and MongoDB to build practical applications.',
  },
  {
    icon: BrainCircuit,
    title: 'Machine Learning & R&D',
    desc: "Multimodal deep learning with MRI and DaTscan SPECT for Parkinson's classification.",
  },
  {
    icon: CloudCog,
    title: 'Cloud & CI/CD Automation',
    desc: 'Declarative AWS provisioning and deployment using Terraform, Docker, and Jenkins.',
  },
  {
    icon: Code,
    title: 'Problem Solving & DSA',
    desc: '150+ problems solved on LeetCode with continuous focus on analytical thinking.',
  },
];

export default function About() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="about" className="section">
      <div ref={ref} className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="section-header">
          <span className="section-kicker">01 // About Me</span>
          <h2 className="section-title">Engineering Foundations &amp; Applied Research</h2>
          <p className="section-subtitle">
            Combining software systems coursework with hands-on cloud automation and medical imaging AI.
          </p>
        </div>

        <div className="about-grid">
          <div className="card about-panel">
            <p className="about-body">{PROFILE.aboutSummary}</p>
            <div className="about-highlights">
              {INTEREST_CARDS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="highlight-box">
                    <div className="highlight-box-title">
                      <Icon size={16} color="var(--accent-cyan)" />
                      <span>{item.title}</span>
                    </div>
                    <p className="highlight-box-text">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card about-facts" aria-label="Academic and Profile Summary">
            <div className="fact-row">
              <span className="fact-label">Full Name</span>
              <span className="fact-value">{PROFILE.name}</span>
            </div>
            <div className="fact-row">
              <span className="fact-label">Current Degree</span>
              <span className="fact-value">M.Sc Software Systems (2023 – 2028)</span>
            </div>
            <div className="fact-row">
              <span className="fact-label">Institution</span>
              <span className="fact-value">Kongu Engineering College, Perundurai</span>
            </div>
            <div className="fact-row">
              <span className="fact-label">CGPA</span>
              <span className="fact-value">6.81 (Up to 6th semester)</span>
            </div>
            <div className="fact-row">
              <span className="fact-label">Primary R&amp;D</span>
              <span className="fact-value">Parkinson&apos;s Classification (MRI &amp; DaTSCAN)</span>
            </div>
            <div className="fact-row">
              <span className="fact-label">Location</span>
              <span className="fact-value">{PROFILE.contact.shortLocation}, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
