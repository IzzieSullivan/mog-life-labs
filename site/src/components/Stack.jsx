import { useEffect } from 'react';

const PARTNER_ITEMS = [
  {
    number: '01',
    eyebrow: 'Vanguard Performance Labs',
    title: 'Get the numbers. Stop guessing.',
    body: 'Order the bloodwork you want without waiting for your next routine appointment. Choose an individual test or a more comprehensive panel, then schedule your blood draw at a participating Quest Diagnostics location.',
    note: 'Bloodwork provides information—not a diagnosis or treatment plan. Review your results with a qualified healthcare professional.',
    action: 'Explore Bloodwork',
    disclosure: 'Paid partner link',
    href: '',
  },
  {
    number: '02',
    eyebrow: 'Tesla',
    title: 'If you were already going electric.',
    body: 'Use our referral link when ordering an eligible Tesla. Depending on Tesla’s current referral program, you may receive a benefit—and we may receive referral credit.',
    note: 'Programs and offers change. Check Tesla’s current terms before ordering.',
    action: 'Use Our Tesla Referral',
    disclosure: 'Referral link',
    href: '',
  },
  {
    number: '03',
    eyebrow: 'REP Fitness',
    title: 'Build a gym worth training in.',
    body: 'Racks, benches, barbells, cable systems, and serious strength equipment for building a home gym that does not feel like a compromise.',
    note: 'Measure your space, know how you train, and buy the equipment you will still use five years from now.',
    action: 'Shop REP Fitness',
    disclosure: 'Paid partner link',
    href: '',
  },
  {
    number: '04',
    eyebrow: 'Planet Fitness',
    title: 'A gym you can actually get to.',
    body: 'Straightforward access to cardio and strength equipment, with locations built for getting the work done consistently.',
    note: 'Membership options, equipment, amenities, and referral offers vary by location. Check your local club before joining.',
    action: 'Join Planet Fitness',
    disclosure: 'Referral link',
    href: '',
  },
  {
    number: '05',
    eyebrow: 'Bucked Up Fitness · Charlotte',
    title: 'Serious equipment. Uptown address.',
    body: 'A performance-focused Charlotte gym with Arsenal Strength and Max Pump equipment, personal training, group sessions, and a dedicated recovery zone.',
    note: 'Located at 415 S Mint Street near Bank of America Stadium. Memberships, passes, and amenities are subject to the gym’s current terms.',
    action: 'Explore The Charlotte Gym',
    disclosure: 'Partner link',
    href: '',
  },
  {
    number: '06',
    eyebrow: 'The Mog Life newsletter',
    title: 'Useful ideas. No motivational wallpaper.',
    body: 'Practical thoughts on training, aesthetics, energy, discipline, and building a life that actually looks and feels better. Subscribe on Substack and get the next edition in your inbox.',
    action: 'Subscribe on Substack',
    disclosure: '',
    href: '',
  },
];

const AMAZON_CATEGORIES = [
  {
    id: 'supplements',
    number: '01',
    title: 'Supplements',
    intro: 'The basics that earn their place. No 19-product morning ritual required.',
    products: [],
  },
  {
    id: 'gym-gear',
    number: '02',
    title: 'Gym Gear',
    intro: 'Useful equipment for better sessions—not toys destined for the garage.',
    products: [],
  },
  {
    id: 'clothes',
    number: '03',
    title: 'Clothes',
    intro: 'Training and everyday pieces that fit well, perform, and do not look ridiculous.',
    products: [],
  },
  {
    id: 'looksmaxxing',
    number: '04',
    title: 'Looksmaxxing',
    intro: 'Grooming, skincare, and the small upgrades that make the whole package look sharper.',
    products: [],
  },
];

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__image">
        {product.image ? (
          <img src={product.image} alt="" />
        ) : (
          <span>Product image</span>
        )}
      </div>
      <div className="product-card__content">
        <div className="product-card__label">MOG PICK</div>
        <h3>{product.name}</h3>
        <p>{product.reason}</p>
        <div className="product-card__action">
          <a
            className="btn product-card__button"
            href={product.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
          >
            View on Amazon
          </a>
          <span>Paid link</span>
        </div>
      </div>
    </article>
  );
}

