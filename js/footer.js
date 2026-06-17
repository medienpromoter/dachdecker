/* Footer: aktuelles Jahr eintragen */
(function () {
  'use strict';
  document.querySelectorAll('.js-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
})();
