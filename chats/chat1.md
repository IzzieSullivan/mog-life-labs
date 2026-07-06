# Website mockup for Brian's training

_Started 2026-07-06 13:34 UTC_

---

## User

ok I need a website mock up - with these details: 
Additional Matching Colors From The Banner
Main Orange
#F05A11

Slightly Darker Accent Orange
#D94E0F
Good for:

hover accents
dividers
subtle highlights


Background Charcoal
#0F1115

Softer Dark Gray
#1A1D22

here's an example of something Brian already built for clients -https://forms.gle/FVMSGZYyT2nSWCjr8 

this is Brian's personal training website- it will be used for sales/lead gen - no login or backend data required.

## Assistant

_[tool: view_image]_

Strong brand and clear palette. Before I build, a few quick questions so I nail the scope and direction.

_[tool: questions_v2]_

## User

Questions answered:
- scope: Lead capture / consult form, Hero, Transformations / results, Socials
- cta: Fill out an application form
- programs: 1:1 online coaching, custom training + nutrition and supplementation - lifestyle improvements. 
- tone: Explore a few options
- proof: use placeholders
- imagery: I'll drop in real photos (use placeholders for now)
- variations: 3 options

## Assistant

Building a full mockup with 3 tone directions (Aggressive / Premium / Science-forward), each a complete page — hero, transformations, application form, and socials — in your charcoal + orange palette, laid out side by side on a canvas.

_[tool: update_todos]_

_[tool: dc_write]_

Now the Premium direction (1b):

_[tool: dc_html_str_replace]_

Now the Science-forward direction (1c):

_[tool: dc_html_str_replace]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

Three full-page directions are on the canvas, all in your charcoal + orange palette with the MOGLIFELABS lockup:

- **1a — Hardcore & Aggressive**: Anton condensed display, angular clipped buttons, split hero, before/after transformation cards.
- **1b — Premium & Sleek**: Sora, centered hero, pill buttons, rounded panels, more whitespace.
- **1c — Science-forward & Clean**: grid lines, mono data readouts, "intake form" styling, a lab feel.

Each has hero + stats, transformations, a full application form, and socials/footer. Images are labeled striped placeholders for you to drop real photos into later.

Tell me which direction you want to run with (just say 1a/1b/1c) and I'll flesh it out — or mix elements across them.

## User

this is groks summary of his x profile - which do you think is the best choice for his site if we want a consistent marketing approach?

## Assistant

Based on that profile, **1a — Hardcore & Aggressive** is the clear fit. Here's the reasoning:

**Why 1a wins:**
- His voice is "direct, irreverent, mogging-while-self-roasting." The Anton condensed type, angular clipped buttons, and blunt "Build the physique you were built for" energy match that unapologetic-masculinity tone. It reads *in the trenches*, not influencer-polished.
- The profile explicitly signals **anti-mainstream, anti-polish** ("real-talk coaching without the fake positivity," "genuine and entertaining rather than polished influencer"). That rules out **1b — Premium & Sleek**, which is exactly the guru-polish gloss he positions against.
- He actively *mocks* the over-quantified crowd (DEXA scans, "normal people don't care that much about shredded"). So **1c — Science-forward** (data readouts, intake-form-as-lab) works against his brand — it's the aesthetic he roasts.

**One caveat:** 1a as-built is still a little "serious alpha." His real edge is the *humor* — self-roast + spite-fueled discipline. To make it unmistakably him, I'd push the copy harder in his voice: headlines with dark-humor bite, the selective "DM to see if we're a good fit / stop being so lame" gatekeeping, and irreverent form labels instead of generic ones. Keep the aggressive *visual* system, dial up the *voice*.

Want me to take 1a, flesh it out to the full page, and rewrite the copy in his actual voice (punchy, deadpan, self-aware)? I can also work the "@FattyNoNatty / Mog Life" handle and the "coaching aesthetics, energy & vitality using the right tools" bio into the hero and about lines.

## User

yeah lets see it updated

## Assistant

Committing to 1a as a full single-page site with his actual voice. Preserving the options canvas as a backup first.

_[tool: copy_files]_

_[tool: delete_file]_

_[tool: dc_write]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

Full 1a page is live, rewritten in Brian's voice. What changed:

- **Hero:** "Get shredded. Stop being so lame." with the "Mog Life · Aesthetics · Vitality" tag and a "Powered by spite" caption. Stats include the "<10% BF, dad included" nod.
- **Marquee:** scrolling "Bulk hard · Cut aggressive · Stay shredded · No fake positivity…" band in the orange.
- **The Deal** (new honest section): "No fluff. No fairy tales." — real effort, straight talk, selective intake, tools-honest, all in his deadpan register.
- **Who Runs It:** "Jacked dad. In the trenches." About block with the @FattyNoNatty handle and peak-puffy/peak-fatty self-roast.
- **Application form:** reframed as "Apply. Don't be lame about it." — goal, "How serious are you?", "What's actually been stopping you? (Be honest. I've heard worse.)", plus a DM fallback to @FattyNoNatty.
- **Footer:** socials led by X/@FattyNoNatty, plus the "RESULTS VARY. EFFORT DOESN'T." kicker.

The 3-option canvas is preserved as `MOG LIFE LABS Options.dc.html`. Image slots are still labeled placeholders — drop in his real gym photos when ready. Want me to tune the humor dial (harder/softer), swap in real transformation numbers, or wire the socials to actual URLs?

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