export default function Stack() {
  useEffect(() => {
    const previousTitle = document.title;
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonical?.getAttribute('href');

    document.title = 'The Stack — MOG LIFE LABS';
    canonical?.setAttribute('href', 'https://www.moglifelabs.com/the-stack');

    return () => {
      document.title = previousTitle;
      if (previousCanonical) canonical?.setAttribute('href', previousCanonical);
    };
  }, []);

  return (
    <>
      <section className="shell bordered-x stack-hero">
        <div className="stack-hero__eyebrow">MOG LIFE · RECOMMENDED</div>
        <h1 className="stack-hero__title">
          The <span>Stack.</span>
        </h1>
        <p className="stack-hero__lead">The stuff we actually use.</p>
        <p className="stack-hero__body">
          No endless list of sponsored garbage. Just products, services, and
          resources we use, trust, or genuinely think are worth knowing about.
        </p>
        <div className="stack-disclosure" aria-label="Affiliate disclosure">
          <div className="stack-disclosure__label">A quick heads-up</div>
          <p>
            Some links on this page are paid or referral links. If you buy or
            sign up through one of them, MOG LIFE LABS may earn a commission or
            referral credit at no additional cost to you. That never decides
            what makes the list.
          </p>
        </div>
      </section>

      <section className="shell bordered-x stack-grid" aria-label="Recommendations">
        {PARTNER_ITEMS.map((item) => (
          <article className="stack-card" key={item.number}>
            <div className="stack-card__topline">
              <span>{item.number}</span>
              <span>{item.eyebrow}</span>
            </div>
            <h2>{item.title}</h2>
            <p className="stack-card__body">{item.body}</p>
            {item.note && <p className="stack-card__note">{item.note}</p>}
            <div className="stack-card__action">
              {item.href ? (
                <a
                  className="btn stack-card__button"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                >
                  {item.action}
                </a>
              ) : (
                <span className="stack-card__coming-soon">Link coming soon</span>
              )}
              {item.disclosure && (
                <span className="stack-card__disclosure">{item.disclosure}</span>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="shell bordered-x amazon" aria-labelledby="amazon-title">
        <div className="amazon__header">
          <div className="amazon__eyebrow">THE MOG LIFE AMAZON EDIT</div>
          <h2 id="amazon-title">
            Useful. Tested. <span>Worth owning.</span>
          </h2>
          <p className="amazon__lead">
            Training gear, supplements, clothes, and everyday upgrades that
            make disciplined living a little easier. If we would not use it
            ourselves, it does not belong here.
          </p>
          <div className="amazon__disclosure">
            <strong>Paid links:</strong> As an Amazon Associate I earn from
            qualifying purchases.
          </div>
          <nav className="amazon__jump-links" aria-label="Amazon categories">
            {AMAZON_CATEGORIES.map((category) => (
              <a key={category.id} href={`#${category.id}`}>
                {category.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="amazon__categories">
          {AMAZON_CATEGORIES.map((category) => (
            <section
              className="product-category"
              id={category.id}
              key={category.id}
            >
              <div className="product-category__header">
                <div>
                  <span>{category.number} / 04</span>
                  <h3>{category.title}</h3>
                </div>
                <p>{category.intro}</p>
              </div>

              {category.products.length ? (
                <div
                  className="product-rail"
                  aria-label={`${category.title} recommendations`}
                >
                  {category.products.map((product) => (
                    <ProductCard product={product} key={product.name} />
                  ))}
                </div>
              ) : (
                <div className="product-category__empty">
                  <span>Curating now</span>
                  <p>The first Mog-approved picks are coming soon.</p>
                </div>
              )}
            </section>
          ))}
        </div>
      </section>

      <section className="shell bordered-x stack-close">
        <div className="stack-close__rule" />
        <h2>Use your judgment.</h2>
        <p>
          These are recommendations, not commandments. Do your own homework,
          especially with anything involving your health, money, or a major
          purchase.
        </p>
      </section>
    </>
  );
}
