const TAGS = [
  'By application only',
  'Weekly 1:1 check-ins',
  'Every plan built around your life',
];

export default function Coach() {
  return (
    <div id="coach" className="shell bordered-x coach">
      <div className="coach__photo">
        <div className="placeholder-label">
          <span>[ photo — Brian ]</span>
        </div>
        <div className="coach__handle">@MogLifeLabs</div>
      </div>
      <div className="coach__content">
        <div className="section-eyebrow">Who runs the lab</div>
        <h2 className="coach__title">
          Jacked dad.
          <br />
          In the trenches.
        </h2>
        <p className="coach__body">
          I'm Brian. I've been through peak puffy and peak fatty, and I chase
          sub-10% with a wife, kids and a real life attached. I know exactly
          how annoying it is to want to look great and still have to function
          like an adult.
        </p>
        <p className="coach__body">
          I coach the way I train: honest, a little unhinged, dead serious
          about results. I'll roast the process with you and then hold you to
          it anyway.
        </p>
        <div className="tags">
          {TAGS.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
