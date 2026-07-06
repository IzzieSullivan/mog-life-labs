export default function Footer() {
  return (
    <>
      <div className="shell footer">
        <div>
          <div className="logo logo--sm">
            <span className="logo__mog">MOG</span>
            <span className="logo__life">LIFE</span>
            <span className="logo__labs">LABS</span>
          </div>
          <div className="footer__tagline">
            Mog Life · Coaching aesthetics, energy &amp; vitality
          </div>
        </div>
        <div className="footer__socials">
          <a
            href="https://x.com/FattyNoNatty"
            target="_blank"
            rel="noopener noreferrer"
            className="tag tag--link"
          >
            X / @FattyNoNatty
          </a>
          {/* TODO: swap in the real Instagram URL once it's ready */}
          <a href="#" className="tag tag--link">
            Instagram
          </a>
        </div>
      </div>

      <div className="shell legal">
        <span>© 2026 MOG LIFE LABS. All rights reserved.</span>
        <span className="legal__kicker">RESULTS VARY. EFFORT DOESN'T.</span>
      </div>
    </>
  );
}
