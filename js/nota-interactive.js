/* ============================================================
   NOTA INTERACTIVE — TOC, Quiz, Tabs, Accordion
   ============================================================ */

console.log('📖 nota-interactive.js dimuatkan');

/* ============================================================
   TABS
   ============================================================ */
function initTabs() {
  var tabContainers = document.querySelectorAll('.tabs');

  tabContainers.forEach(function(container) {
    var buttons = container.querySelectorAll('.tab-btn');
    var contents = container.querySelectorAll('.tab-content');

    buttons.forEach(function(btn, index) {
      btn.addEventListener('click', function() {
        buttons.forEach(function(b) { b.classList.remove('active'); });
        contents.forEach(function(c) { c.classList.remove('active'); });

        btn.classList.add('active');
        if (contents[index]) {
          contents[index].classList.add('active');
        }
      });
    });
  });
}

/* ============================================================
   ACCORDION
   ============================================================ */
function initAccordions() {
  var items = document.querySelectorAll('.accordion-header');

  items.forEach(function(header) {
    header.addEventListener('click', function() {
      var item = this.parentElement;
      item.classList.toggle('open');
    });
  });
}

/* ============================================================
   MINI QUIZ
   ============================================================ */
function initMiniQuiz() {
  var quizOptions = document.querySelectorAll('.quiz-option');

  quizOptions.forEach(function(option) {
    option.addEventListener('click', function() {
      var quiz = this.closest('.mini-quiz');
      if (!quiz) return;

      var options = quiz.querySelectorAll('.quiz-option');
      var feedback = quiz.querySelector('.quiz-feedback');
      var isCorrect = this.dataset.correct === 'true';
      var explanation = this.dataset.explanation || '';

      options.forEach(function(opt) {
        opt.classList.remove('selected', 'correct', 'wrong');
        opt.disabled = true;
      });

      this.classList.add(isCorrect ? 'correct' : 'wrong');
      options.forEach(function(opt) {
        if (opt.dataset.correct === 'true') opt.classList.add('correct');
      });

      if (feedback) {
        feedback.classList.add('show');
        feedback.classList.add(isCorrect ? 'correct' : 'wrong');
        feedback.innerHTML = isCorrect 
          ? '<strong>✅ Betul!</strong> ' + explanation
          : '<strong>❌ Salah.</strong> ' + explanation;
      }
    });
  });
}

/* ============================================================
   TOC SIDEBAR — Active Link Tracking
   ============================================================ */
function initTOCActive() {
  var tocLinks = document.querySelectorAll('.toc-list a');
  var headings = document.querySelectorAll('.nota-container h2');

  if (tocLinks.length === 0 || headings.length === 0) return;

  window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY + 150;
    var current = '';

    headings.forEach(function(heading) {
      if (heading.offsetTop <= scrollPos) {
        current = heading.id || '';
      }
    });

    tocLinks.forEach(function(link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', function() {
  initTabs();
  initAccordions();
  initMiniQuiz();
  initTOCActive();
});