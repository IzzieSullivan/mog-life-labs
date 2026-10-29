# MOG LIFE LABS

Brian's physique-coaching lead-gen site. Single page: hero, transformations,
"the deal," about, application form, footer. React + Vite, no backend —
the application form posts to Formspree.

## Develop

```bash
npm install
npm run dev
```

## Before deploying

1. **Form submissions.** Create a form at [formspree.io](https://formspree.io),
   copy its form ID, and put it in a `.env` file:

   ```bash
   cp .env.example .env
   # then edit .env and set VITE_FORMSPREE_ID
   ```

   Until this is set, the form shows an error state on submit instead of
   sending anywhere.

2. **Video-call scheduling.** The form defaults to the MOG LIFE LABS 30-minute
   Calendly event. Set `VITE_CALENDLY_URL` in the same `.env` file only if that
   event URL changes. The link is shown to applicants who choose a video call
   and included with their Formspree submission.

3. **Photos.** Every image slot (`hero__photo`, `tcard__photos` before/after,
   `coach__photo`) is a striped placeholder labeled in brackets, e.g.
   `[ hero photo — Brian, gym ]`. Swap these for real photos in
   `src/components/Hero.jsx`, `Transformations.jsx`, and `Coach.jsx`.

4. **Transformation numbers.** `src/components/Transformations.jsx` has
   three placeholder client results (Marcus D., Priya R., Jordan T.).
   Replace with real clients once available, or swap the section for
   Brian's own transformation.

5. **Instagram link.** The footer's Instagram pill is a placeholder
   (`href="#"`) in `src/components/Footer.jsx` — drop in the real URL.

## Build

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

Output goes to `dist/` — deploy that folder to any static host (Netlify,
Vercel, Cloudflare Pages, S3, etc).
