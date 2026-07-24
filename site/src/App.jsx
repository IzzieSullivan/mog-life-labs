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

function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <Marquee />
        <WhatYouGet />
        <Transformations />
        <Truth />
        <Coach />
        <Apply />
      </main>
      <Footer />
    </div>
  );
}

export default App;
