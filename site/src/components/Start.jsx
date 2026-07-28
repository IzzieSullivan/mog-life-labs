import { useEffect } from 'react';
import Apply from './Apply';

const INSTAGRAM_URL = 'https://www.instagram.com/moglifelabs/';
const X_URL = 'https://x.com/MogLifeLabs';
const SUBSTACK_URL = import.meta.env.VITE_SUBSTACK_URL || '';

export default function Start({ source }) {
  useEffect(() => {
    const previousTitle = document.title;
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonical?.getAttribute('href');

    document.title = 'Start Here — MOG LIFE LABS';
    canonical?.setAttribute('href', 'https://www.moglifelabs.com/start');

    return () => {
      document.title = previousTitle;
      if (previousCanonical) canonical?.setAttribute('href', previousCanonical);
    };
  }, []);

  const sourceQuery = `?source=${encodeURIComponent(source)}`;

  return (
    <div className="start">
      <header className="start__header">
        <a className="logo logo--link" href={`/${sourceQuery}`} aria-label="MOG LIFE LABS home">
          <span className="logo__mog">MOG</span>
          <span className="logo__life">LIFE</span>
          <span className="logo__labs">LABS</span>
        </a>
        <div className="start__source">FROM {source.toUpperCase()}</div>
      </header>

      <section className="start__intro">
        <div className="start__eyebrow">YOUR NEXT MOVE</div>
        <h1>
          Start <span>here.</span>
        </h1>
        <p>
          Coaching, proof, tools, and the shortest route to doing something
          useful with the motivation you have right now.
        </p>
      </section>

      <nav className="start__links" aria-label="MOG LIFE LABS links">
        <a href={`/${sourceQuery}`} className="start-link">
          <span className="start-link__number">01</span>
          <span>
            <strong>Main website</strong>
            <small>Coaching, results, and how it works</small>
          </span>
          <span className="start-link__arrow" aria-hidden="true">↗</span>
        </a>
        <a href={`/the-stack${sourceQuery}`} className="start-link">
          <span className="start-link__number">02</span>
          <span>
            <strong>The Stack</strong>
            <small>The products, places, and tools we actually use</small>
          </span>
          <span className="start-link__arrow" aria-hidden="true">↗</span>
        </a>
      </nav>

      <Apply source={source} landingPage="/start" compact />

      <footer className="start__footer">
        <div>
          <div className="start__footer-label">Keep up</div>
          <p>Follow the work. Skip the motivational wallpaper.</p>
        </div>
        <div className="start__socials" aria-label="Social media">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MOG LIFE LABS on Instagram"
          >
            IG
          </a>
          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MOG LIFE LABS on X"
          >
            X
          </a>
          {SUBSTACK_URL ? (
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MOG LIFE LABS on Substack"
            >
              S
            </a>
          ) : (
            <span aria-label="Substack link coming soon" title="Substack link coming soon">
              S
            </span>
          )}
        </div>
      </footer>
    </div>
  );
}
