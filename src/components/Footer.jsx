import { Container } from 'react-bootstrap';
import { ArrowUp, Download } from 'lucide-react';
import { PROFILE } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-top py-4 mt-4">
      <Container className="d-flex flex-wrap justify-content-between align-items-center gap-3 small text-secondary">
        <div>
          <strong className="text-light">{PROFILE.name}</strong> · M.Sc Software Systems, Kongu
          Engineering College
        </div>

        <div className="d-flex flex-wrap gap-3">
          <a
            href={PROFILE.contact.github}
            target="_blank"
            rel="noreferrer"
            className="text-secondary text-decoration-none"
          >
            GitHub
          </a>
          <a
            href={PROFILE.contact.leetcode}
            target="_blank"
            rel="noreferrer"
            className="text-secondary text-decoration-none"
          >
            LeetCode
          </a>
          <a
            href={PROFILE.resumeFile}
            download={PROFILE.resumeDownloadName}
            className="text-secondary text-decoration-none d-inline-flex align-items-center gap-1"
          >
            <Download size={13} />
            Resume
          </a>
          <a href="#top" className="text-secondary text-decoration-none d-inline-flex align-items-center gap-1">
            <ArrowUp size={13} />
            Top
          </a>
        </div>
      </Container>
    </footer>
  );
}
