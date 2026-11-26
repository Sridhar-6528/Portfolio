import { ArrowUp, Download } from 'lucide-react';
import { PROFILE } from '../data/profile';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong style={{ color: 'var(--text-primary)' }}>{PROFILE.name}</strong> · M.Sc Software
          Systems, Kongu Engineering College
        </div>

        <div className="footer-links">
          <a href={PROFILE.contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={PROFILE.contact.leetcode} target="_blank" rel="noreferrer">
            LeetCode
          </a>
          <a href={PROFILE.resumeFile} download={PROFILE.resumeDownloadName}>
            <Download size={13} style={{ verticalAlign: '-2px', marginRight: '4px' }} />
            Resume
          </a>
          <a href="#top">
            <ArrowUp size={13} style={{ verticalAlign: '-2px', marginRight: '4px' }} />
            Top
          </a>
        </div>
      </div>
    </footer>
  );
}
