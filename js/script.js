// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Scroll-reveal for elements with .reveal
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('.reveal');

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => observer.observe(el));
}

// Theme toggle — remembers the visitor's explicit choice, otherwise follows the OS.
const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  themeToggle.addEventListener('click', () => {
    const current =
      document.documentElement.getAttribute('data-theme') ||
      (systemDark.matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('kp-theme', next);
    } catch (e) {
      /* private browsing — the choice just won't persist */
    }
  });
}

// Project filters
const filterBar = document.querySelector('.filters');
const workGrid = document.getElementById('work-grid');
const workEmpty = document.getElementById('work-empty');

if (filterBar && workGrid) {
  const cards = Array.from(workGrid.querySelectorAll('.card'));

  filterBar.addEventListener('click', (event) => {
    const chip = event.target.closest('.chip');
    if (!chip) return;

    const filter = chip.dataset.filter;

    filterBar.querySelectorAll('.chip').forEach((c) => {
      c.classList.toggle('is-active', c === chip);
    });

    let shown = 0;
    cards.forEach((card) => {
      const match = filter === 'all' || card.dataset.cat.split(' ').includes(filter);
      card.classList.toggle('is-hidden', !match);
      if (match) shown++;
    });

    if (workEmpty) workEmpty.hidden = shown > 0;
  });
}
