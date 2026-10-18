/* ============================================================
   LAYOUT — Header & Footer (Advance)
   DEB2213 · Basic Pneumatic and Hydraulic
   ============================================================ */

console.log('📦 layout.js dimuatkan');

/* ============================================================
   HEADER HTML
   ============================================================ */
var HEADER_HTML = `
  <a href="#main-content" class="skip-link">Lompat ke kandungan utama</a>

  <header class="main-header">
    <div class="header-inner">

      <!-- Baris 1: Brand + Nav -->
      <div class="header-top">

        <a href="index.html" class="header-brand" aria-label="Kembali ke Utama">
          <img
            src="https://kvsegamat.moe.edu.my/images/logo.svg"
            alt="Logo Kolej Vokasional Segamat"
            class="header-logo"
            onerror="this.style.display='none'"
          >
          <div class="header-brand-text">
            <strong>KOLEJ VOKASIONAL SEGAMAT</strong>
            <span>Jabatan Teknologi Elektrik &amp; Elektronik</span>
            <span>Unit Teknologi Elektronik</span>
          </div>
        </a>

        <button class="header-toggle" aria-label="Buka menu navigasi" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="header-nav" aria-label="Navigasi utama">
          <a href="index.html" data-nav="index">
            <i class="nav-icon">◆</i> Utama
          </a>
          <div class="nav-dropdown">
            <a href="nota-index.html" data-nav="nota">
              <i class="nav-icon">◆</i> Nota Kuliah <span class="nav-caret">▾</span>
            </a>
            <div class="nav-dropdown-menu">
              <a href="nota-topik1.html">Topik 1 — Interpret Circuit Diagram</a>
              <a href="nota-topik2.html">Topik 2 — Injap &amp; Komponen</a>
              <a href="nota-topik3.html">Topik 3 — Maintenance</a>
              <a href="nota-topik4.html">Topik 4 — Check Function of Circuit</a>
              <a href="nota-topik5.html">Topik 5 — Actuator</a>
            </div>
          </div>
          <div class="nav-dropdown">
            <a href="pentaksiran-index.html" data-nav="pentaksiran">
              <i class="nav-icon">◆</i> Pentaksiran <span class="nav-caret">▾</span>
            </a>
            <div class="nav-dropdown-menu">
              <a href="pentaksiran-pt1.html">PT1 — Pneumatik Kawalan Silinder</a>
              <a href="pentaksiran-pt2.html">PT2 — Hidraulik Injap 4/2</a>
              <a href="pentaksiran-pt3.html">PT3 — Fungsi OR</a>
              <a href="pentaksiran-pt4.html">PT4 — Fungsi AND</a>
              <a href="pentaksiran-pt5.html">PT5 — Hidraulik Injap 4/3</a>
              <a href="pentaksiran-pt6.html">PT6 — Shuttle &amp; Roller</a>
            </div>
          </div>
        </nav>

      </div>

      <!-- Baris 2: Course info + progress -->
      <div class="header-bottom">
        <div class="header-course">
          <span class="header-course-code">DEB2213</span>
          <span class="header-course-sep">·</span>
          <span class="header-course-title">Basic Pneumatic and Hydraulic</span>
        </div>
        <div class="header-progress" aria-hidden="true">
          <div class="header-progress-bar" id="scroll-progress"></div>
        </div>
      </div>

    </div>
  </header>
`;

/* ============================================================
   FOOTER HTML
   ============================================================ */
