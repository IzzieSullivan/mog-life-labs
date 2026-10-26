import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import WhatYouGet from './components/WhatYouGet';
import Transformations from './components/Transformations';
import Truth from './components/Truth';
import Coach from './components/Coach';
import Apply from './components/Apply';
import Footer from './components/Footer';
import Stack from './components/Stack';
import Start from './components/Start';
import Coaching from './components/Coaching';
import TransformationsPage from './components/TransformationsPage';

function getTrafficSource() {
  const params = new URLSearchParams(window.location.search);
  const rawSource = (
    params.get('source') ||
    params.get('utm_source') ||
    'direct'
  ).trim().toLowerCase();
  const aliases = {
    twitter: 'x',
    'twitter.com': 'x',
    'x.com': 'x',
    instagram: 'instagram',
    ig: 'instagram',
    substack: 'substack',
  };
  const safeSource = rawSource.replace(/[^a-z0-9_-]/g, '').slice(0, 40);

  return aliases[rawSource] || safeSource || 'direct';
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const isStackPage = path === '/the-stack';
  const isStartPage = path === '/start';
  const isCoachingPage = path === '/coaching';
  const isTransformationsPage = path === '/transformations';
  const source = getTrafficSource();

  if (isStartPage) {
    return (
      <div className="page page--start">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <main id="main-content">
          <Start source={source} />
        </main>
      </div>
    );
  }

  return (
    <div className="page">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        {isStackPage ? (
          <Stack />
        ) : isTransformationsPage ? (
          <TransformationsPage
            source={source === 'direct' ? 'transformations-page' : source}
          />
        ) : isCoachingPage ? (
          <Coaching source={source === 'direct' ? 'coaching-page' : source} />
        ) : (
          <>
            <Hero />
            <Marquee />
            <WhatYouGet />
            <Transformations />
            <Truth />
            <Coach />
            <Apply source={source === 'direct' ? 'website' : source} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
