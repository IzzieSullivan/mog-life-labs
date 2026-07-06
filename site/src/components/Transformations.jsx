const CASES = [
  { name: 'Marcus D.', delta: '−34 lb', meta: '20 weeks · "Hated every minute. Worth it."' },
  { name: 'Priya R.', delta: '+11 lb', meta: '16 weeks · lean muscle, first time visible abs' },
  { name: 'Jordan T.', delta: '−22 lb', meta: '24 weeks · recomp · "Dad bod, retired."' },
];

export default function Transformations() {
  return (
    <div id="results" className="shell bordered-x transformations">
      <div className="transformations__header">
        <h2 className="transformations__title">
          Receipts, not{' '}
          <span className="transformations__title-accent">promises</span>
        </h2>
        <div className="transformations__note">
          Everyone here did the work. So will you.
        </div>
      </div>
      <div className="transformations__grid">
        {CASES.map((c) => (
          <div className="tcard" key={c.name}>
            <div className="tcard__photos">
              <div className="tcard__photo tcard__photo--before">
                <span>BEFORE</span>
              </div>
              <div className="tcard__photo tcard__photo--after">
                <span>AFTER</span>
              </div>
            </div>
            <div className="tcard__body">
              <div className="tcard__row">
                <span className="tcard__name">{c.name}</span>
                <span className="tcard__delta">{c.delta}</span>
              </div>
              <div className="tcard__meta">{c.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
