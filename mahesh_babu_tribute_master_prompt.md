# MASTER BUILD PROMPT — Mahesh Babu Birthday Tribute Website

---

## ROLE & MISSION

You are a world-class frontend engineer and digital experience designer. Your task is to build a **cinematic, scroll-driven tribute website** for Telugu superstar **Mahesh Babu**, celebrating his birthday. This site must feel like it cost lakhs to build — not a fan blog, not a generic tribute page, but a **luxury editorial digital experience** on par with award-winning websites on Awwwards.com.

Every pixel must be intentional. Every scroll must feel alive. Every touch must respond.

---

## TECH STACK — NON-NEGOTIABLE

```
- Pure HTML5 + CSS3 + Vanilla JavaScript (no React, no Vue, no build tools)
- GSAP 3 + ScrollTrigger plugin (CDN)
- Lenis smooth scroll (CDN)
- CountUp.js (CDN)
- canvas-confetti (CDN)
- Google Fonts (Playfair Display, Cormorant Garamond, DM Mono)
- All content sourced from: ./data.json (fetch on load)
- Zero hardcoded content in HTML — everything rendered from JSON
```

---

## FILE STRUCTURE

```
/project
  ├── index.html        ← single file, all sections
  ├── style.css         ← all styles
  ├── main.js           ← all JS, GSAP, scroll logic
  └── data.json         ← all site content (YOU must generate this too)
```

---

## DATA.JSON — GENERATE THIS FIRST

Generate a complete, rich `data.json` file with the following structure. Use real known facts about Mahesh Babu (born August 9, 1975). Fill every field intelligently:

```json
{
  "meta": {
    "name": "Mahesh Babu",
    "full_name": "Ghattamaneni Mahesh Babu",
    "birthday": "August 9, 1975",
    "age": 50,
    "birthplace": "Chennai, Tamil Nadu",
    "tagline": "Not Just a Star. A Generation.",
    "hero_quote": "I don't chase success. I chase excellence.",
    "opening_title": "SUPERSTAR",
    "hero_image": "https://via.placeholder.com/1920x1080/0a0a0a/EF9F27?text=MAHESH+BABU",
    "birthday_message": "Happy 50th Birthday, Superstar.\nFifty years of a legend in the making."
  },
  "timeline": [
    {
      "year": "1979",
      "age": 4,
      "event": "First film appearance as a child artist in Needa",
      "image": "placeholder_url",
      "era": "childhood"
    }
    // ... continue through 2025, minimum 14 entries
  ],
  "films": [
    {
      "id": "raja_kumarudu",
      "title": "Raja Kumarudu",
      "year": 1999,
      "director": "S.S. Rajamouli",
      "poster": "placeholder_url",
      "trailer_url": "",
      "collection": "Major Hit",
      "awards": ["Filmfare Award for Best Male Debut"],
      "role": "Raja",
      "genre": ["Romance", "Drama"],
      "decade": "1990s",
      "milestone": "debut",
      "description": "His debut as lead actor — the arrival of a superstar."
    }
    // ... minimum 20 major films through Guntur Kaaram (2024)
  ],
  "stats": {
    "total_films": 27,
    "years_in_industry": 46,
    "debut_year": 1979,
    "lead_debut_year": 1999,
    "box_office_total": "₹2000+ Crores",
    "box_office_number": 2000,
    "awards_total": 42,
    "filmfare_awards": 8,
    "nandi_awards": 6,
    "siima_awards": 11,
    "fan_clubs_worldwide": 1200,
    "social_media_followers": 18000000
  },
  "dialogues": [
    {
      "line": "Meeru... meeru cheppindi correct gaane... nenu hero ni kaadu, superstar ni.",
      "film": "Pokiri",
      "year": 2006,
      "scene_context": "The moment that defined a generation of Telugu cinema fans.",
      "transliteration": "You are right... I am not a hero, I am a superstar."
    }
    // ... minimum 8 iconic dialogues
  ],
  "philanthropy": [
    {
      "initiative": "Mahesh Babu Foundation",
      "description": "Education and healthcare initiatives for underprivileged children across Andhra Pradesh and Telangana.",
      "image": "placeholder_url",
      "year_started": 2011
    }
    // ... 3-4 entries
  ],
  "gallery": [
    {
      "url": "placeholder_url",
      "caption": "On the sets of Pokiri, 2006",
      "era": "2000s",
      "type": "behind_scenes"
    }
    // ... minimum 12 gallery items
  ],
  "awards_highlights": [
    { "award": "Filmfare Best Actor", "film": "Okkadu", "year": 2003 }
    // ... 8 major awards
  ],
  "closing": {
    "wish_title": "Happy Birthday, Superstar",
    "wish_subtitle": "50 years of pure magic",
    "wish_body": "From a child artist who stole hearts to a superstar who owns them — every frame, every dialogue, every role has been a gift to Telugu cinema and to millions of fans worldwide. Here's to fifty more.",
    "signature": "— Your Fans, Forever"
  }
}
```

