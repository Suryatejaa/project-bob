const state = {
  data: null,
  lenis: null
};

const app = document.querySelector("#app");
const preloader = document.querySelector("[data-preloader]");
const preloaderName = document.querySelector("[data-preloader-name]");
const preloaderBar = document.querySelector("[data-preloader-bar]");

document.addEventListener("DOMContentLoaded", init);

async function init() {
  try {
    const response = await fetch("./data.json");
    state.data = await response.json();
    renderSite(state.data);
    setupSmoothScroll();
    setupRoadMapBridge();
    setupCursor();
    setupInteractions();
    setupAnimations();
    runPreloader(state.data.meta.name);
  } catch (error) {
    app.innerHTML = `<section class="section"><h1>Unable to load tribute data.</h1><p>${error.message}</p></section>`;
    app.style.opacity = 1;
  }
}

function renderSite(data) {
  app.innerHTML = `
    ${renderHero(data)}
    ${renderHexSphereChapter(data.chapters[1])}
    ${renderRoadMapSection()}
  `;
}

function renderHero(data) {
  const media = data.meta.hero_video1
    ? `
      <video autoplay muted loop playsinline poster="${data.meta.hero_image}">
        ${
          data.meta.hero_image_mobile
            ? `<source media="(max-width: 767px)" src="${data.meta.hero_image_mobile}" />`
            : ""
        }
        <source src="${data.meta.hero_video}" />
      </video>
    `
    : `
      <picture>
        <source media="(max-width: 767px)" srcset="${data.meta.hero_image_mobile || data.meta.hero_image}" />
        <img src="${data.meta.hero_image}" alt="${data.meta.full_name}" />
      </picture>
    `;

  return `
    <section class="section hero-section" data-section="hero">
      <div class="hero-media" data-hero-media>${media}</div>
      <div class="hero-year">${data.meta.birthday.slice(-4)}</div>
      <div class="hero-content">
        <div class="kicker hero-kicker">Nuvvu Evaidna sare JAI BABU analsindhe</div>
        <h1 class="hero-title" data-text="${data.meta.opening_title}">${data.meta.opening_title}</h1>
        <h2 class="hero-name">${data.meta.full_name}</h2>
        <span class="hairline"></span>
        <div class="meta-line">Since ${data.meta.birthday}</div>
      </div>
      <div class="scroll-indicator">Scroll</div>
    </section>
  `;
}

function renderChapter(chapter) {
  const words = chapter.title
    .split(" ")
    .map((word) => `<span><b>${word}</b></span>`)
    .join("");

  return `
    <section class="section chapter-section">
      <div class="chapter-inner">
        <div class="kicker">${chapter.kicker}</div>
        <h2 class="chapter-title">${words}</h2>
        <p class="chapter-quote">${chapter.quote}</p>
      </div>
    </section>
  `;
}

function renderHexSphereChapter(chapter) {
  return `
    <section class="section hex-chapter-section" data-hex-chapter>
      <div class="hex-chapter-copy">
        <div class="kicker">${chapter.kicker}</div>
        <h2 class="hex-chapter-title">${chapter.title}</h2>
        <p>${chapter.quote}</p>
      </div>
      <div class="hex-chapter-stage">
        <iframe
          src="./hexsphere.html"
          title="Interactive Mahesh Babu fan memory sphere"
          loading="lazy"
          data-hex-frame
        ></iframe>
      </div>
    </section>
  `;
}

function renderRoadMapSection() {
  return `
    <section class="roadmap-section" data-roadmap-section>
      <div class="roadmap-sticky">
        <div class="roadmap-chapter-copy">
          <div class="kicker">Chapter 03</div>
          <h4>The Road</h4>
          <p>Milestones, achievements, charity, and the legacy beyond the theatre screen.</p>
        </div>
        <iframe
          src="./mb_road.html?embed=1"
          title="Mahesh Babu journey roadmap"
          loading="lazy"
          data-roadmap-frame
        ></iframe>
      </div>
    </section>
  `;
}

