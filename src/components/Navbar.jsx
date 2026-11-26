import { useEffect, useState } from 'react';
import { Badge, Button, Container, Nav, Navbar as BsNavbar } from 'react-bootstrap';
import { Download } from 'lucide-react';
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
  const [expanded, setExpanded] = useState(false);
  const [activeId, setActiveId] = useState('about');

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <BsNavbar
      sticky="top"
      expand="lg"
      variant="dark"
      expanded={expanded}
      onToggle={setExpanded}
      className="glass-nav border-bottom py-2"
    >
      <Container>
        <BsNavbar.Brand href="#top" className="d-flex align-items-center gap-2 font-display fw-bold">
          <Badge bg="info" text="dark" className="font-monospace px-2 py-2 rounded-3">
            {PROFILE.initials}
          </Badge>
          <span>{PROFILE.name}</span>
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="main-navbar-nav" />

        <BsNavbar.Collapse id="main-navbar-nav">
          <Nav className="mx-auto gap-lg-1 my-2 my-lg-0">
            {NAV_ITEMS.map((item) => (
              <Nav.Link
                key={item.id}
                href={`#${item.id}`}
                active={activeId === item.id}
                onClick={() => setExpanded(false)}
                className="px-3 rounded-2"
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>

          <Button
            as="a"
            href={PROFILE.resumeFile}
            download={PROFILE.resumeDownloadName}
            variant="outline-info"
            size="sm"
            className="d-inline-flex align-items-center gap-2 px-3 py-2 fw-semibold"
            onClick={() => setExpanded(false)}
          >
            <Download size={15} />
            Resume
          </Button>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
