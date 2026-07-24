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
            href="https://x.com/MogLifeLabs"
            target="_blank"
            rel="noopener noreferrer"
            className="tag tag--link"
          >
            X / @MogLifeLabs
          </a>
          <a
            href="https://www.instagram.com/moglifelabs/"
            target="_blank"
            rel="noopener noreferrer"
            className="tag tag--link"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="shell legal">
        <p className="legal__copy">
          By submitting this site&apos;s application form, you agree that MOG
          LIFE LABS may use the information you provide to respond to your
          inquiry. We do not sell your personal information.
        </p>
        <p className="legal__copy">
          Coaching content is for educational purposes only and is not medical
          advice. Consult a qualified healthcare professional before beginning
          a new fitness, nutrition, or supplementation program. Individual
          results vary.
        </p>
        <div className="legal__bottom">
          <span>© 2026 MOG LIFE LABS. All rights reserved.</span>
          <span className="legal__kicker">RESULTS VARY. EFFORT DOESN&apos;T.</span>
        </div>
      </div>
    </>
  );
}
