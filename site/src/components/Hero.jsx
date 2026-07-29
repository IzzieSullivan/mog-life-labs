export default function Hero() {
  return (
    <div className="shell bordered-x hero">
      <div className="hero__content">
        <div className="hero__eyebrow">
          <span className="hero__eyebrow-rule" />
          Mog Life · Aesthetics · Vitality
        </div>
        <h1 className="hero__title">
          Look like <br />
          you{' '}
          <span className="hero__title-accent">
            actually <br />
            lift.
          </span>
        </h1>
        <p className="hero__body">
          Coaching aesthetics, energy &amp; vitality with the right tools. No
          fake positivity, no cookie-cutter templates — just a plan built
          around your body and the discipline to actually run it.
        </p>
        <div className="hero__actions">
          <a href="#apply" className="btn btn--hero">
            See If We're A Fit
          </a>
          <a href="#results" className="link-underline">
            Show Me Proof
          </a>
        </div>
        <div className="hero__stats">
          <div>
            <div className="stat__value">
              &lt;10<span className="stat__unit">%</span>
            </div>
            <div className="stat__label">My own body fat</div>
          </div>
          <div>
            <div className="stat__value">1:1</div>
            <div className="stat__label">Coach you talk to</div>
          </div>
          <div>
            <div className="stat__value">0</div>
            <div className="stat__label">Templates, ever</div>
          </div>
        </div>
      </div>
      <div className="hero__photo">
        <img
          className="hero__photo-image"
          src="/images/brian-gym-hero.jpg"
          alt="Brian Sullivan, MOG LIFE LABS coach"
        />
        <div className="hero__photo-corner" />
        <div className="hero__caption">
          <div className="hero__caption-title">Powered by spite</div>
          <div className="hero__caption-sub">
            And a stupid amount of consistency.
          </div>
        </div>
      </div>
    </div>
  );
}
