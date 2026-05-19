/* ============================================================
   DEVCRAFT AGENCY — CINEMATIC HERO JS
   Particles · Cursor glow · Video lazy-load · Streaks
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── Video: fade in when ready ─── */
  const vid = document.getElementById('heroBgVideo');
  if (vid) {
    const onReady = () => vid.classList.add('loaded');
    vid.addEventListener('canplay', onReady, { once: true });
    // fallback if already cached
    if (vid.readyState >= 3) onReady();
    vid.load();
  }

  /* ─── Cursor glow ─── */
  const glow = document.querySelector('.cursor-glow');
  if (glow) {
    const hero = document.querySelector('.hero-cinematic');
    let active = false;
    document.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
      if (!active) { glow.classList.add('active'); active = true; }
    });
    // only show glow inside hero area
    if (hero) {
      hero.addEventListener('mouseleave', () => { glow.classList.remove('active'); active = false; });
      hero.addEventListener('mouseenter', () => { glow.classList.add('active'); active = true; });
    }
  }

  /* ─── Floating particles ─── */
  const container = document.querySelector('.hero-particles');
  if (container) {
    const COUNT  = 22;
    const STREAK = 6;

    for (let i = 0; i < COUNT; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 2.5 + 0.8;
      const dur  = Math.random() * 14 + 9;
      const delay = Math.random() * -20;
      const drift = (Math.random() - 0.5) * 140;
      p.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${Math.random() * 100}%;
        bottom: ${Math.random() * -10}%;
        --drift: ${drift}px;
        animation-duration: ${dur}s;
        animation-delay: ${delay}s;
        opacity: 0;
      `;
      container.appendChild(p);
    }

    for (let i = 0; i < STREAK; i++) {
      const s = document.createElement('div');
      s.className = 'light-streak';
      const height = Math.random() * 80 + 60;
      const dur    = Math.random() * 5 + 4;
      const delay  = Math.random() * -14;
      s.style.cssText = `
        height: ${height}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 40}%;
        animation-duration: ${dur}s;
        animation-delay: ${delay}s;
      `;
      container.appendChild(s);
    }
  }

  /* ─── Parallax on scroll ─── */
  const heroCinematic = document.querySelector('.hero-cinematic');
  const videoWrap = document.querySelector('.hero-video-wrap');
  if (heroCinematic && videoWrap) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroH   = heroCinematic.offsetHeight;
      if (scrollY < heroH) {
        const pct = scrollY / heroH;
        videoWrap.style.transform = `translateY(${pct * 60}px)`;
      }
    }, { passive: true });
  }

  /* ─── Counter animation on stats ─── */
  const statNums = document.querySelectorAll('[data-target]');
  if (statNums.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el     = e.target;
        const target = +el.dataset.target;
        const dur    = 1600;
        const start  = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / dur, 1);
          const eased    = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });
    statNums.forEach(n => io.observe(n));
  }

});
