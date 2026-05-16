/* ============================================
   DEVCRAFT AGENCY — SHARED SCRIPTS
   nav.js
   ============================================ */

/* ─── Navigation ─── */
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile');

  // Scroll shadow
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // Hamburger toggle (runs after components.js injects nav)
  if (hamburger && mobileMenu) {
    if (!hamburger.hasAttribute('aria-expanded')) hamburger.setAttribute('aria-expanded', 'false');
    hamburger.addEventListener('click', () => {
      const opened = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', opened);
      hamburger.setAttribute('aria-expanded', opened ? 'true' : 'false');
      document.body.style.overflow = opened ? 'hidden' : '';
    });
  }

  // Active link
  const links = document.querySelectorAll('.nav-link');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(l => {
    if (l.getAttribute('href') === current) l.classList.add('active');
  });
});

/* ─── Reveal on scroll ─── */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
})();

/* ─── Skill bars animate ─── */
(function () {
  const bars = document.querySelectorAll('.skill-bar-fill');
  if (!bars.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const pct = e.target.dataset.pct;
        e.target.style.width = pct + '%';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => io.observe(b));
})();

/* ─── Counter animation ─── */
(function () {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.target);
        const dur = 1800;
        const step = 16;
        const inc = target / (dur / step);
        let current = 0;
        const timer = setInterval(() => {
          current += inc;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = Math.floor(current);
        }, step);
        io.unobserve(el);
      }
    });
  },{ threshold: 0.5 });
  counters.forEach(c => io.observe(c));
})();