const POINTS = [
  {
    title: 'Real effort',
    body: "The tools help. They don't do the reps, cook the food, or show up for you. That part's on you — I just make sure it isn't wasted.",
  },
  {
    title: 'Straight talk',
    body: 'You\'ll know exactly why you\'re doing everything. No mystery, no guru mysticism, no "trust the process" hand-waving.',
  },
  {
    title: 'Selective intake',
    body: "I take a handful of clients at a time. If we're not a fit, I'll tell you and point you somewhere useful. No hard sell.",
  },
  {
    title: 'Built to last',
    body: 'Sub-10% and still enjoying your life — married-with-kids included. Aesthetics that survive a vacation and a bad week.',
  },
];

export default function Truth() {
  return (
    <div id="truth" className="shell bordered-x truth">
      <div className="truth__grid">
        <div>
          <div className="section-eyebrow">The honest part</div>
          <h2 className="truth__title">
            No fluff.
            <br />
            No fairy tales.
          </h2>
          <p className="truth__body">
            Most coaches sell you a fantasy and a PDF. I sell you a plan,
            accountability, and the truth about what it takes. If you want
            someone to lie to you, I'm the wrong guy.
          </p>
        </div>
        <div className="truth__points">
          {POINTS.map((p) => (
            <div className="truth__point" key={p.title}>
              <div className="truth__point-title">{p.title}</div>
              <div className="truth__point-body">{p.body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
