const PHRASE =
  'Bulk hard · Cut aggressive · Stay shredded · No fake positivity · Real effort · The right tools · Mog Life · ';

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        <span className="marquee__group">{PHRASE.repeat(2)}</span>
        <span className="marquee__group" aria-hidden="true">
          {PHRASE.repeat(2)}
        </span>
      </div>
    </div>
  );
}
