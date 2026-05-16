/* ============================================================
   DEVCRAFT AGENCY — NAV & FOOTER PARTIALS
   components.js  —  inject nav + footer
   ============================================================ */

const NAV_HTML = `
<nav class="nav" role="navigation" aria-label="Main navigation">
  <a href="index.html" class="nav-logo">
    <div class="nav-logo-dot"></div>
    Dev<span>Craft</span>
  </a>
  <div class="nav-links">
    <a href="index.html"    class="nav-link">Home</a>
    <a href="about.html"    class="nav-link">About</a>
    <a href="services.html" class="nav-link">Services</a>
    <a href="team.html"     class="nav-link">Team</a>
    <a href="contact.html"  class="nav-link">Contact</a>
  </div>
  <a href="contact.html" class="nav-cta">Start a Project</a>
  <button class="nav-hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-mobile" type="button">
    <span></span><span></span><span></span>
  </button>
</nav>
<div id="nav-mobile" class="nav-mobile">
  <a href="index.html"    class="nav-link">Home</a>
  <a href="about.html"    class="nav-link">About</a>
  <a href="services.html" class="nav-link">Services</a>
  <a href="team.html"     class="nav-link">Team</a>
  <a href="contact.html"  class="nav-link">Contact</a>
  <a href="contact.html"  class="nav-cta btn">Start a Project →</a>
</div`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="nav-logo footer-brand-logo">
          <div class="nav-logo-dot"></div>Dev<span>Craft</span>
        </div>
        <p>Building modern digital experiences — from pixel-perfect interfaces to scalable full-stack applications.</p>
      </div>
      <div class="footer-col">
        <h4>Pages</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="team.html">Team</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="service-ecommerce.html">E-Commerce</a></li>
          <li><a href="service-portfolio.html">Portfolio Sites</a></li>
          <li><a href="service-dashboard.html">Dashboards</a></li>
          <li><a href="service-landing.html">Landing Pages</a></li>
          <li><a href="service-business.html">Business Websites</a></li>
          <li><a href="service-uiux.html">UI/UX Design</a></li>
          <li><a href="service-fullstack.html">Full Stack Apps</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:hello@devcraft.agency">hello@devcraft.agency</a></li>
          <li><a href="contact.html">Start a Project</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">GitHub</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© 2025 <span>DevCraft</span> Agency. All rights reserved.</div>
      <div>Built with precision &amp; purpose.</div>
    </div>
  </div>
</footer>`;

// Inject before DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;

  // Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
});