---

## DESIGN SYSTEM — LOCK THIS IN BEFORE ANY CSS

### Color Palette (CSS Variables)
```css
:root {
  --black:       #0A0A0A;
  --black-soft:  #111111;
  --black-panel: #181818;
  --gold:        #EF9F27;
  --gold-deep:   #BA7517;
  --gold-pale:   #FAC775;
  --gold-glow:   rgba(239,159,39,0.12);
  --cream:       #F4F0E6;
  --cream-muted: #C8C0A8;
  --white:       #FFFFFF;
  --text-primary:   #F4F0E6;
  --text-muted:     #8A8070;
  --text-dim:       #4A4540;
  --border-gold:    rgba(239,159,39,0.2);
  --border-subtle:  rgba(255,255,255,0.06);
}
```

### Typography (import from Google Fonts)
```
- Display / Hero headings:   "Playfair Display", serif — weights 400, 700, 900
- Quote / Dialogue sections: "Cormorant Garamond", serif — weights 300, 400, 500 italic
- Data / Stats / Years:      "DM Mono", monospace — weights 300, 400
- Body / UI labels:          "Playfair Display", serif — weight 400
```

### Typography Scale
```
--text-hero:     clamp(72px, 12vw, 160px)   — Opening title
--text-chapter:  clamp(48px, 7vw, 100px)    — Section headings
--text-title:    clamp(28px, 4vw, 52px)     — Card/panel titles
--text-body:     clamp(15px, 1.8vw, 18px)   — Body text
--text-caption:  clamp(11px, 1.2vw, 13px)   — Labels, meta
--text-stat:     clamp(48px, 8vw, 96px)     — Stat counters
--text-mono:     clamp(11px, 1.1vw, 13px)   — Mono data
```

### Spacing System
```css
--section-padding-x: clamp(20px, 6vw, 120px);
--section-padding-y: clamp(80px, 10vw, 160px);
--gap-sm: 12px;
--gap-md: 24px;
--gap-lg: 48px;
--gap-xl: 80px;
```

---

## GLOBAL RULES — APPLY TO EVERY SECTION

### Smooth Scroll
```js
// Initialize Lenis
const lenis = new Lenis({
  duration: 1.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
  touchMultiplier: 1.8,
  infinite: false,
});
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);
// Connect Lenis to GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);
```

### Global Scroll Animation Pattern
Every section must use this pattern — nothing appears static on scroll:
```js
// Every section registers a ScrollTrigger
ScrollTrigger.create({
  trigger: ".section",
  start: "top 85%",
  onEnter: () => { /* animate in */ },
  onLeaveBack: () => { /* animate out / reset */ }
});
```

### Touch Ripple — Apply to ALL interactive elements
```js
// On every touchstart / click on interactive elements
function createRipple(e, element) {
  const ripple = document.createElement('span');
  ripple.className = 'ripple-effect';
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.cssText = `
    width: ${size}px; height: ${size}px;
    left: ${(e.clientX || e.touches[0].clientX) - rect.left - size/2}px;
    top:  ${(e.clientY || e.touches[0].clientY) - rect.top  - size/2}px;
  `;
  element.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
}
```
```css
.ripple-effect {
  position: absolute; border-radius: 50%;
  background: rgba(239,159,39,0.25);
  transform: scale(0); animation: ripple 0.6s ease-out forwards;
  pointer-events: none;
}
@keyframes ripple { to { transform: scale(2.5); opacity: 0; } }
```

### Custom Cursor (desktop only)
```js
// Gold dot cursor that follows mouse with lag
// Inner dot: instant follow
// Outer ring: 0.1s lerp follow
// On hover of interactive elements: ring expands 2x, fills gold
```

