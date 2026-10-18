// ============================================================
// MODULES - Load Modul HTML
// ============================================================

function loadModule(elementId, modulePath) {
  var element = document.getElementById(elementId);
  if (!element) return;
  
  // Loading
  element.innerHTML = '<div class="modul-loading">Memuatkan kandungan...</div>';
  
  // Fetch modul
  fetch(modulePath)
    .then(function(response) {
      if (!response.ok) {
        throw new Error('HTTP ' + response.status + ': ' + response.statusText);
      }
      return response.text();
    })
    .then(function(html) {
      element.innerHTML = html;
      
      // Re-init symbol modal
      if (typeof initSymbolModal === 'function') {
        initSymbolModal();
      }
      
      // Re-init scroll animation
      if (typeof initScrollAnimation === 'function') {
        initScrollAnimation();
      }
      
      console.log('✅ Modul dimuatkan: ' + modulePath);
    })
    .catch(function(error) {
      console.error('❌ Ralat load modul:', error);
      element.innerHTML = 
        '<div class="modul-error">' +
        '<strong>⚠️ Ralat Memuatkan Modul</strong><br>' +
        'Fail: <code>' + modulePath + '</code><br>' +
        'Sebab: ' + error.message + '<br>' +
        '<small>Pastikan fail wujud dan guna server local (Live Server)</small>' +
        '</div>';
    });
}

function loadAllModules() {
  // Detect topik dari body data attribute atau URL
  var topik = document.body.getAttribute('data-topik') || 'topik1';
  
  // Load modul berdasarkan topik
  loadModule('modul-bahagian-a', 'modul/' + topik + '/bahagian-a.html');
  loadModule('modul-simbol-pneumatik', 'modul/' + topik + '/simbol-pneumatik.html');
  loadModule('modul-bahagian-b', 'modul/' + topik + '/bahagian-b.html');
  loadModule('modul-simbol-hidraulik', 'modul/' + topik + '/simbol-hidraulik.html');
}

// Init
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('modul-bahagian-a')) {
    loadAllModules();
  }
});