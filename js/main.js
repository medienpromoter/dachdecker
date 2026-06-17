/* Main JS – Animationen, Counter, Formular-Feedback */
(function () {
  'use strict';

  /* ── Counter-Animation ──────────────────────────────────── */
  function animateCounter(el, target, duration) {
    const suffix = el.dataset.suffix || '';
    const start = performance.now();
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target) + (progress >= 1 ? suffix : '');
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target, parseInt(entry.target.dataset.target, 10), 1600);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-counter]').forEach(el => counterObserver.observe(el));

  /* ── Scroll Reveal ──────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.dataset.delay || 0, 10);
        setTimeout(() => el.classList.add('revealed'), delay);
        revealObserver.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  /* Einzelne [data-reveal] Elemente */
  document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

  /* Auto-stagger: Kinder von [data-stagger] bekommen fade-up mit gestaffeltem Delay */
  document.querySelectorAll('[data-stagger]').forEach(container => {
    const base = parseInt(container.dataset.stagger || 100, 10);
    Array.from(container.children).forEach((child, i) => {
      if (!child.hasAttribute('data-reveal')) child.setAttribute('data-reveal', 'fade-up');
      child.dataset.delay = i * base;
      revealObserver.observe(child);
    });
  });

  /* Legacy .fade-in Klasse */
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); fadeObserver.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

  /* ── Kontaktformular-Feedback ───────────────────────────── */
  document.querySelectorAll('form[data-feedback]').forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const msg = document.createElement('p');
      msg.className = 'form-success';
      msg.textContent = 'Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.';
      msg.style.cssText = 'color:#2ecc71;font-weight:700;padding:.75rem;border:2px solid #2ecc71;border-radius:6px;margin-top:1rem;';
      form.appendChild(msg);
      form.querySelectorAll('input,textarea,select,button').forEach(el => el.disabled = true);
    });
  });
})();