### Grain Overlay (always on)
```css
body::after {
  content: '';
  position: fixed; inset: 0; z-index: 9999;
  pointer-events: none;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,..."); /* SVG noise */
  background-repeat: repeat;
  animation: grain 0.8s steps(1) infinite;
}
@keyframes grain {
  0%,100% { transform: translate(0,0); }
  10%      { transform: translate(-2%,-3%); }
  20%      { transform: translate(3%, 2%); }
  /* ... 8 steps */
}
```

### Responsive Breakpoints
```css
/* Mobile first */
/* sm: 480px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1600px */
/* Use clamp() for everything possible — minimize media queries */
/* Touch targets minimum 44px × 44px on mobile */
/* Font sizes via clamp() — never px only */
/* Grid: CSS Grid with auto-fit + minmax — never fixed column counts */
```

---

## SECTION-BY-SECTION BUILD SPEC

---

### SECTION 0 — PRELOADER

**Purpose:** Build anticipation before anything loads.

**Layout:**
- Fullscreen black (`#0A0A0A`)
- Center: His name "MAHESH BABU" in DM Mono, letter-spaced, loading character by character
- Below: A thin gold horizontal progress bar, animating 0% → 100% over 2.2 seconds
- Background: Very faint gold radial gradient pulsing slowly at center

**Animation sequence:**
1. Letters appear one by one left to right, 80ms interval, staggered fade+translateY(10px)→0
2. Progress bar fills with gold, easing: `power2.inOut`
3. At 100%: entire preloader does `opacity: 0, scale: 1.05` over 600ms
4. Unmask the main site by clipping/fading preloader out
5. Trigger hero entrance animation

**CSS:**
- Preloader has `position: fixed; z-index: 10000`
- Letter spans: `display: inline-block; overflow: hidden`

---

### SECTION 1 — HERO / ARRIVAL

**Purpose:** First impression. Silence before thunder.

