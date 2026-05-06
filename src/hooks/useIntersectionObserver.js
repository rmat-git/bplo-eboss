import { useEffect } from 'react';

/**
 * Observes elements with the `.fade-in` class and adds `.visible`
 * when they enter the viewport, triggering the fade-up animation.
 *
 * @param {string} selector - CSS selector for elements to observe (default: '.fade-in')
 * @param {IntersectionObserverInit} options - Observer options
 */
const useIntersectionObserver = (
  selector = '.fade-in',
  options = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, options]);
};

export default useIntersectionObserver;