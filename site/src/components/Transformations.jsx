const CASES = [
  {
    name: 'Patrick',
    label: 'Client transformation',
    meta: 'March 2026 → July 2026',
    before: '/images/transformations/patrick-before.jpg',
    after: '/images/transformations/patrick-after.jpg',
    beforePosition: 'center center',
    afterPosition: 'center center',
  },
  {
    name: 'Brian',
    label: 'Founder',
    meta: 'Age 40 → Age 41',
    before: '/images/transformations/brian-before.jpg',
    after: '/images/transformations/brian-after.jpg',
    beforePosition: 'center center',
    afterPosition: 'center center',
  },
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
                <img
                  src={c.before}
                  alt={`${c.name} before`}
                  style={{ objectPosition: c.beforePosition }}
                />
                <span>BEFORE</span>
              </div>
              <div className="tcard__photo tcard__photo--after">
                <img
                  src={c.after}
                  alt={`${c.name} after`}
                  style={{ objectPosition: c.afterPosition }}
                />
                <span>AFTER</span>
              </div>
            </div>
            <div className="tcard__body">
              <div className="tcard__row">
                <span className="tcard__name">{c.name}</span>
                <span className="tcard__label">{c.label}</span>
              </div>
              <div className="tcard__meta">{c.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