**Layout:**
- Fullscreen (`100dvh`)
- Background: Deep black, single hero image fills 100% (from `data.meta.hero_image`), with a dramatic dark overlay gradient: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)`
- Bottom-left: Year of birth `"1975"` in DM Mono, gold, very large and faint (opacity 0.06), positioned behind the text as a ghost element
- Center/bottom-left alignment:
  - Line 1: `data.meta.opening_title` → "SUPERSTAR" in Playfair Display, `--text-hero` size, color: `var(--gold)`, letter-spacing: 0.1em
  - Line 2: `data.meta.full_name` in cream, `--text-chapter` size
  - Line 3: `data.meta.tagline` in Cormorant Garamond italic, `--text-body`, `var(--cream-muted)`
  - Below: Gold hairline (`1px solid var(--gold)`), 80px wide, then birthday date in DM Mono
- Bottom-right: Scroll indicator — "SCROLL" text vertical, with animated gold line moving downward infinitely

**Entrance Animation (triggered after preloader exits):**
```
t=0ms:    "SUPERSTAR" text → from translateY(60px) opacity:0 → to position opacity:1, duration:1.2s, ease:power3.out
t=300ms:  Full name → same treatment, duration:1s
t=500ms:  Tagline → same, duration:0.8s
t=700ms:  Gold hairline → scaleX from 0→1, transformOrigin: left, duration:0.6s
t=900ms:  Date → fade in, duration:0.5s
t=1100ms: Scroll indicator → fade in
```

**Parallax on scroll:**
- Hero image: `y: "0% → 30%"` as user scrolls down (GSAP ScrollTrigger parallax)
- "SUPERSTAR" text: `y: "0 → -80px"` subtle upward drift
- Overlay gradient: darkens as scroll progresses

**Touch interaction:**
- On mobile touch/drag: hero image has subtle `3D perspective tilt` following finger (max ±8deg X, ±5deg Y), using `deviceorientation` on mobile

**Responsive:**
- Mobile: text alignment switches to center, text sizes use clamp minimum
- The ghost year number repositions behind the main title

---

### SECTION 2 — CHAPTER INTRO: "THE JOURNEY"

**Purpose:** Section heading / chapter title. Pure typography moment.

**Layout:**
- 60vh height, centered content
- Large text: "THE JOURNEY" — Playfair Display, `clamp(60px, 9vw, 120px)`, one word per line, gold color
- Below: A single sentence from `data.meta.hero_quote` in Cormorant Garamond italic, `--text-body`, cream-muted
- Left of the text block: A vertical gold line (`2px wide, 60px tall`), acting as a bracket

**Scroll animation:**
- Text words stagger in from bottom, one word at a time: `translateY(100%) → translateY(0)`, each word wrapped in an overflow-hidden span (clip reveal technique)
- Gold line scales from 0 → 1 on `scaleY`, `transformOrigin: top`
- Quote fades in 400ms after the title completes

---

### SECTION 3 — TIMELINE: "THE BOY FROM VIJAYAWADA"

**Purpose:** Horizontal scrolling timeline of his life milestones.

**Layout:**
- Full viewport width and height
- **Horizontal scroll pinned section** — the outer wrapper is pinned via GSAP ScrollTrigger `pin: true`
- Inside: A horizontal track with all timeline cards laid out in a row
- Track width: `(number_of_items × card_width) + gaps`
- Background: `var(--black-soft)`
- Top: Section label "TIMELINE" in DM Mono, gold, small caps
- Top-right: Year display that updates as user scrolls: large DM Mono gold year, changes to current card's year

**Each timeline card (rendered from `data.timeline`):**
- Width: `clamp(260px, 35vw, 400px)`, height: fills section
- Layout: Image top half (if available), year in DM Mono gold large, event text in Playfair Display, short description
- Border-right: `1px solid var(--border-gold)`
- On entry into view (as horizontal scroll progresses): card animates from `opacity:0, translateY(30px)` → in

**GSAP Horizontal Scroll setup:**
```js
const tl = gsap.to(".timeline-track", {
  x: () => -(track.scrollWidth - window.innerWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: ".timeline-section",
    pin: true,
    scrub: 1,
    end: () => "+=" + (track.scrollWidth - window.innerWidth),
    invalidateOnRefresh: true,
  }
});
```

**Mobile fallback:**
- On screens < 768px: switch to vertical scroll layout (standard cards stacked), no horizontal pin
- Each card slides in from right on scroll into view

**Progress bar:**
- Thin gold line at the very bottom of the section, fills left-to-right as horizontal scroll progresses

---

### SECTION 4 — CHAPTER INTRO: "THE FILMS"

Same treatment as Section 2. Text: "THE FILMS". Quote: a famous line about his filmography.

---

### SECTION 5 — FILMOGRAPHY WALL

**Purpose:** The most interactive section. Every film is a moment.

**Layout:**
- CSS Masonry-style grid using `columns` property (not CSS grid — for true masonry)
  - Desktop: 4 columns
  - Tablet: 3 columns
  - Mobile: 2 columns
- Background: `var(--black)` with a very subtle diagonal line texture (CSS, not image)
- Top: Filter bar — decade buttons (1990s, 2000s, 2010s, 2020s) + genre chips + "Milestones only" toggle — all in DM Mono, gold border buttons

**Each film card (rendered from `data.films`):**
```
Structure:
  - Wrapper: position relative, overflow hidden, border-radius 8px
  - Poster image: 100% width, aspect-ratio 2/3 (portrait poster ratio)
  - Overlay (always visible, bottom): gradient black, showing title + year
  - Overlay (on hover/touch): full card darkens, more info appears:
      - Role name
      - Director
      - Collection/performance
      - Awards badges (small gold pills)
  - Top-left corner badge: milestone films get a gold star ✦ badge
