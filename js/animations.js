/* ============================================================
   ANIMATIONS — Page Fade-In & Scroll Animation
   ============================================================ */

function initPageAnimation() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease-in';
  window.addEventListener('load', function() {
    document.body.style.opacity = '1';
  });
  setTimeout(function() {
    document.body.style.opacity = '1';
  }, 300);
}

function initScrollAnimation() {
  var elements = document.querySelectorAll('.topic-card, .nota-card, .info-card, .clo-card, .assessment-card, .stats-card, .preview-card');
  if (!elements.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
}