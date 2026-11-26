import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { PROFILE } from '../data/profile';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'R&D Focus' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('about');

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="brand" aria-label="Sridhar S Home">
          <span className="brand-mark">{PROFILE.initials}</span>
          <span>{PROFILE.name}</span>
        </a>

        <nav aria-label="Primary Navigation">
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeId === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a
            href={PROFILE.resumeFile}
            download={PROFILE.resumeDownloadName}
            className="btn btn-secondary nav-desktop-cta"
            style={{ padding: '8px 14px', fontSize: '0.86rem' }}
          >
            <Download size={15} />
            Resume
          </a>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-drawer" role="dialog" aria-label="Mobile Navigation">
          <div className="mobile-drawer-links">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="mobile-drawer-link"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={PROFILE.resumeFile}
            download={PROFILE.resumeDownloadName}
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={handleNavClick}
          >
            <Download size={16} />
            Download Resume (PDF)
          </a>
        </div>
      )}
    </header>
  );
}
