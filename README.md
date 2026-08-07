# project-bob

A fan-made cinematic tribute to Telugu superstar Mahesh Babu. This project is built as a rich scroll-driven web experience with interactive chapters, embedded 3D sections, and a curated fan gallery.

## Chapters

### Chapter 01 — The Arrival
- Introduces the tribute with a bold hero section.
- Displays a fullscreen hero asset using either video or image depending on device.
- Shows the hero title, full name, birthday date, and a fan-crafted opener.
- Uses `data.json` for all hero metadata and launch copy.

### Chapter 02 — The Journey
- Presents an interactive hexagon memory sphere inside `hexsphere.html`.
- Loads film memory tiles from `hex-notes.json`.
- The sphere is rendered with Three.js and allows hover/tap interactions.
- This chapter is rendered by `main.js` through `renderHexSphereChapter()`.

### Chapter 03 — The Road
- Embeds the milestone roadmap via `mb_road.html` / `mb_road1.html`.
- Showcases Mahesh Babu's career milestones from 1975 to 2026.
- Uses a scroll-synced iframe bridge to keep the embedded road in sync with the main page.
- Includes images for each milestone in `assets/roadmap/`.

### Chapter 04 — The Recognition
- Displays the awards carousel and box office pulse.
- Includes Nandi Awards, Filmfare South, and National Film Awards.
- Shows top grossing films and the upcoming SSMB29 project.
- Built with interactive swipe, click, and GSAP animation support.

### Chapter 05 — Photo Gallery
- Presents curated fan frames and tribute visuals.
- Loads image cards from `data.json` gallery entries.
- Uses lazy loading for optimized performance.

### Chapter 06 — Birthday Wish
- Includes a closing birthday message and fan dedication.
- Uses stylized copy drawn from the tribute's emotional core.

### Chapter 07 — Built By A Fan
- Profiles the developer and designer behind the project.
- Displays contact links and a fan-note.
- Uses developer metadata from `data.json`.

## Key Files

- `index.html` — the main tribute shell.
- `main.js` — loads `data.json`, renders chapters, and wires animations.
- `style.css` — visual system, layouts, and chapter styling.
- `data.json` — all site content, including hero metadata, chapters, awards, films, gallery, and developer copy.
- `hex-notes.json` — the hex sphere memory content.
- `hexsphere.html` — interactive Three.js hex sphere experience.
- `mb_road.html` / `mb_road1.html` — embedded roadmap modules.
- `assets/` — images, videos, hex tile assets, roadmap artwork, and support media.

## How This Works

- `main.js` initializes the experience on `DOMContentLoaded`.
- A preloader runs while `data.json` loads.
- The site uses `Lenis` for smooth scrolling and `GSAP` / `ScrollTrigger` for reveal animations.
- The roadmap iframe receives progress updates through a postMessage bridge.
- The hex sphere and roadmap modules are separate embedded experiences that keep the main site lightweight.

## Local Development

Start a local server from the project root:

```bash
sh start-server.sh
```

Or use a simple HTTP server:

```bash
cd /Volumes/D-Drive/Projects/project-bob
python3 -m http.server 8000
```

Open the site in a browser and navigate to `http://localhost:8000`.

## Deployment Notes

- The project is designed to deploy as a static site.
- Vercel Analytics placeholders are already added in each HTML page.
- After deployment, enable Analytics in your Vercel dashboard and verify the auto-generated script path.

## Project Assets

- `assets/images/` — hero images, gallery frames.
- `assets/videos/` — hero video sources.
- `assets/roadmap/` — milestone cards, event imagery, and roadmap media.
- `assets/hex/` — hex tile images used by the sphere.

## Chapter Content Sources

- `data.json` drives the site copy for hero, chapters, awards, films, gallery, and closing wish.
- `hex-notes.json` contains the 30 film memory tiles for the hex sphere.
- `mb_road.html` and `mb_road1.html` define the year-by-year milestone journey and embedded road module behavior.

## Author

- Built by Surya Teja — developer, designer, and Mahesh Babu fan.
- Fan tribute site with a focus on cinematic storytelling, polished motion, and interactive fan memory experiences.
