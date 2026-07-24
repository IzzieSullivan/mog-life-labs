import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, vi } from 'vitest';
import App from './App';

describe('MOG LIFE LABS app', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the primary landing page sections', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /look like you actually lift/i
    );
    expect(
      screen.getByRole('heading', { name: /receipts, not promises/i })
    ).toBeInTheDocument();
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
  });
});
