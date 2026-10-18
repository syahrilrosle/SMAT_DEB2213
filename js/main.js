/* ============================================================
   MAIN JS — DEB2213
   ============================================================ */

console.log('📚 DEB2213 Learning Hub loaded');

/* ============================================================
   MODAL — Untuk remark CLO
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* --- Buka modal bila klik link-modal --- */
  document.querySelectorAll('.link-modal').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var modalId = 'modal-' + this.dataset.modal;
      var modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  /* --- Tutup modal: butang X --- */
  document.querySelectorAll('.modal-close').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var modal = this.closest('.modal');
      if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  /* --- Tutup modal: klik luar --- */
  document.querySelectorAll('.modal').forEach(function (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === this) {
        this.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  /* --- Tutup modal: Escape --- */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.open').forEach(function (m) {
        m.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  });

});