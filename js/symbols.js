/* ============================================================
   SYMBOLS — Modal Klik Simbol
   ============================================================ */

function initSymbolModal() {
  var modal = document.getElementById('symbolModal');

  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'symbolModal';
    modal.className = 'symbol-modal';
    modal.innerHTML = '<div class="symbol-modal-content"><button class="symbol-modal-close" onclick="closeSymbolModal()">×</button><img class="symbol-modal-img" id="symbolModalImg" src="" alt=""><h3 class="symbol-modal-title" id="symbolModalTitle"></h3><p class="symbol-modal-desc" id="symbolModalDesc"></p></div>';
    document.body.appendChild(modal);

    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeSymbolModal();
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeSymbolModal();
    });
  }

  document.querySelectorAll('.symbol-card').forEach(function(card) {
    card.addEventListener('click', function() {
      var img = this.querySelector('.symbol-img');
      var name = this.querySelector('.symbol-name');
      var desc = this.querySelector('.symbol-desc');

      if (img) {
        document.getElementById('symbolModalImg').src = img.src;
        document.getElementById('symbolModalImg').alt = img.alt;
      }
      if (name) {
        document.getElementById('symbolModalTitle').textContent = name.textContent;
      }
      if (desc) {
        document.getElementById('symbolModalDesc').textContent = desc.textContent;
      }

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
}

function closeSymbolModal() {
  var modal = document.getElementById('symbolModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}