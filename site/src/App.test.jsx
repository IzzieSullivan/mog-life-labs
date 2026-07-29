import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, vi } from 'vitest';
import App from './App';

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
    expect(screen.getByAltText(/patrick before/i)).toHaveAttribute(
      'src',
      '/images/transformations/patrick-before.jpg'
    );
    expect(screen.getByAltText(/patrick after/i)).toHaveAttribute(
      'src',
      '/images/transformations/patrick-after.jpg'
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
    expect(screen.getByText('March 2026 → July 2026')).toBeInTheDocument();
    expect(screen.getByText('Age 40 → Age 41')).toBeInTheDocument();
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
