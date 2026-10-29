import { useEffect, useRef, useState } from 'react';

// TODO: create a form at https://formspree.io and drop the form ID here
// (or set VITE_FORMSPREE_ID in a .env file) before going live.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || 'YOUR_FORM_ID';
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;
const CALENDLY_URL =
  import.meta.env.VITE_CALENDLY_URL?.trim() ||
  'https://calendly.com/moglifelabs/30min';

export default function Apply({
  source = 'website',
  landingPage = window.location.pathname,
  compact = false,
}) {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [contactMethod, setContactMethod] = useState('email');
  const successHeadingRef = useRef(null);

  useEffect(() => {
    if (status === 'success') {
      successHeadingRef.current?.focus();
    }
  }, [status]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (FORMSPREE_ID === 'YOUR_FORM_ID') {
      console.warn(
        'MOG LIFE LABS: Formspree form ID not configured yet. Set VITE_FORMSPREE_ID before deploying.'
      );
      setStatus('error');
      return;
    }

    setStatus('submitting');
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div
      id="apply"
      className={`shell bordered-x apply${compact ? ' apply--compact' : ''}`}
    >
      <div>
        <div className="section-eyebrow">See if we're a fit</div>
        <h2 className="apply__title">
          Apply.
          <br />
          Quit
          <br />
          overthinking it.
        </h2>
        <p className="apply__body">
          Spots are limited and I actually read these. Tell me where you're
          at and where you want to be. If we're a fit, you'll hear from me
          within 48 hours. If we're not, I'll tell you that too.
        </p>
        <div className="apply__list">
          <div className="apply__list-item">
            <span>›</span> Reply within 48 hours, from me
          </div>
          <div className="apply__list-item">
            <span>›</span> No obligation, no hard sell, no spam
          </div>
          <div className="apply__list-item">
            <span>›</span> Built for your goal, not a template
          </div>
        </div>
      </div>
      {status === 'success' ? (
        <div className="form-card form-success" role="status" aria-live="polite">
          <div className="form-success__mark" aria-hidden="true">✓</div>
          <div className="section-eyebrow">Submission confirmed</div>
          <h3 ref={successHeadingRef} className="form-success__title" tabIndex="-1">
            Application received.
          </h3>
          <p className="form-success__body">
            You did your part. Brian reads every application personally. If it
            looks like a fit, you&apos;ll hear from <strong>@MogLifeLabs</strong>{' '}
            within 48 hours.
          </p>
          <div className="form-success__status">
            <span>Response window</span>
            <strong>Within 48 hours</strong>
          </div>
          <a
            className="btn btn--form form-success__cta"
            href="https://x.com/MogLifeLabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow @MogLifeLabs on X
          </a>
          <p className="form-success__note">No need to submit again.</p>
        </div>
      ) : (
        <div className="form-card">
        <form onSubmit={handleSubmit} aria-busy={status === 'submitting'}>
          <input
            type="hidden"
            name="subject"
            value="New MOG LIFE LABS coaching application"
          />
          <input type="hidden" name="source" value={source} />
          <input type="hidden" name="landing_page" value={landingPage} />
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Jane Doe" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email (always required)</label>
              <input id="email" name="email" type="email" placeholder="you@email.com" required />
            </div>
            <div className="form-field form-field--full">
              <label htmlFor="contact-method">How would you like to talk?</label>
              <select
                id="contact-method"
                name="preferred_contact_method"
                value={contactMethod}
                onChange={(event) => setContactMethod(event.target.value)}
                required
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="social">Twitter / Instagram</option>
                <option value="video">Schedule a video call</option>
              </select>
            </div>
            {contactMethod === 'phone' && (
              <div className="form-field form-field--full">
                <label htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(555) 555-5555"
                  required
                />
              </div>
            )}
            {contactMethod === 'social' && (
              <div className="form-field form-field--full">
                <label htmlFor="social-handle">Twitter / Instagram handle</label>
                <input
                  id="social-handle"
                  name="social_handle"
                  type="text"
                  autoComplete="off"
                  placeholder="@yourhandle"
                  required
                />
              </div>
            )}
            {contactMethod === 'video' && (
              <div className="form-field form-field--full form-scheduling">
                <input type="hidden" name="video_call_link" value={CALENDLY_URL} />
                {CALENDLY_URL ? (
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    Choose a time on Calendly
                  </a>
                ) : (
                  <p>We&apos;ll email you the scheduling link.</p>
                )}
              </div>
            )}
            <div className="form-field">
              <label htmlFor="goal">Primary goal</label>
              <select id="goal" name="goal" defaultValue="Get lean / cut">
                <option>Get lean / cut</option>
                <option>Build muscle</option>
                <option>Recomposition</option>
                <option>Energy &amp; vitality</option>
                <option>Contest prep</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="seriousness">How serious are you?</label>
              <select id="seriousness" name="seriousness" defaultValue="All in, let's go">
                <option>All in, let's go</option>
                <option>Serious but need a push</option>
                <option>Just curious for now</option>
              </select>
            </div>
            <div className="form-field form-field--full">
              <label htmlFor="blocker">What's actually been stopping you?</label>
              <textarea
                id="blocker"
                name="message"
                rows="3"
                placeholder="Be honest. I've heard worse."
              />
            </div>
          </div>
          <button type="submit" className="btn btn--form" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Send My Application'}
          </button>
          {status === 'error' && (
            <div className="form-status form-status--error" role="alert">
              Something didn&apos;t go through — DM @MogLifeLabs instead.
            </div>
          )}
        </form>
        <div className="form-dm">
          Prefer the DMs? <span>@MogLifeLabs</span> — slide in, come correct.
        </div>
        </div>
      )}
    </div>
  );
}
