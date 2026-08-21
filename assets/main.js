document.documentElement.classList.add('js');

(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      document.body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        document.body.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const item = question.closest('.faq-item');
      const expanded = item.classList.toggle('is-open');
      question.setAttribute('aria-expanded', String(expanded));
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('.form-status');
      if (status) status.textContent = 'Dziękujemy — wiadomość jest gotowa do wysłania po podpięciu skrzynki kontaktowej.';
    });
  }
})();
