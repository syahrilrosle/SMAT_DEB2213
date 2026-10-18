/* ============================================================
   PROGRESS — Back-to-Top & Reading Progress
   ============================================================ */

function initBackToTop() {
  var btn = document.createElement('button');
  btn.id = 'backToTop';
  btn.innerHTML = '↑';
  btn.title = 'Kembali ke atas';
  btn.style.cssText = 'position:fixed;bottom:30px;right:30px;width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#1a237e 0%,#3949ab 100%);color:#fff;border:none;font-size:1.4rem;cursor:pointer;box-shadow:0 8px 20px rgba(26,35,126,0.35);display:none;z-index:999;transition:all 0.3s ease;font-weight:700;';
  document.body.appendChild(btn);

  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });

  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  btn.addEventListener('mouseenter', function() {
    btn.style.background = 'linear-gradient(135deg,#ffb300 0%,#ff8c42 100%)';
    btn.style.color = '#1a237e';
  });

  btn.addEventListener('mouseleave', function() {
    btn.style.background = 'linear-gradient(135deg,#1a237e 0%,#3949ab 100%)';
    btn.style.color = '#fff';
  });
}

function initReadingProgress() {
  var progressBar = document.createElement('div');
  progressBar.id = 'readingProgress';
  progressBar.style.cssText = 'position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,#1a237e,#ffb300);width:0%;z-index:9999;transition:width 0.1s;';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  });
}