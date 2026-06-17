/**
 * leistungen.js – Hilfsskript für Leistungsseiten
 *
 * Aktuell: Smooth-Scroll zu Unterleistungs-Ankern via URL-Hash,
 * z. B. dacheindeckung.html#steildach
 */
(function () {
  'use strict';

  /* Scroll zu Hash nach Seitenload */
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) {
      setTimeout(() => {
        const offset = document.querySelector('.site-header')?.offsetHeight || 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }, 300);
    }
  }

  /* Inhaltsverzeichnis auf Leistungsseiten automatisch aufbauen */
  const unterleistungen = document.querySelectorAll('.unterleistung');
  const navContainer = document.getElementById('leistung-nav');

  if (navContainer && unterleistungen.length > 1) {
    const ul = document.createElement('ul');
    ul.style.cssText = 'list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:.5rem;';

    unterleistungen.forEach(el => {
      const h3 = el.querySelector('h3');
      const id = el.id || el.querySelector('[id]')?.id;
      if (!h3) return;

      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = h3.textContent;
      a.href = id ? '#' + id : '#';
      a.style.cssText = 'display:inline-block;padding:.3rem .8rem;background:var(--color-light);border:1px solid var(--color-border);border-radius:20px;font-size:.82rem;color:var(--color-dark);';
      a.addEventListener('mouseenter', () => a.style.background = 'var(--color-primary)' );
      a.addEventListener('mouseleave', () => a.style.background = 'var(--color-light)' );
      li.appendChild(a);
      ul.appendChild(li);
    });

    navContainer.appendChild(ul);
  }
})();