function renderTimeline(items) {
  return `
    <section class="section timeline-section" data-timeline-section>
      <div class="timeline-header">
        <div>
          <div class="timeline-label">Timeline</div>
          <div class="section-heading"><h2>The Boy Inside Cinema</h2></div>
        </div>
        <div class="timeline-year-live" data-live-year>${items[0].year}</div>
      </div>
      <div class="timeline-track" data-timeline-track>
        ${items
          .map(
            (item) => `
              <article class="timeline-card" data-year="${item.year}">
                <img src="${item.image}" alt="${item.event}" />
                <div>
                  <div class="meta-line">${item.year} / Age ${item.age}</div>
                  <h3>${item.event}</h3>
                  <p>${item.description}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="timeline-progress"><span data-timeline-progress></span></div>
    </section>
  `;
}

function renderPersonality(data) {
  return `
    <section class="section personality-section">
      <div class="section-heading">
        <div class="kicker">The Mahesh Babu Formula</div>
        <h2>Class is calm. Mass is timing.</h2>
        <p>${data.meta.birthday_message}</p>
      </div>
      <div class="personality-grid">
        ${data.personality
          .map(
            (item) => `
              <article class="personality-card">
                <h3>${item.trait}</h3>
                <p>${item.copy}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFilms(films) {
  const decades = ["All", ...new Set(films.map((film) => film.decade))];
  return `
    <section class="section films-section">
      <div class="section-heading">
        <div class="kicker">Film Wall</div>
        <h2>The Frames Fans Remember</h2>
        <p>Chosen like memories from a fan's heart, not a poster dump.</p>
      </div>
      <div class="filter-bar">
        ${decades
          .map(
            (decade, index) => `
              <button class="filter-button interactive ${index === 0 ? "is-active" : ""}" data-filter="${decade}">
                ${decade}
              </button>
            `
          )
          .join("")}
        <button class="filter-button interactive" data-filter="Milestones">Milestones</button>
      </div>
      <div class="film-grid" data-film-grid>
        ${films.map(renderFilmCard).join("")}
      </div>
    </section>
  `;
}

function renderFilmCard(film) {
  return `
    <article class="film-card interactive" data-film-id="${film.id}" data-decade="${film.decade}" data-milestone="${film.milestone}">
      <img src="${film.poster}" alt="${film.title}" />
      <div class="film-overlay">
        <div class="meta-line">${film.year} / ${film.collection}</div>
        <h3>${film.title}</h3>
        <div class="film-details">
          <p>${film.description}</p>
          <span class="badge">${film.milestone}</span>
          <span class="badge">${film.genre[0]}</span>
        </div>
      </div>
    </article>
  `;
}

function renderStats(stats) {
  const cards = [
    ["Films", stats.total_films, "credited screen journey"],
    ["Years", stats.years_in_industry, "from first appearance"],
    ["Box Office", stats.box_office_number, "crores and counting"],
    ["Fan Clubs", stats.fan_clubs_worldwide, "worldwide fan energy"]
  ];

  return `
    <section class="section stats-section">
      <div class="stats-ghost">${stats.box_office_total}</div>
      <div class="section-heading">
        <div class="kicker">The Numbers</div>
        <h2>Data, but with goosebumps.</h2>
        <p>Milestones that feel less like arithmetic and more like applause.</p>
      </div>
      <div class="stats-grid">
        ${cards
          .map(
            ([label, value, context], index) => `
              <article class="stat-card">
                <div class="stat-label">${label}</div>
                <div class="stat-value" id="stat-${index}" data-count="${value}">0</div>
                <p>${context}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderDialogues(dialogues) {
  return `
    <section class="section dialogue-section">
      <div class="dialogue-stage">
        <div class="kicker">Dialogue Chamber</div>
        <p class="dialogue-line" data-dialogue-line>${dialogues[0].line}</p>
        <div class="dialogue-meta" data-dialogue-meta>${dialogues[0].film} / ${dialogues[0].year}</div>
        <div class="dialogue-controls">
          <button class="icon-button interactive" data-dialogue-prev aria-label="Previous dialogue">‹</button>
          <button class="icon-button interactive" data-dialogue-next aria-label="Next dialogue">›</button>
        </div>
      </div>
    </section>
  `;
}

function renderPhilanthropy(items) {
  return `
    <section class="section philanthropy-section">
      <div class="section-heading">
        <div class="kicker">Beyond Cinema</div>
        <h2>The quiet side of stardom.</h2>
        <p>Premium does not always mean louder. Sometimes it means kinder.</p>
      </div>
      <div class="philanthropy-grid">
        ${items
          .map(
            (item) => `
              <article class="philanthropy-card">
                <img src="${item.image}" alt="${item.initiative}" />
                <div>
                  <div class="meta-line">${item.year_started}</div>
                  <h3>${item.initiative}</h3>
                  <p>${item.description}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderClosing(closing) {
  return `
    <section class="section closing-section">
      <div class="closing-content">
        <div class="kicker">${closing.wish_subtitle}</div>
        <h2 class="closing-title">${closing.wish_title}</h2>
        <p class="closing-body">${closing.wish_body}</p>
        <button class="wish-button interactive" data-confetti>Light the screen</button>
        <p class="meta-line">${closing.signature}</p>
      </div>
    </section>
  `;
}

function setupSmoothScroll() {
  gsap.registerPlugin(ScrollTrigger);

  if (window.Lenis) {
    state.lenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6
    });

    state.lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => state.lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
}

function setupRoadMapBridge() {
  const section = document.querySelector("[data-roadmap-section]");
  const frame = document.querySelector("[data-roadmap-frame]");
  if (!section || !frame) return;

  let ticking = false;

  function syncRoadMap() {
    ticking = false;
    const rect = section.getBoundingClientRect();
    const scrollable = Math.max(1, section.offsetHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
    frame.contentWindow?.postMessage({ type: "road-progress", progress }, window.location.origin);
  }

  function requestSync() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(syncRoadMap);
  }

  frame.addEventListener("load", requestSync);
  window.addEventListener("scroll", requestSync, { passive: true });
  window.addEventListener("resize", requestSync);
  if (state.lenis) state.lenis.on("scroll", requestSync);
  requestSync();
}

function setupCursor() {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (!dot || !ring || !matchMedia("(min-width: 1024px)").matches) return;

  let ringX = 0;
  let ringY = 0;

  window.addEventListener("mousemove", (event) => {
    gsap.set(dot, { x: event.clientX, y: event.clientY });
    ringX += (event.clientX - ringX) * 0.18;
    ringY += (event.clientY - ringY) * 0.18;
    gsap.to(ring, { x: ringX, y: ringY, duration: 0.16, overwrite: true });
  });
}

function setupInteractions() {
  document.addEventListener("click", (event) => {
    const interactive = event.target.closest(".interactive");
    if (interactive) createRipple(event, interactive);
  });

  document.addEventListener("mouseover", (event) => {
    if (event.target.closest(".interactive, a, button")) document.body.classList.add("is-hovering");
  });

  document.addEventListener("mouseout", (event) => {
    if (event.target.closest(".interactive, a, button")) document.body.classList.remove("is-hovering");
  });
}

function setupAnimations() {
  gsap.set(app, { opacity: 0 });

  gsap.to("[data-hero-media] img, [data-hero-media] video", {
    yPercent: 14,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.utils.toArray(".chapter-section").forEach((section) => {
    gsap.from(section.querySelectorAll(".chapter-title b"), {
      yPercent: 100,
      duration: 1,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: { trigger: section, start: "top 70%" }
    });

    gsap.from(section.querySelector(".chapter-inner"), {
      borderLeftColor: "rgba(239,159,39,0)",
      duration: 0.8,
      scrollTrigger: { trigger: section, start: "top 72%" }
    });

    gsap.from(section.querySelector(".chapter-quote"), {
      opacity: 0,
      y: 28,
      duration: 0.8,
      delay: 0.18,
      scrollTrigger: { trigger: section, start: "top 70%" }
    });
  });

}

function runPreloader(name) {
  preloaderName.innerHTML = name
    .split("")
    .map((char) => `<span>${char === " " ? "&nbsp;" : char}</span>`)
    .join("");

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    onComplete: () => {
      preloader.remove();
      ScrollTrigger.refresh();
    }
  });

  tl.to(preloaderName.querySelectorAll("span"), {
    opacity: 1,
    y: 0,
    stagger: 0.06,
    duration: 0.5
  })
    .to(preloaderBar, { scaleX: 1, duration: 1.2, ease: "power2.inOut" }, 0.2)
    .to(preloader, { opacity: 0, scale: 1.04, duration: 0.6 }, "+=0.2")
    .to(app, { opacity: 1, duration: 0.01 }, "-=0.45")
    .from(
      ".hero-title, .hero-name, .hero-tagline, .hairline, .hero-content .meta-line, .scroll-indicator",
      {
        opacity: 0,
        y: 58,
        stagger: 0.14,
        duration: 1,
        ease: "power3.out"
      },
      "-=0.35"
    );
}

function createRipple(event, element) {
  const ripple = document.createElement("span");
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = (event.clientX || rect.left + rect.width / 2) - rect.left - size / 2;
  const y = (event.clientY || rect.top + rect.height / 2) - rect.top - size / 2;

  ripple.className = "ripple-effect";
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  element.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}
