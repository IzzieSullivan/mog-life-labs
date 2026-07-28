import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { href: '#results', label: 'Transformations' },
  { href: '#truth', label: 'How It Works' },
  { href: '#coach', label: 'About Brian' },
  { href: '/the-stack', label: 'The Stack', page: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const isHomePage = window.location.pathname === '/';

  useEffect(() => {
    if (!open) return undefined;

    const menu = menuRef.current;
    const firstLink = menu?.querySelector('a');
    const focusFrame = window.requestAnimationFrame(() => firstLink?.focus());

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !window.matchMedia('(max-width: 720px)').matches) {
        return;
      }

      const focusable = [...menu.querySelectorAll('a, button')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <nav className="nav" aria-label="Primary navigation">
      <div className="shell nav__inner">
        <a className="logo logo--link" href="/" aria-label="MOG LIFE LABS home">
          <span className="logo__mog">MOG</span>
          <span className="logo__life">LIFE</span>
          <span className="logo__labs">LABS</span>
        </a>
        <button
          ref={toggleRef}
          type="button"
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
        <div
          id="primary-menu"
          ref={menuRef}
          className={`nav__links${open ? ' is-open' : ''}`}
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.page || isHomePage ? link.href : `/${link.href}`}
              className="nav__link"
              aria-current={
                link.page && window.location.pathname.startsWith(link.href)
                  ? 'page'
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={isHomePage ? '#apply' : '/#apply'}
            className="btn btn--nav"
            onClick={() => setOpen(false)}
          >
            See If You Qualify
          </a>
        </div>
      </div>
    </nav>
  );
}
