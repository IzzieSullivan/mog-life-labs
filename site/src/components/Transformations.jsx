import { TRANSFORMATION_CASES } from '../data/transformations';

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
        {TRANSFORMATION_CASES.filter((item) => item.featured).map((c) => (
          <div className="tcard" key={c.id}>
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
      <div className="transformations__cta">
        <div>
          <span>Want the longer version?</span>
          <p>Take a closer look at the work behind the before and after.</p>
        </div>
        <a className="btn transformations__button" href="/transformations">
          See the proof up close
        </a>
      </div>
    </div>
  );
}
