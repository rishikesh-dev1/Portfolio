import { useState, useEffect } from 'react';
import { useTemplateEffects } from './hooks/useTemplateEffects';
import UIElements from './components/UIElements';
import Offcanvas from './components/Offcanvas';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import ContactPage from './pages/ContactPage';
import ChatBot from './components/ChatBot';

export default function App() {
  useTemplateEffects();

  const [currentRoute, setCurrentRoute] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (hash.startsWith('#/works') || hash.startsWith('#works') || path === '/works') {
        return 'works';
      }
      if (hash.startsWith('#/contact') || hash.startsWith('#contact') || path === '/contact') {
        return 'contact';
      }
    }
    return 'home';
  });

  useEffect(() => {
    const handleRoute = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (hash.startsWith('#/works') || hash.startsWith('#works') || path === '/works') {
        setCurrentRoute('works');
      } else if (hash.startsWith('#/contact') || hash.startsWith('#contact') || path === '/contact') {
        setCurrentRoute('contact');
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('popstate', handleRoute);
    return () => {
      window.removeEventListener('hashchange', handleRoute);
      window.removeEventListener('popstate', handleRoute);
    };
  }, []);

  useEffect(() => {
    // 1. Immediately scroll to top
    if (window.smoother && typeof window.smoother.scrollTo === 'function') {
      window.smoother.scrollTo(0, false);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // 2. Comprehensive Animation, AOS & Visibility Sync
    const syncView = () => {
      // Re-scan and refresh AOS
      if (window.AOS) {
        try {
          window.AOS.refreshHard();
        } catch (e) {}
      }

      // Re-calculate GSAP ScrollTrigger layout positions
      if (window.ScrollTrigger) {
        try {
          window.ScrollTrigger.refresh();
        } catch (e) {}
      }

      // Re-trigger PureCounter if needed
      if (window.PureCounter) {
        try {
          new window.PureCounter();
        } catch (e) {}
      }

      // Absolute safety guarantee:
      // Ensure all [data-aos] elements within visible sections receive 'aos-animate'
      // so no content or card EVER stays stuck at opacity: 0!
      document.querySelectorAll('[data-aos]').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 150) {
          el.classList.add('aos-animate');
        }
      });
    };

    syncView();
    const t1 = setTimeout(syncView, 80);
    const t2 = setTimeout(syncView, 300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [currentRoute]);

  return (
    <>
      <UIElements />
      <Offcanvas />
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div style={{ display: currentRoute === 'home' ? 'block' : 'none' }}>
            <HomePage />
          </div>
          {currentRoute === 'works' && <WorksPage />}
          {currentRoute === 'contact' && <ContactPage />}
          <Footer isContactPage={currentRoute === 'contact'} />
        </div>
      </div>
      <ChatBot />
    </>
  );
}
