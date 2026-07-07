import { useState } from 'react';

const LINKS = [
  { href: '#results', label: 'Transformations' },
  { href: '#truth', label: 'How It Works' },
  { href: '#coach', label: 'About Brian' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav">
      <div className="shell nav__inner">
        <div className="logo">
          <span className="logo__mog">MOG</span>
          <span className="logo__life">LIFE</span>
          <span className="logo__labs">LABS</span>
        </div>
        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
        <div className={`nav__links${open ? ' is-open' : ''}`}>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav__link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            className="btn btn--nav"
            onClick={() => setOpen(false)}
          >
            See If You Qualify
          </a>
        </div>
      </div>
    </div>
  );
}
