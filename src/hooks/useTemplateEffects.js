import { useEffect } from 'react';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[data-tpl="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.dataset.tpl = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

function hidePreloaderFallback() {
  const el = document.querySelector('.preloader');
  if (!el) return;
  if (getComputedStyle(el).display === 'none') return;
  el.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
  el.style.transform = 'translateY(-130%)';
  el.style.opacity = '0';
  setTimeout(() => {
    el.style.display = 'none';
    el.style.zIndex = '-1';
  }, 700);
}

const SCRIPT_CHAIN = [
  '/assets/js/jquery-3.7.1.min.js',
  '/assets/js/phosphor-icon.js',
  '/assets/js/boostrap.bundle.min.js',
  '/assets/js/aos.js',
  '/assets/js/magnific-popup.min.js',
  '/assets/js/jquery.marquee.min.js',
  '/assets/js/purecounter.js',
  '/assets/js/swiper-bundle.min.js',
  '/assets/js/gsap/gsap.js',
  '/assets/js/gsap/gsap-scroll-to-plugin.js',
  '/assets/js/gsap/gsap-scroll-smoother.js',
  '/assets/js/gsap/gsap-scroll-trigger.js',
  '/assets/js/gsap/gsap-split-text.js',
  '/assets/js/gsap/chroma.min.js',
  '/assets/js/slider-active.js',
  '/assets/js/custom-gsap.js',
  '/assets/js/main.js',
  '/assets/js/tw-cursor.js',
];

export function useTemplateEffects() {
  useEffect(() => {
    if (window.__tplEffectsLoaded) return undefined;
    window.__tplEffectsLoaded = true;

    document.body.classList.add('tw-magic-cursor');

    // Wait one frame so React has painted the preloader/DOM
    const start = window.setTimeout(async () => {
      try {
        for (const src of SCRIPT_CHAIN) {
          await loadScript(src);
        }
      } catch (err) {
        console.error(err);
        hidePreloaderFallback();
      }

      // Safety: never stay stuck on LOADING
      window.setTimeout(hidePreloaderFallback, 4500);
    }, 50);

    return () => {
      window.clearTimeout(start);
    };
  }, []);
}
