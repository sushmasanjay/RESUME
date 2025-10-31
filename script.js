// script.js - Contact form validation + handling

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const status = document.getElementById('formStatus');

  function isValidEmail(email) {
    // simple email regexp (sufficient for basic validation)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // collect values
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    // validation checks
    if (!name) { status.textContent = 'Please enter your name.'; return; }
    if (!email || !isValidEmail(email)) { status.textContent = 'Please enter a valid email.'; return; }
    if (!subject) { status.textContent = 'Please enter a subject.'; return; }
    if (!message || message.length < 10) { status.textContent = 'Message should be at least 10 characters.'; return; }

    // all good — show success message (since no backend is present)
    status.style.color = 'green';
    status.textContent = 'Thank you! Your message was sent (demo).';

    // clear form after brief delay
    setTimeout(() => {
      form.reset();
      status.textContent = '';
      status.style.color = '#1d3557';
    }, 2000);
  });
});
