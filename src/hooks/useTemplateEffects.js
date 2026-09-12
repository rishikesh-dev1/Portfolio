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

function dismissPreloader() {
  if (window.__preloaderDismissed) return;
  window.__preloaderDismissed = true;
  window.__preloaderStarted = true;

  const el = document.querySelector('.preloader');
  if (!el || getComputedStyle(el).display === 'none') return;

  const svg = document.getElementById('preloaderSvg');
  const text = document.querySelector('.preloader-heading');

  if (window.gsap && svg) {
    const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
    const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';
    const tl = window.gsap.timeline();
    tl.to(text, { y: -45, opacity: 0, duration: 0.25, ease: 'power2.in' })
      .to(svg, { duration: 0.3, attr: { d: curve }, ease: 'power2.inOut' })
      .to(svg, { duration: 0.3, attr: { d: flat }, ease: 'power2.inOut' })
      .to(el, { y: '-130%', duration: 0.4, ease: 'power4.inOut' })
      .set(el, { display: 'none', zIndex: -1 });
  } else {
    if (text) {
      text.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      text.style.opacity = '0';
      text.style.transform = 'translateY(-40px)';
    }
    el.style.transition = 'transform 0.45s cubic-bezier(0.7, 0, 0.3, 1), opacity 0.45s ease';
    el.style.transform = 'translateY(-130%)';
    el.style.opacity = '0';
    setTimeout(() => {
      el.style.display = 'none';
      el.style.zIndex = '-1';
    }, 450);
  }
}

// Grouped batches for optimized parallel network retrieval
const SCRIPT_BATCHES = [
  // 1. Foundation: jQuery & Phosphor icons
  ['/assets/js/jquery-3.7.1.min.js', '/assets/js/phosphor-icon.js'],
  // 2. Main core libraries (loaded concurrently)
  [
    '/assets/js/boostrap.bundle.min.js',
    '/assets/js/aos.js',
    '/assets/js/purecounter.js',
    '/assets/js/swiper-bundle.min.js',
    '/assets/js/gsap/gsap.js',
  ],
  // 3. GSAP plugins & jQuery plugins (loaded concurrently)
  [
    '/assets/js/magnific-popup.min.js',
    '/assets/js/jquery.marquee.min.js',
    '/assets/js/gsap/gsap-scroll-to-plugin.js',
    '/assets/js/gsap/gsap-scroll-smoother.js',
    '/assets/js/gsap/gsap-scroll-trigger.js',
    '/assets/js/gsap/gsap-split-text.js',
    '/assets/js/gsap/chroma.min.js',
  ],
  // 4. Portfolio behavior & custom animations
  [
    '/assets/js/slider-active.js',
    '/assets/js/custom-gsap.js',
    '/assets/js/main.js',
    '/assets/js/tw-cursor.js',
  ],
];

export function useTemplateEffects() {
  useEffect(() => {
    if (window.__tplEffectsLoaded) return undefined;
    window.__tplEffectsLoaded = true;

    document.body.classList.add('tw-magic-cursor');

    // STRICT 2-SECOND RULE:
    // Preloader shows for 1.5s, then animates out smoothly by 2.0s
    const dismissTimer = window.setTimeout(() => {
      dismissPreloader();
    }, 1500);

    // Absolute hard cut-off: never display past 2.0 seconds under any condition
    const hardKillTimer = window.setTimeout(() => {
      const el = document.querySelector('.preloader');
      if (el) {
        el.style.display = 'none';
        el.style.zIndex = '-1';
      }
    }, 2000);

    // Load scripts in parallel batches in background
    (async () => {
      try {
        for (const batch of SCRIPT_BATCHES) {
          await Promise.all(batch.map((src) => loadScript(src)));
        }
      } catch (err) {
        console.error('Template script load error:', err);
        dismissPreloader();
      }
    })();

    return () => {
      window.clearTimeout(dismissTimer);
      window.clearTimeout(hardKillTimer);
    };
  }, []);
}
