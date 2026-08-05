const initAnimations = () => {
  const elements = document.querySelectorAll<HTMLElement>('.reveal, .zoom-in');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion || !('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('active'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -44px 0px' });
    elements.forEach((element) => observer.observe(element));
  }

  const counters = document.querySelectorAll<HTMLElement>('[data-counter]');
  const animateCounter = (element: HTMLElement) => {
    const target = Number(element.dataset.target);
    if (!Number.isFinite(target)) return;
    if (reducedMotion) {
      element.textContent = String(target);
      return;
    }
    const startedAt = performance.now();
    const duration = 1000;
    const update = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      element.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) requestAnimationFrame(update);
    };
    element.textContent = '0';
    requestAnimationFrame(update);
  };

  if ('IntersectionObserver' in window && !reducedMotion) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target as HTMLElement);
        counterObserver.unobserve(entry.target);
      });
    }, { threshold: 0.6 });
    counters.forEach((counter) => counterObserver.observe(counter));
  } else {
    counters.forEach(animateCounter);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations, { once: true });
} else {
  initAnimations();
}
