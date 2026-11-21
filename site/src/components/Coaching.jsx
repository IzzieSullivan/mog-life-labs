import Apply from './Apply';
import coachingCopy from '../data/coachingCopy.json';

const PILLARS = [
  {
    number: '01',
    title: 'Physique',
    body: 'Body composition, muscle development, nutrition, training and cardio — built around the body you want and the life you actually have.',
  },
  {
    number: '02',
    title: 'Vitality',
    body: 'Energy, sleep, recovery, hydration and sustainable routines. Looking good hits differently when you also feel switched on.',
  },
  {
    number: '03',
    title: 'Presence',
    body: 'Hair, grooming, confidence, discipline and the details that change how you carry yourself. The gym is part of the system, not the whole system.',
  },
];

const INCLUDED = [
  'Comprehensive assessment and onboarding',
  'Personalized calorie and macronutrient targets',
  'Training built around your goals, experience, equipment and limitations',
  'Cardio, activity, recovery, hydration and supplement guidance',
  'Structured check-ins, progress tracking and ongoing adjustments',
  'Direct messaging for questions, feedback and support',
  'Practical strategies for travel, restaurants, disruptions and plateaus',
  'Review of client-provided bloodwork for relevant coaching context',
];

const PROCESS = [
  {
    number: '01',
    title: 'We get honest',
    body: 'Goals, training history, nutrition, schedule, health considerations, constraints — the whole picture, not the polished version.',
  },
  {
    number: '02',
    title: 'I build the system',
    body: 'Your initial training, nutrition, activity and recovery strategy is built from scratch around what will actually move you forward.',
  },
  {
    number: '03',
    title: 'We run the data',
    body: 'Check-ins cover adherence, weight trend, photos, performance, recovery, hunger, energy and whatever real life threw at you.',
  },
  {
    number: '04',
    title: 'We adjust with intent',
    body: 'The plan changes when your results and feedback say it should — not because a calendar says it is time to make noise.',
  },
];

function IncludedItem({ text }) {
  const splitAt = text.indexOf(': ');

  if (splitAt === -1) {
    return <li>{text}</li>;
  }

  return (
    <li>
      <span className="coaching-package__label">{text.slice(0, splitAt + 1)}</span>
      {text.slice(splitAt + 1)}
    </li>
  );
}

function BestFor({ text }) {
  const label = 'Best for:';

  return (
    <p className="coaching-package__best">
      <span className="coaching-package__label">{label}</span>
      {text.slice(label.length)}
    </p>
  );
}

function Choice({ text }) {
  const splitAt = text.indexOf(' if ');

  if (splitAt === -1) {
    return <p className="coaching-guide__choice">{text}</p>;
  }

  return (
    <p className="coaching-guide__choice">
      <span>{text.slice(0, splitAt)}</span>
      {text.slice(splitAt)}
    </p>
  );
}

