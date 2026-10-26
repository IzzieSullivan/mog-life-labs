import { useEffect } from 'react';
import Apply from './Apply';
import { TRANSFORMATION_CASES } from '../data/transformations';

const PRINCIPLES = [
  {
    number: '01',
    title: 'The plan has to fit the person.',
    body: 'Training, nutrition, recovery, and real life all count. A plan only works when someone can execute it consistently.',
  },
  {
    number: '02',
    title: 'Adjustment beats theater.',
    body: 'Progress gets reviewed and the plan changes when the evidence says it should. Busywork does not get bonus points.',
  },
  {
    number: '03',
    title: 'The client still does the work.',
    body: 'Coaching creates direction and accountability. It does not replace effort, and no honest coach can guarantee an outcome.',
  },
];

export default function TransformationsPage({ source = 'transformations-page' }) {
  useEffect(() => {
    const previousTitle = document.title;
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonical?.getAttribute('href');

    document.title = 'Transformations — MOG LIFE LABS';
    canonical?.setAttribute('href', 'https://www.moglifelabs.com/transformations');

    return () => {
      document.title = previousTitle;
      if (previousCanonical) canonical?.setAttribute('href', previousCanonical);
    };
  }, []);

  return (
    <>
      <section className="shell bordered-x results-hero">
        <div className="results-hero__eyebrow">MOG LIFE · TRANSFORMATIONS</div>
        <h1>
          Proof takes <span>work.</span>
        </h1>
        <div className="results-hero__intro">
          <p>
            Before-and-after photos get the attention. The decisions made between
            them are what actually matter.
          </p>
          <span>Real people. Real work. Individual results vary.</span>
        </div>
      </section>

      <section className="shell bordered-x results-cases" aria-label="Transformation stories">
        {TRANSFORMATION_CASES.map((item, index) => (
          <article className="results-case" key={item.id}>
            <header className="results-case__header">
              <span>{String(index + 1).padStart(2, '0')} / CASE STUDY</span>
              <div>
                <h2>{item.name}</h2>
                {item.label && <p>{item.label}</p>}
              </div>
              {item.meta && <strong>{item.meta}</strong>}
            </header>

            <div className="results-case__photos">
              <figure>
                <img
                  src={item.before}
                  alt={`${item.name} before`}
                  style={{ objectPosition: item.beforePosition }}
                />
                <figcaption>Before</figcaption>
              </figure>
              <figure>
                <img
                  src={item.after}
                  alt={`${item.name} after`}
                  style={{ objectPosition: item.afterPosition }}
                />
                <figcaption>After</figcaption>
              </figure>
            </div>

            {item.progress && (
              <figure className="results-case__progress">
                <img src={item.progress} alt={`${item.name} additional progress poses`} />
                <figcaption>Additional progress</figcaption>
              </figure>
            )}

            {item.note && (
              <div className="results-case__note">
                <span>WHAT THE PHOTOS SHOW</span>
                <p>{item.note}</p>
              </div>
            )}
          </article>
        ))}
      </section>

      <section className="shell bordered-x results-principles" aria-labelledby="results-principles-title">
        <div className="results-principles__heading">
          <span>WHAT THE PHOTOS DO NOT SHOW</span>
          <h2 id="results-principles-title">The process behind the proof.</h2>
        </div>
        <div className="results-principles__grid">
          {PRINCIPLES.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <Apply source={source} />
    </>
  );
}
