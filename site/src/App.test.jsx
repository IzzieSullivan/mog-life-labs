import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, vi } from 'vitest';
import App from './App';
import {
  AMAZON_CATEGORIES,
  AMAZON_PRODUCT_COUNT,
  FEATURED_AMAZON_PRODUCTS,
} from './data/amazonProducts';

describe('MOG LIFE LABS app', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    window.history.pushState({}, '', '/');
  });

  it('renders the primary landing page sections', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /look like you actually lift/i
    );
    expect(
      screen.getByAltText(/brian sullivan, mog life labs coach/i)
    ).toHaveAttribute('src', '/images/brian-gym-hero.jpg');
    expect(
      screen.getByRole('heading', { name: /receipts, not promises/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /explore coaching/i })
    ).toHaveAttribute('href', '/coaching');
    expect(screen.getByRole('link', { name: /show me proof/i })).toHaveAttribute(
      'href',
      '/transformations'
    );
    expect(screen.getByAltText(/patrick before/i)).toHaveAttribute(
      'src',
      '/images/transformations/patrick-before.jpg'
    );
    expect(screen.getByAltText(/patrick after/i)).toHaveAttribute(
      'src',
      '/images/transformations/patrick-after-new.png'
    );
    expect(screen.getByAltText(/brian before/i)).toHaveAttribute(
      'src',
      '/images/transformations/brian-before.jpg'
    );
    expect(screen.getByAltText(/brian after/i)).toHaveAttribute(
      'src',
      '/images/transformations/brian-after.jpg'
    );
    expect(screen.getByText(/founder/i)).toBeInTheDocument();
    expect(screen.getByText('7 months')).toBeInTheDocument();
    expect(screen.getByText('1 year')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /see the proof up close/i })
    ).toHaveAttribute('href', '/transformations');
    expect(screen.getByAltText(/brian and izzie sullivan/i)).toHaveAttribute(
      'src',
      '/images/brian-izzie-about.jpg'
    );
    expect(screen.getByRole('heading', { name: /apply/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeRequired();
    expect(screen.getByRole('link', { name: /instagram/i })).toHaveAttribute(
      'href',
      'https://www.instagram.com/moglifelabs/'
    );
    expect(screen.getByRole('link', { name: /x.*moglifelabs/i })).toHaveAttribute(
      'href',
      'https://x.com/MogLifeLabs'
    );
    expect(
      screen.getByText(/we do not sell your personal information/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/coaching content is for educational purposes only/i)
    ).toBeInTheDocument();
  });

  it('opens and closes the mobile menu from the nav toggle', async () => {
    const user = userEvent.setup();
    render(<App />);

    const toggle = screen.getByRole('button', { name: /open menu/i });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggle);

    expect(
      screen.getByRole('button', { name: /close menu/i })
    ).toHaveAttribute('aria-expanded', 'true');
    await waitFor(() => {
      expect(screen.getByRole('link', { name: /transformations/i })).toHaveFocus();
    });

    await user.keyboard('{Escape}');

    const closedToggle = screen.getByRole('button', { name: /open menu/i });
    expect(closedToggle).toHaveAttribute('aria-expanded', 'false');
    expect(closedToggle).toHaveFocus();
  });

  it('links to The Stack from the primary navigation', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: /the stack/i })).toHaveAttribute(
      'href',
      '/the-stack'
    );
  });

  it('renders the transformations page with case studies and an application flow', () => {
    window.history.pushState({}, '', '/transformations');
    const { container } = render(<App />);

    expect(
      screen.getByRole('heading', { level: 1, name: /proof takes work/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Patrick' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Brian' })
    ).toBeInTheDocument();
    expect(screen.getByText('7 months')).toBeInTheDocument();
    expect(screen.getAllByText('3 months')).toHaveLength(2);
    expect(screen.getByText('2 months')).toBeInTheDocument();
    expect(screen.getByText('1 year')).toBeInTheDocument();
    expect(screen.getAllByText('WHAT THE PHOTOS SHOW')).toHaveLength(1);
    expect(screen.queryByText(/withheld/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/ron|chris|thomas/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/patrick before/i)).toHaveAttribute(
      'src',
      '/images/transformations/patrick-before.jpg'
    );
    expect(
      screen.queryByAltText(/patrick additional progress poses/i)
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /the process behind the proof/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Transformations' })).toHaveAttribute(
      'aria-current',
      'page'
    );
    expect(container.querySelector('input[name="source"]')).toHaveValue(
      'transformations-page'
    );
  });

  it('features Cronometer instead of the newsletter on The Stack', () => {
    window.history.pushState({}, '', '/the-stack');
    render(<App />);

    expect(screen.getByText('Cronometer')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: /cronometer/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /track more than calories/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /try cronometer/i })).toHaveAttribute(
      'href',
      'https://ssqt.co/mzWnRuX'
    );
    expect(
      screen.getByRole('link', { name: /use our tesla referral/i })
    ).toHaveAttribute('href', 'https://ts.la/brian38123');
    expect(
      screen.getByRole('link', { name: /join planet fitness/i })
    ).toHaveAttribute(
      'href',
      'https://www.planetfitness.com/referrals?referralCode=H797HA8P'
    );
    expect(
      screen.getByRole('link', { name: /shop peptide plugs/i })
    ).toHaveAttribute('href', 'https://peptideplugs.com/?ref=MOGLIFE');
    expect(screen.getByText(/10% off with code moglife/i)).toBeInTheDocument();
    expect(screen.queryByText(/bucked up fitness/i)).not.toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /explore bloodwork/i })
    ).toHaveAttribute('href', 'https://vanguardperform.com/?ref=moglife');
    expect(
      screen.getByText(/use code brian10 for 10% off at checkout/i)
    ).toBeInTheDocument();
    expect(screen.queryByText(/mog life newsletter/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/subscribe on substack/i)).not.toBeInTheDocument();
  });

  it('organizes the complete Amazon edit on The Stack', async () => {
    const user = userEvent.setup();
    const products = AMAZON_CATEGORIES.flatMap((category) => category.products);

    expect(AMAZON_PRODUCT_COUNT).toBe(105);
    expect(new Set(products.map((product) => product.id)).size).toBe(105);
    expect(FEATURED_AMAZON_PRODUCTS.map((product) => product.id)).toEqual([
      'creatine',
      'reebok-nano-x5',
      'walking-pad',
      'core-power',
      'rice-cooker',
      'cyclic-dextrin',
      'versa-grips',
      'lmnt-sparkling',
    ]);
    expect(products.find((product) => product.id === 'super-carb')?.href).toBe(
      'https://link.amazon/B09Fatkex'
    );
    expect(products.find((product) => product.id === 'sea-salt-spray')?.href).toBe(
      'https://link.amazon/B0hH92cdj'
    );
    expect(products.find((product) => product.id === 'potassium-chloride')?.href).toBe(
      'https://link.amazon/B04OttFVI'
    );
    expect(products.find((product) => product.id === 'derma-roller')?.href).toBe(
      'https://link.amazon/B0bChMT2Q'
    );

    window.history.pushState({}, '', '/the-stack');
    render(<App />);

    expect(
      screen.getByRole('heading', { level: 2, name: /useful.*worth owning/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/as an amazon associate i earn from qualifying purchases/i)
    ).toBeInTheDocument();

    await user.click(
      screen
        .getByRole('heading', { level: 4, name: 'Supplements & Recovery' })
        .closest('summary')
    );

    expect(
      screen.getByRole('link', { name: /super carb on amazon.*paid link/i })
    ).toHaveAttribute('href', 'https://link.amazon/B09Fatkex');
    expect(screen.getByText(/not medical advice or a universal protocol/i)).toBeInTheDocument();
  });

  it('renders the coaching page with pricing, scope and application flow', () => {
    window.history.pushState({}, '', '/coaching');
    render(<App />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /build the body.*improve the whole man/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText('$600')).toBeInTheDocument();
    expect(screen.getByText('$1,500')).toBeInTheDocument();
    expect(screen.getByText('$2,500')).toBeInTheDocument();
    expect(screen.getByText(/regrowing his hair/i)).toBeInTheDocument();
    expect(
      screen.getByText(/coaching does not include medical diagnosis or treatment/i)
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Coaching' })).toHaveAttribute(
      'aria-current',
      'page'
    );
    expect(screen.getByLabelText(/email/i)).toBeRequired();
  });

  it('shows an error when the form service rejects the application', async () => {
    const user = userEvent.setup();
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));
    render(<App />);

    await user.type(screen.getByLabelText(/name/i), 'Jane Doe');
    await user.type(screen.getByLabelText(/email/i), 'jane@example.com');
    await user.click(screen.getByRole('button', { name: /send my application/i }));

    expect(
      await screen.findByText(/something didn't go through/i)
    ).toHaveAttribute('role', 'alert');
  });

  it('requires contact details for phone and social preferences', async () => {
    const user = userEvent.setup();
    render(<App />);

    const contactMethod = screen.getByLabelText(/how would you like to talk/i);
    expect(screen.getByLabelText(/email.*always required/i)).toBeRequired();

    await user.selectOptions(contactMethod, 'phone');
    expect(screen.getByLabelText(/phone number/i)).toBeRequired();
    expect(screen.queryByLabelText(/twitter.*instagram handle/i)).not.toBeInTheDocument();

    await user.selectOptions(contactMethod, 'social');
    expect(screen.getByLabelText(/twitter.*instagram handle/i)).toBeRequired();
    expect(screen.queryByLabelText(/phone number/i)).not.toBeInTheDocument();
  });

  it('shows and submits the Calendly link for a video call preference', async () => {
    const user = userEvent.setup();
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }));
    render(<App />);

    await user.type(screen.getByLabelText(/name/i), 'Jane Doe');
    await user.type(screen.getByLabelText(/email/i), 'jane@example.com');
    await user.selectOptions(screen.getByLabelText(/how would you like to talk/i), 'video');

    expect(screen.getByRole('link', { name: /choose a time on calendly/i })).toHaveAttribute(
      'href',
      'https://calendly.com/moglifelabs/test-call'
    );

    await user.click(screen.getByRole('button', { name: /send my application/i }));
    await screen.findByRole('heading', { name: /application received/i });

    const submittedData = fetch.mock.calls[0][1].body;
    expect(submittedData.get('preferred_contact_method')).toBe('video');
    expect(submittedData.get('video_call_link')).toBe(
      'https://calendly.com/moglifelabs/test-call'
    );
  });

  it('confirms a successful application and resets the form', async () => {
    const user = userEvent.setup();
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }));
    render(<App />);

    await user.type(screen.getByLabelText(/name/i), 'Jane Doe');
    await user.type(screen.getByLabelText(/email/i), 'jane@example.com');
    await user.click(screen.getByRole('button', { name: /send my application/i }));

    const successHeading = await screen.findByRole('heading', {
      name: /application received/i,
    });
    expect(successHeading).toHaveFocus();
    expect(screen.getByRole('status')).toHaveTextContent(/within 48 hours/i);
    expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /follow.*moglifelabs.*x/i })).toHaveAttribute(
      'href',
      'https://x.com/MogLifeLabs'
    );
    expect(fetch).toHaveBeenCalledWith(
      'https://formspree.io/f/test-form',
      expect.objectContaining({ method: 'POST' })
    );
    const submittedData = fetch.mock.calls[0][1].body;
    expect(submittedData.get('subject')).toBe(
      'New MOG LIFE LABS coaching application'
    );
    expect(submittedData.get('email')).toBe('jane@example.com');
    expect(submittedData.get('source')).toBe('website');
    expect(submittedData.get('landing_page')).toBe('/');
  });

  it('renders the unlisted social landing page and tracks its source', () => {
    window.history.pushState({}, '', '/start?source=instagram');
    const { container } = render(<App />);

    expect(
      screen.getByRole('heading', { level: 1, name: /start here/i })
    ).toBeInTheDocument();
    expect(screen.queryByRole('navigation', { name: /primary/i })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /main website/i })).toHaveAttribute(
      'href',
      '/?source=instagram'
    );
    expect(screen.getByRole('link', { name: /the stack/i })).toHaveAttribute(
      'href',
      '/the-stack?source=instagram'
    );
    expect(container.querySelector('input[name="source"]')).toHaveValue('instagram');
    expect(container.querySelector('input[name="landing_page"]')).toHaveValue('/start');
    expect(
      screen.getByLabelText(/substack link coming soon/i)
    ).toBeInTheDocument();
  });
});
