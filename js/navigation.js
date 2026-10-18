/* ============================================================
   NAVIGATION — Nav Aktif, Smooth Scroll, Keyboard
   ============================================================ */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      e.preventDefault();
      var target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initActiveNav() {
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(function(link) {
    var href = link.getAttribute('href');
    if (href === currentPath) {
      link.style.background = 'rgba(255, 255, 255, 0.15)';
      link.style.fontWeight = '700';
    }
  });
}

function initKeyboardNav() {
  var notaNav = document.querySelector('.nota-nav');
  if (!notaNav) return;

  var links = notaNav.querySelectorAll('a');
  if (links.length < 2) return;

  var prevLink = links[0];
  var nextLink = links[1];

  document.addEventListener('keydown', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowLeft' && prevLink) {
      window.location.href = prevLink.href;
    }
    if (e.key === 'ArrowRight' && nextLink) {
      window.location.href = nextLink.href;
    }
  });
}