Killed "lame." Now:

- **Hero:** "Get shredded. Stop **coping.**"
- **Apply:** "Apply. Quit overthinking it." — plays off his profile's jab at the over-analyzers.
- **DM line:** "slide in, come correct."

Want me to push the rest of the copy spicier too (the marquee, section headers, the "Powered by spite" caption), or is this the right level?

## User

ok can you give me like 5 options for the header - I like the new apply button - im also not sure I like the new nav copy- not clear what it is

## Assistant

Two things here — let me fix the nav now (you're right, "The Deal / Who Runs It" is vague), then give you 5 header options to pick from.

Nav is now clearer while keeping some edge:

_[tool: dc_html_str_replace]_

Nav is now **Transformations · How It Works · About Brian** (button unchanged — you liked it).

Here are 5 header options, all in his voice, spicy but sharper than "lame." Current live one is #1:

1. **Get shredded. Stop coping.** — deadpan, manosphere-native (current)
2. **Look like you actually lift.** — self-aware jab, wide appeal
3. **Aesthetics. Energy. No cope.** — three-beat, ties to his "aesthetics, energy & vitality" bio
4. **Admire shredded? Or become it.** — flips the scrollers-vs-doers line
5. **Mog now. Thank me later.** — leans hardest into the "Mog Life" brand + cocky humor

My pick for lead-gen: **#2 or #4** convert best (clear promise + light challenge), while **#1/#5** are the most on-brand for his X crowd. 

Tell me a number and I'll drop it in — or mix (e.g. #4 headline with #1's energy). I can also give a matching sub-headline for whichever you pick.

## User

i like 2 lets swap it

## Assistant

_[tool: dc_html_str_replace]_

Swapped in **"Look like you actually lift."** Want a matching sub-headline tweak to pair with it, or leave the current one?

## User

what does this mean? BF, dad included

## Assistant

It's insider shorthand that doesn't read clearly — my bad. It was trying to say *"stays under 10% body fat even as a busy dad"* (from his profile's sub-10% BF while married-with-kids). As a stat label it's cryptic.

Let me fix it to something legible:

_[tool: dc_html_str_replace]_

Now reads **"<10% — Body fat, real life"** — the point being sub-10% body fat that holds up around a normal life (job, family, vacations), not just a one-day photoshoot peak. Clearer, and still on-brand. Want me to keep the "dad" angle anywhere, or leave it out?

## User

lets tweak it something like <10% body fat sustainably - you can change the wording

## Assistant

_[tool: dc_html_str_replace]_

Now reads **"<10% — Body fat, sustainably."**

## User

ok lets change the 500+ coached- thats not a good metric for a new coach - and im not sure promising 16 weeks is good - also 10+ years isnt accurate lets brain storm some other data points we can use - or move away from these

## Assistant

Good call — for a newer coach, vanity metrics read as either inflated or unprovable, and a fixed timeline is a promise you don't want to make. Better to lean into what's actually true and what makes him *different*: honesty, selectivity, and his own results. Here's a menu to pull from.

**Personal proof (most credible for a new coach — he's the case study):**
- His own number, e.g. **"<10% — my own body fat, year-round"**
- **"1 — coach you actually talk to"** (owner-operator, not an intern mill)
- **"0 — templates, ever"** — every plan built from scratch

**Selectivity / scarcity (turns "new" into "exclusive"):**
- **"6 — clients at a time"** (or whatever his real cap is) — roster capped on purpose
- **"48hr — personal reply"** — you hear back from him, fast
- **"By application only"**

**Process / honesty (his brand edge):**
- **"Weekly — 1:1 check-ins"**
- **"100% — tools-honest"** — straight talk on what actually moves the needle
- **"Every plan — built around your life"**

**My recommended hero trio** (credible, no inflation, on-brand):
**1:1 · Coach you actually talk to** — **6 · Clients at a time** — **48hr · Personal reply**

That swaps "how many I've coached / how fast you'll transform" for "how personal and selective this is" — which is the honest flex for someone building a roster.

For the About tags, I'd drop "10+ yrs / 500+ coached" and use: **"1:1 only" · "Roster capped" · "Tools-honest."**

Want me to plug in my recommended trio, or tell me your real numbers (roster cap, response time, his own BF/stats) and I'll use those?

## User

ok i like all three impersonal proof I like by application only I like weekly when I'm one check-in and I like every plan built around your life pick which of these make the most sense across these six data points

## Assistant

Here's the split that makes the most sense — big numerals up top in the hero, descriptive phrases as the About tags:

**Hero trio** (needs a number to hit hard): `<10% — my own body fat` · `1:1 — coach you talk to` · `0 — templates, ever`

**About tags** (phrases, no numeral needed): `By application only` · `Weekly 1:1 check-ins` · `Every plan built around your life`

That uses all six, no inflation, and keeps the numeric punch where it lands visually.

_[tool: str_replace_edit]_

Done. Hero now shows **<10% my own body fat · 1:1 coach you talk to · 0 templates, ever**, and the About tags read **By application only · Weekly 1:1 check-ins · Every plan built around your life** — all honest for a coach building his roster.

One flag: the transformation cards (Marcus −34lb, Priya +11lb, Jordan −22lb) are still placeholder clients. When you've got real before/afters, send them over and I'll swap in the photos and true numbers — or if you'd rather not show client results yet, I can convert that section to *your own* transformation as the lead proof. Want me to do that?

