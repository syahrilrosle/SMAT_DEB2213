/* ============================================================
   UTILS — Fungsi Bantuan
   ============================================================ */

function getUrlParam(name) {
  var params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function formatDate(date) {
  var d = new Date(date);
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return d.toLocaleDateString('ms-MY', options);
}

function debounce(func, wait) {
  var timeout;
  return function() {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(context, args);
    }, wait);
  };
}

function scrollToElement(selector) {
  var el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}