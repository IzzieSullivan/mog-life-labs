import { useEffect, useState } from 'react';

const PARTNER_ITEMS = [
  {
    number: '01',
    eyebrow: 'Vanguard Performance Labs',
    title: 'Get the numbers. Stop guessing.',
    body: 'Order the bloodwork you want without waiting for your next routine appointment. Choose an individual test or a more comprehensive panel, then schedule your blood draw at a participating Quest Diagnostics location. Use code BRIAN10 for 10% off at checkout.',
    note: 'Bloodwork provides information—not a diagnosis or treatment plan. Review your results with a qualified healthcare professional.',
    action: 'Explore Bloodwork',
    disclosure: 'Paid partner link',
    href: 'https://vanguardperform.com/?ref=moglife',
    code: 'BRIAN10',
  },
  {
    number: '02',
    eyebrow: 'Peptide Plugs',
    title: '10% off with code MOGLIFE.',
    body: 'Browse the current Peptide Plugs catalog and use code MOGLIFE at checkout for 10% off eligible products in your order.',
    note: 'Verify each product’s status, intended use, quality information, and legality before purchasing. Research-only products are not for human use. This is not medical advice; discuss health and treatment decisions with a qualified healthcare provider.',
    action: 'Shop Peptide Plugs',
    disclosure: 'Discount code · Sponsored link',
    href: 'https://peptideplugs.com/?ref=MOGLIFE',
    code: 'MOGLIFE',
  },
  {
    number: '03',
    eyebrow: 'Cronometer',
    title: 'Track more than calories.',
    body: 'Get a clear view of calories, protein, carbs, fats, vitamins, minerals, hydration, and more. Useful nutrition data without turning every meal into a personality test.',
    note: 'Tracking is only as useful as the information you log. Be consistent, use it to spot patterns, and do not confuse precision with perfection.',
    action: 'Try Cronometer',
    disclosure: 'Referral link',
    href: 'https://ssqt.co/mzWnRuX',
  },
  {
    number: '04',
    eyebrow: 'Planet Fitness',
    title: 'A gym you can actually get to.',
    body: 'Straightforward access to cardio and strength equipment, with locations built for getting the work done consistently.',
    note: 'Membership options, equipment, amenities, and referral offers vary by location. Check your local club before joining.',
    action: 'Join Planet Fitness',
    disclosure: 'Referral link',
    href: 'https://www.planetfitness.com/referrals?referralCode=H797HA8P',
  },
  {
    number: '05',
    eyebrow: 'Tesla',
    title: 'The Cybertruck is part of the vibe. Obviously.',
    body: 'Use our referral link when ordering an eligible Tesla. Depending on Tesla’s current referral program, you may receive a benefit—and we may receive referral credit.',
    note: 'Programs and offers change. Check Tesla’s current terms before ordering.',
    action: 'Use Our Tesla Referral',
    disclosure: 'Referral link',
    href: 'https://ts.la/brian38123',
  },
  {
    number: '06',
    eyebrow: 'REP Fitness',
    title: 'Build a gym worth training in.',
    body: 'Racks, benches, barbells, cable systems, and serious strength equipment for building a home gym that does not feel like a compromise.',
    note: 'Measure your space, know how you train, and buy the equipment you will still use five years from now.',
    action: 'Shop REP Fitness',
    disclosure: 'Paid partner link',
    href: '',
  },
];

function PromoCode({ code }) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="stack-card__coupon">
      <div>
        <span>10% off code</span>
        <strong>{code}</strong>
      </div>
      <button type="button" onClick={copyCode} aria-label={`Copy code ${code}`}>
        {copied ? 'Copied!' : 'Copy code'}
      </button>
    </div>
  );
}

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

const SHOW_AMAZON_EDIT = false;

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
              <span>MOG PICK</span>
            </div>
            <h2 className="stack-card__name">{item.eyebrow}</h2>
            <h3 className="stack-card__title">{item.title}</h3>
            <p className="stack-card__body">{item.body}</p>
            {item.code && <PromoCode code={item.code} />}
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

      {SHOW_AMAZON_EDIT && (
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
      )}

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
