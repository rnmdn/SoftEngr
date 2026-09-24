const menuButton = document.querySelector('.nav-toggle');
const menuLinks = document.getElementById('nav-links');

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  menuLinks?.classList.remove('open');
}

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuLinks.classList.toggle('open', !open);
});
menuLinks?.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('motion-ready');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}

let assessmentOpening = false;
document.addEventListener('click', event => {
  const link = event.target.closest('a[href="assessment.html"]');
  if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey ||
      event.ctrlKey || event.shiftKey || event.altKey || link.target ||
      assessmentOpening || reducedMotion.matches || !Element.prototype.animate) return;

  event.preventDefault();
  assessmentOpening = true;
  const bounds = link.getBoundingClientRect();
  const x = event.detail === 0 ? bounds.left + bounds.width / 2 : event.clientX;
  const y = event.detail === 0 ? bounds.top + bounds.height / 2 : event.clientY;
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) + 24;
  const frame = document.createElement('iframe');
  frame.className = 'assessment-preview-frame';
  frame.setAttribute('aria-hidden', 'true');
  frame.tabIndex = -1;
  frame.style.setProperty('--origin-x', `${x}px`);
  frame.style.setProperty('--origin-y', `${y}px`);

  const navigate = () => location.assign(link.href);
  const fallback = setTimeout(navigate, 1800);
  frame.addEventListener('load', () => {
    clearTimeout(fallback);
    frame.animate([
      { clipPath: `circle(0px at ${x}px ${y}px)` },
      { clipPath: `circle(${radius}px at ${x}px ${y}px)` }
    ], { duration: 620, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'forwards' })
      .finished.then(navigate, navigate);
  }, { once: true });
  frame.src = link.href;
  document.body.append(frame);
});
