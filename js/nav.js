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

  /* Mobile + Touch Dropdown */
  document.querySelectorAll('.has-dropdown').forEach(item => {
    item.querySelector('a').addEventListener('click', function (e) {
      const mobileNavOpen = toggle && toggle.offsetParent !== null;
      const isTouch = !matchMedia('(hover: hover) and (pointer: fine)').matches;
      if (mobileNavOpen || isTouch) {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.has-dropdown.open').forEach(el => el.classList.remove('open'));
        if (!isOpen) {
          e.preventDefault();
          item.classList.add('open');
        }
      }
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-dropdown')) {
      document.querySelectorAll('.has-dropdown.open').forEach(el => el.classList.remove('open'));
    }
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
