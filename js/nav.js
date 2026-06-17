/* Navigation: Mobile Toggle & Active-State */
(function () {
  'use strict';

  const toggle  = document.querySelector('.nav-toggle');
  const navMain = document.querySelector('.nav-main');

  if (toggle && navMain) {
    toggle.addEventListener('click', () => {
      navMain.classList.toggle('open');
      toggle.setAttribute('aria-expanded', navMain.classList.contains('open'));
    });
  }

  /* Mobile Dropdown */
  document.querySelectorAll('.has-dropdown').forEach(item => {
    item.querySelector('a').addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        item.classList.toggle('open');
      }
    });
  });

  /* Active Link */
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-main a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === current) a.classList.add('active');
  });

  /* Sticky-Header Shadow */
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    });
  }
})();