var FOOTER_HTML = `
  <footer class="main-footer">

    <div class="footer-content">

      <div class="footer-col">
        <h4 class="footer-heading">Institusi</h4>
        <p class="footer-line"><strong>Kolej Vokasional Segamat</strong></p>
        <p class="footer-line">Jabatan Teknologi Elektrik &amp; Elektronik</p>
        <p class="footer-line">Unit Teknologi Elektronik</p>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">Kursus</h4>
        <p class="footer-line"><strong>DEB2213</strong></p>
        <p class="footer-line">Basic Pneumatic and Hydraulic</p>
        <p class="footer-line">Semester 2 · Tahun 1 · 3 Kredit</p>
        <p class="footer-line">Diploma Teknologi Elektronik</p>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">Topik</h4>
        <ul class="footer-links">
          <li><a href="nota-topik1.html">Topik 1 — Interpret Circuit</a></li>
          <li><a href="nota-topik2.html">Topik 2 — Injap</a></li>
          <li><a href="nota-topik3.html">Topik 3 — Maintenance</a></li>
          <li><a href="nota-topik4.html">Topik 4 — Check Circuit</a></li>
          <li><a href="nota-topik5.html">Topik 5 — Actuator</a></li>
        </ul>
      </div>

      <div class="footer-col footer-credit">
        <h4 class="footer-heading">Pembinaan Platform</h4>
        <p class="footer-line">
          <strong>Cg Syahril</strong>
        </p>
        <p class="footer-line footer-muted">
          Mohamad Syahril bin Rosle
        </p>
        <p class="footer-line footer-muted">
          Unit Teknologi Elektronik
        </p>
      </div>

    </div>

    <div class="footer-bottom">

      <div class="footer-bottom-main">
        <p>© 2026 Hak Cipta Terpelihara ETN, JTEE, Kolej Vokasional Segamat, KPM</p>
        <p class="footer-tagline">Dibina khas untuk kursus DEB2213 · Basic Pneumatic and Hydraulic</p>
      </div>

      <div class="footer-bottom-meta">
        <p class="footer-tech">
          Teknologi: HTML5 · CSS3 · JavaScript · Google Apps Script · Google Sheets
        </p>
        <p class="footer-updated">
          Kemas kini terakhir: <strong id="footer-updated-date">—</strong>
        </p>
      </div>

    </div>

  </footer>
`;

/* ============================================================
   INJECT LAYOUT
   ============================================================ */
function injectLayout() {
  var header = document.getElementById('header-placeholder');
  if (header) header.outerHTML = HEADER_HTML;

  var footer = document.getElementById('footer-placeholder');
  if (footer) footer.outerHTML = FOOTER_HTML;

  initActiveNav();
  initHamburger();
  initScrollProgress();
  initFooterDate();
}

/* ============================================================
   ACTIVE NAV
   ============================================================ */
function initActiveNav() {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.header-nav a[data-nav]');

  navLinks.forEach(function (link) {
    var nav = link.getAttribute('data-nav');

    if (
      (nav === 'index' && path === 'index.html') ||
      (nav === 'nota' && path === 'nota-index.html') ||
      (nav === 'nota' && path.startsWith('nota-topik')) ||
      (nav === 'pentaksiran' && path.startsWith('pentaksiran-'))
    ) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

/* ============================================================
   HAMBURGER MENU
   ============================================================ */
function initHamburger() {
  var toggle = document.querySelector('.header-toggle');
  var nav = document.querySelector('.header-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ============================================================
   SCROLL PROGRESS BAR
   ============================================================ */
function initScrollProgress() {
  var bar = document.getElementById('scroll-progress');
  if (!bar) return;

  function updateProgress() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = percent + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
}

/* ============================================================
   FOOTER — Tarikh Kemaskini
   ============================================================ */
function initFooterDate() {
  var el = document.getElementById('footer-updated-date');
  if (!el) return;

  var lastMod = document.lastModified;

  if (!lastMod) {
    lastMod = new Date();
  } else {
    lastMod = new Date(lastMod);
  }

  var formatted = lastMod.toLocaleDateString('ms-MY', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  el.textContent = formatted;
}

/* ============================================================
   INIT ON LOAD
   ============================================================ */
document.addEventListener('DOMContentLoaded', injectLayout);

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(injectLayout, 100);
}