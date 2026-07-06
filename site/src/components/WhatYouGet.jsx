const FEATURES = [
  {
    title: '01 · 1:1 Coaching',
    body: "You talk to me, not a chatbot or some intern. Weekly check-ins, direct access, adjustments when your body says so — not on a template's schedule.",
  },
  {
    title: '02 · Training + Nutrition',
    body: "Custom training, nutrition and supplementation dialed to your goal — plus honest guidance on the tools, if and when that's the conversation.",
  },
  {
    title: '03 · Vitality & Lifestyle',
    body: 'Energy, sleep, libido, discipline — the stuff that makes looking good actually feel good. Sustainable, not a 12-week crash-and-rebound.',
  },
];

export default function WhatYouGet() {
  return (
    <div className="shell bordered-x features">
      {FEATURES.map((f) => (
        <div className="feature" key={f.title}>
          <div className="feature__title">{f.title}</div>
          <div className="feature__body">{f.body}</div>
        </div>
      ))}
    </div>
  );
}