```

**Hover animation (desktop):**
```js
// On mouseenter:
gsap.to(card, { scale: 1.03, duration: 0.35, ease: "power2.out" });
gsap.to(overlay, { opacity: 1, y: 0, duration: 0.3 });
// Neighboring cards slightly desaturate (filter: brightness(0.7))
```

**Touch animation (mobile):**
- First tap: reveal overlay (same content as hover)
- Second tap: open full detail modal

**Filter animation:**
```js
// When filter changes:
// 1. Non-matching cards: gsap.to → opacity:0, scale:0.9, duration:0.3
// 2. Remove from layout (display none after animation)
// 3. Matching cards: re-animate in with stagger
```

**Stagger entrance on section enter:**
```js
gsap.from(".film-card", {
  opacity: 0,
  y: 60,
  stagger: { amount: 0.8, from: "start" },
  duration: 0.7,
  ease: "power3.out",
  scrollTrigger: { trigger: ".films-section", start: "top 70%" }
});
```

**Film Detail Modal:**
- Triggered on click (desktop) or double-tap (mobile)
- Slides up from bottom: `translateY(100%) → translateY(0)`, 0.5s, cubic-bezier(0.16, 1, 0.3, 1)
- Contains: Large poster, film details, full awards list, a "Watch Trailer" button (links to trailer_url if available)
- Close: swipe down on mobile, X button or Escape on desktop
- Background: Blurred dark overlay (`backdrop-filter: blur(20px) brightness(0.3)`)

---

### SECTION 6 — STATS: "THE NUMBERS"

**Purpose:** Data as emotion. Make raw numbers feel epic.

**Layout:**
- Full-width section, `var(--black-panel)` background
- Left half: large decorative gold number (box office total), faint, 200px font, positioned as background element
- Right / main area: grid of stat cards, 2×2 on desktop, 1 column on mobile

**Each stat card:**
```
- Background: transparent, bordered by 1px gold hairline
- Top: stat label in DM Mono, uppercase, gold, 12px, letter-spaced
- Center: CountUp.js number, var(--text-stat) size, Playfair Display
- Bottom: context line in Cormorant Garamond italic, cream-muted
- On entry: border draws itself (scaleX from 0→1 on bottom border, then scaleY on right, then top, then left — clockwise border animation)
```

**CountUp trigger:**
```js
ScrollTrigger.create({
  trigger: ".stats-section",
  start: "top 60%",
  once: true,
  onEnter: () => {
    new CountUp("box-office", 0, data.stats.box_office_number, 0, 2.5).start();
    new CountUp("awards", 0, data.stats.awards_total, 0, 2).start();
    // etc.
  }
});
```

**Additional animated elements:**
- Awards timeline: a horizontal bar, each segment = one award year, fills left to right on entry
- Fan clubs: world map SVG with dots appearing one by one with gold pulse animation

---

### SECTION 7 — DIALOGUES: "THE VOICE"

**Purpose:** Emotional peak. Full-screen quote experience.

**Layout:**
- Fullscreen height per dialogue
- Background: alternates between `var(--black)` and `var(--black-soft)`
- Each dialogue fills the screen:
  - Very large Cormorant Garamond italic quote, `clamp(28px, 4.5vw, 60px)`, centered, max-width 800px
  - Below: Gold hairline separator
  - Film name in DM Mono, gold, small
  - Scene context in Playfair Display, `--text-body`, cream-muted
  - Year in DM Mono, large, faint gold, behind the text (background element, opacity 0.05)

**Scroll animation per dialogue:**
```js
// Pin each dialogue card for 1.5x scroll distance, then release
// Entry: quote text does clip reveal (overflow hidden + translateY)
  — Each line of the quote reveals independently
  — Stagger: 100ms per line
