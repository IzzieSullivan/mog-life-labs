import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('MOG LIFE LABS app', () => {
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

    await user.click(screen.getByRole('link', { name: /about brian/i }));

    expect(
      screen.getByRole('button', { name: /open menu/i })
    ).toHaveAttribute('aria-expanded', 'false');
  });

  it('shows a local error when Formspree is not configured', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText(/name/i), 'Jane Doe');
    await user.type(screen.getByLabelText(/email/i), 'jane@example.com');
    await user.click(screen.getByRole('button', { name: /send my application/i }));

    expect(
      await screen.findByText(/something didn't go through/i)
    ).toBeInTheDocument();
  });
});