function PackageCard({ pkg }) {
  const featured = pkg.name === 'MOG LIFE Complete';

  return (
    <article
      className={`coaching-option coaching-package${featured ? ' coaching-option--featured' : ''}${pkg.availability ? ' coaching-package--limited' : ''}`}
    >
      <header className="coaching-package__header">
        <h3>{pkg.name}</h3>
        <div className="coaching-package__prices">
          {pkg.prices.map((price) => (
            <p className="coaching-package__price" key={price}>
              {price}
            </p>
          ))}
        </div>
        {pkg.availability && (
          <p className="coaching-package__availability">{pkg.availability}</p>
        )}
      </header>
      <div className="coaching-package__body">
        {pkg.lead.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <h4>{pkg.includedHeading}</h4>
        <ul className="coaching-package__list">
          {pkg.included.map((item) => (
            <IncludedItem key={item} text={item} />
          ))}
        </ul>
        {pkg.details.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {pkg.investment === 'Investment:' ? (
          <>
            <h4>{pkg.investment}</h4>
            <ul className="coaching-package__list">
              {pkg.investmentBullets.map((item) => (
                <IncludedItem key={item} text={item} />
              ))}
            </ul>
          </>
        ) : (
          <p>{pkg.investment}</p>
        )}
        {pkg.investmentNotes.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <footer className="coaching-package__footer">
        <BestFor text={pkg.bestFor} />
        {pkg.closing && <p className="coaching-package__closing">{pkg.closing}</p>}
        <a href="#coaching-apply">Apply for coaching</a>
      </footer>
    </article>
  );
}

export default function Coaching({ source = 'coaching-page' }) {
  return (
    <>
      <section className="shell bordered-x coaching-hero">
        <div className="coaching-hero__eyebrow">Individualized online coaching</div>
        <h1 className="coaching-hero__title">
          Build the body.
          <br />
          <span>Improve the whole man.</span>
        </h1>
        <p className="coaching-hero__lead">
          Aesthetics-first coaching for your physique, vitality and the way you
          show up. Training and nutrition are part of the system — not the
          entire system.
        </p>
        <div className="coaching-hero__actions">
          <a className="btn btn--hero" href="#coaching-options">
            See Coaching Options
          </a>
          <a className="link-underline" href="#coaching-apply">
            Apply Now
          </a>
        </div>
      </section>

      <section className="shell bordered-x coaching-pillars" aria-label="Coaching pillars">
        {PILLARS.map((pillar) => (
          <article className="coaching-pillar" key={pillar.title}>
            <span>{pillar.number}</span>
            <h2>{pillar.title}</h2>
            <p>{pillar.body}</p>
          </article>
        ))}
      </section>

      <section className="shell bordered-x coaching-more">
        <div>
          <div className="section-eyebrow">It&apos;s bigger than the gym</div>
          <h2>Look better. Feel sharper. Run your life better.</h2>
        </div>
        <div className="coaching-more__copy">
          <p>
            Looking better isn&apos;t only about adding weight to the bar. Your
            physique matters — but so do your energy, recovery, hair,
            confidence, habits and how you show up in everyday life.
          </p>
          <p>
            Brian&apos;s own transformation has included rebuilding his body,
            regrowing his hair and continually refining the systems behind
            both. Coaching looks at the complete picture and turns the useful
            pieces into a plan that fits your goals and real life.
          </p>
          <p className="coaching-more__note">
            Brian can share the strategies, questions and resources that
            informed his own hair journey. Individual results vary, and medical
            treatment decisions remain between you and a qualified healthcare
            provider.
          </p>
        </div>
      </section>

      <section className="shell bordered-x coaching-included">
        <div className="coaching-section-heading">
          <div className="section-eyebrow">What coaching includes</div>
          <h2>No template. No autopilot.</h2>
          <p>
            Clear direction, direct access and ongoing adjustments based on
            your data, your feedback and what is happening in your actual life.
          </p>
        </div>
        <div className="coaching-included__grid">
          {INCLUDED.map((item, index) => (
            <div className="coaching-included__item" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <p className="coaching-medical-note">
          Coaching does not include medical diagnosis or treatment. Medical
          concerns are referred to an appropriate licensed healthcare provider.
        </p>
      </section>

      <section className="shell bordered-x coaching-process">
        <div className="coaching-section-heading">
          <div className="section-eyebrow">How it works</div>
          <h2>Assess. Execute. Adjust.</h2>
        </div>
        <div className="coaching-process__grid">
          {PROCESS.map((step) => (
            <article className="coaching-step" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <div data-testid="coaching-copy">
        <section id="coaching-options" className="shell bordered-x coaching-options">
          <div className="coaching-section-heading">
            <h2>{coachingCopy.intro.title}</h2>
            {coachingCopy.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="coaching-options__grid">
            {coachingCopy.packages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </section>

        <section className="shell bordered-x coaching-guide" aria-labelledby="coaching-guide-title">
          <h2 id="coaching-guide-title">{coachingCopy.guide.title}</h2>
          <div className="coaching-guide__grid">
            {coachingCopy.guide.choices.map((choice) => (
              <Choice key={choice} text={choice} />
            ))}
          </div>
          <p className="coaching-guide__closing">{coachingCopy.guide.closing}</p>
        </section>

        <section className="shell bordered-x coaching-ready" aria-labelledby="coaching-ready-title">
          <div>
            <h2 id="coaching-ready-title">{coachingCopy.start.title}</h2>
            <p>{coachingCopy.start.body}</p>
          </div>
          <a className="btn btn--hero" href="#coaching-apply">
            Apply Now
          </a>
        </section>
      </div>

      <section className="shell bordered-x coaching-expectation">
        <div>
          <div className="section-eyebrow">Your side of the deal</div>
          <h2>Communicate honestly. Execute consistently.</h2>
        </div>
        <p>
          Brian provides the structure, strategy, accountability and ongoing
          adjustments. Your job is to do the work, keep him informed and be
          honest when something is not working. Collaborative does not mean
          casual.
        </p>
      </section>

      <div id="coaching-apply">
        <Apply source={source} landingPage="/coaching" />
      </div>
    </>
  );
}