// Exit: fade + slight blur as next dialogue enters
```

**Between-dialogue transition:**
- A gold horizontal line wipes across the screen (scaleX 0→1→0) as one dialogue exits and the next enters

**Touch on mobile:**
- Each dialogue is a full-screen card
- Swipe up = next, swipe down = previous (overrides vertical scroll during swipe gesture)
- Small dot navigation on the right edge

---

### SECTION 8 — THE HUMAN: "BEYOND THE SUPERSTAR"

**Purpose:** Slow the pace. Show the man behind the icon.

**Layout:**
- Split layout: sticky image on left (50% width), scrollable text column on right
- As user scrolls through this section, the LEFT IMAGE changes (cross-dissolves to next image) while the right text scrolls normally
- Background: `var(--black)`, slightly warmer tone achieved via a very faint warm overlay

**Mobile:** Stacked layout, image above text for each item.

**Each philanthropy/personal entry (from `data.philanthropy`):**
- Image: full left panel, object-fit: cover
- Right column: initiative title in Playfair Display, `--text-title`, gold; body in Playfair Display, `--text-body`, cream; year badge in DM Mono

**Image transition (on scroll):**
```js
// Track scroll position within section
// At each threshold: crossfade to next image
gsap.to(currentImg, { opacity: 0, duration: 0.6, ease: "power2.inOut" });
gsap.fromTo(nextImg, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power2.inOut" });
```

**Scroll animation:**
- Right column paragraphs: each entry slides in from right (`translateX(40px)→0`) as it enters the viewport

---

### SECTION 9 — GALLERY: "FRAMES OF A LEGEND"

**Purpose:** Visual richness without feeling like spam.

**Layout:**
- Infinite marquee rows — two rows of images moving in opposite directions, continuously, at slow pace
- Row 1: moves left at 40px/s
- Row 2: moves right at 30px/s
- Each image: `clamp(200px, 25vw, 360px)` width, auto height, border-radius 8px, slight gap
- On hover: pause the row's marquee, image scales to 1.05, caption appears below

**Implementation:**
```js
// CSS animation for marquee, JS pauses on hover
// Duplicate the image list to create seamless loop
// Use CSS: animation: marquee 40s linear infinite
// gsap.to row, { x: -totalWidth, duration: 40, ease: "none", repeat: -1 }
// lenis.stop() + row pause on image hover; resume on mouseleave
```

**Touch on mobile:**
- Remove hover pause
- Images are swipeable (touch-action: pan-x on the marquee rows)
- Tap on image: lightbox opens (simple fullscreen image with caption, close on tap outside)

---

### SECTION 10 — AWARDS HIGHLIGHTS

**Purpose:** Quick visual punch. The accolades at a glance.

**Layout:**
- Horizontal scroll list (not pinned — just a scrollable row with overflow-x)
- Each award: a minimal card, gold left border, award name in Playfair Display, film in DM Mono, year in DM Mono gold
- Entrance: cards fly in from right with stagger when section enters viewport

**Mobile:** Same but with touch scroll, momentum preserved via Lenis touch handling.

---

### SECTION 11 — BIRTHDAY WISH: THE CLOSE

**Purpose:** The emotional payoff. Make it unforgettable.

**Layout:**
- Fullscreen, `var(--black)` background
- Background: looping subtle particle field (gold particles drifting upward, very slow, 0.3 opacity)
- Center: stacked text block:
  - Line 1: `"Happy Birthday"` — Cormorant Garamond italic, `clamp(32px, 5vw, 72px)`, cream-muted
  - Line 2: `"Superstar"` — Playfair Display, `clamp(64px, 12vw, 160px)`, gold, bold
  - Line 3: `data.closing.wish_subtitle` — DM Mono, gold-deep, small
  - Hairline separator (gold, 120px wide)
  - Body message: `data.closing.wish_body` — Cormorant Garamond, `--text-body`, cream, max-width 600px, centered
  - Signature: `data.closing.signature` — DM Mono, gold, small

**Entrance trigger (ScrollTrigger, once):**
```
Step 1 (0ms):    Confetti burst fires (canvas-confetti, gold + cream colors, 300 particles, 4s duration)
Step 2 (200ms):  "Happy Birthday" clips up from bottom (overflow hidden reveal)
Step 3 (600ms):  "Superstar" same, with slight letter-spacing animation from 0.3em → 0.1em
Step 4 (1000ms): Subtitle and separator fade in
Step 5 (1400ms): Body text fades in, line by line
Step 6 (2000ms): Signature fades in
```

**Confetti config:**
```js
confetti({
  particleCount: 300,
  angle: 90, spread: 180,
  origin: { x: 0.5, y: 0.6 },
  colors: ['#EF9F27', '#BA7517', '#FAC775', '#F4F0E6', '#FFFFFF'],
  ticks: 300,
  gravity: 0.5,
  scalar: 1.2,
  drift: 0.3,
});
```

**Share button:**
```
"SHARE THIS TRIBUTE" — styled gold button, calls Web Share API (navigator.share)
Fallback: copies URL to clipboard with a "Link copied ✓" toast notification
Touch ripple applies to this button
```

**Footer:**
- Thin section below: "Made with love for the Superstar's 50th" in DM Mono, very small, centered, gold, opacity 0.4

---

## NAVIGATION

**Desktop:**
- Fixed top nav, `position: fixed; top: 0; z-index: 1000`
- Background: transparent initially → `rgba(10,10,10,0.9) backdrop-filter:blur(12px)` after 100px scroll
- Left: "MB" monogram in Playfair Display, gold
- Right: section dots (small circle per section), active dot fills gold, hover shows section name tooltip
- Transition: dots highlight as user scrolls through sections (ScrollTrigger per section)

**Mobile:**
- Nav collapses to just "MB" monogram + hamburger
- Hamburger opens a fullscreen menu overlay:
  - Background: `var(--black)`, gold text
  - Links: section names in Playfair Display, large, staggered entrance
  - Close: X button or swipe right
  - Entrance/exit: `clipPath: circle(0% at top-right) → circle(150% at top-right)`, 0.5s ease

---

## PERFORMANCE RULES

```
1. All images use loading="lazy" and decoding="async"
2. Images wrapped in aspect-ratio containers to prevent layout shift
3. All animations use transform + opacity only — NEVER animate width, height, top, left
4. Use will-change: transform only on elements that animate continuously
5. Intersection Observer for all one-shot animations — NOT a global scroll listener
6. Placeholder images: use solid colored divs with the film title text if image fails
7. data.json loaded once on DOMContentLoaded, stored in window.siteData
8. All DOM rendering done in one pass (DocumentFragment) per section
9. RequestAnimationFrame for any JS-driven animation, never setTimeout for motion
10. ScrollTrigger.refresh() called after all content renders
```

---

## INTERACTION MICRO-DETAILS — APPLY EVERYWHERE

These are what make the difference between "nice site" and "lakhs-worth site":

```
1. All buttons: scale(0.97) on active/press, spring back on release (CSS transition 0.1s)
2. All cards: cursor changes to custom gold cursor on hover
3. Internal page links (nav dots): smooth scroll via lenis.scrollTo(target)
4. Any text that could be a quote: on hover, a subtle gold underline draws itself (scaleX)
5. Section headings: each letter wrapped in a span on render, entrance is staggered per-letter
6. Numbers: always DM Mono, always gold
7. Images: on load, animate from grayscale(100%) → grayscale(0%) over 0.5s
8. Scroll progress: a 1px gold line at the very top of the viewport, fixed, fills left→right as user scrolls through entire page
9. Touch swipe on mobile: all horizontal scroll sections have swipe gesture support with momentum
10. On mobile, section headings reduce to 2-line max, overflow ellipsis never — rewrite to fit
11. Section transitions: as a section exits viewport, it very subtly scale(0.98) + opacity(0.6), making the entering section feel like it's coming forward
12. Gold elements: on hover, a very subtle warm glow (box-shadow: 0 0 20px rgba(239,159,39,0.3))
13. Pointer: custom SVG cursor for desktop — small gold circle (8px) + outer ring (28px) that follows with lag
```

---

## ACCESSIBILITY

```
- All images: meaningful alt text from JSON caption fields
- Color contrast: cream text on black = passes WCAG AA
- Focus states: gold outline on all interactive elements
- Reduced motion: wrap all non-essential animations in @media (prefers-reduced-motion: no-preference) {}
- ARIA labels on all icon buttons
- Skip to main content link at top
- All section headings: proper h1/h2/h3 hierarchy
```

---

## FINAL QUALITY CHECKLIST (run before declaring done)

```
□ Preloader runs exactly once and never shows again on reload if cached
□ Hero entrance animation fires after preloader exits — not before
□ Horizontal timeline scroll works on desktop AND falls back cleanly on mobile
□ All JSON fields render — no [object Object] or undefined visible
□ Film filter actually filters and re-animates
□ CountUp numbers start from 0 and count up correctly
□ Dialogue section: all dialogues readable, quote text never overflows
□ Birthday confetti fires exactly once on scroll into view
□ Share button works (Web Share API + clipboard fallback)
□ Navigation dots highlight the correct section during scroll
□ No horizontal scroll on mobile (overflow-x: hidden on body)
□ All touch targets ≥ 44px
□ Images have fallback background color if they 404
□ Lenis + GSAP ScrollTrigger: no conflicts, smooth on all browsers
□ Page loads under 3s with placeholder images
□ Zero console errors
□ Looks correct at: 375px (iPhone SE), 430px (iPhone 15), 768px (iPad), 1024px (laptop), 1440px (desktop), 1920px (wide)
```

---

## OUTPUT ORDER

Build in this exact order:

1. `data.json` — complete, all fields filled intelligently
2. `style.css` — design system variables, resets, all component styles, all animation keyframes, all responsive rules
3. `index.html` — semantic HTML shell, all section wrappers, CDN script tags, meta tags
4. `main.js` — all JS: data fetch, DOM rendering, Lenis init, GSAP animations, ScrollTrigger per section, interactions, preloader logic, confetti trigger, share API

Do not truncate any file. Each file must be production-complete.

---

**This is a tribute to a legend. Build it like one.**

