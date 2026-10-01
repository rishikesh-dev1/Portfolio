import { useState, useEffect } from 'react';
import { useTemplateEffects } from './hooks/useTemplateEffects';
import UIElements from './components/UIElements';
import Offcanvas from './components/Offcanvas';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import ContactPage from './pages/ContactPage';
import ChatBot, { ChatLauncher } from './components/ChatBot';

function resolvePage() {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash.toLowerCase();
  const path = window.location.pathname.toLowerCase();
  if (hash.startsWith('#/works') || hash.startsWith('#works') || path === '/works') return 'works';
  if (hash.startsWith('#/contact') || hash.startsWith('#contact') || path === '/contact') return 'contact';
  return 'home';
}

function checkIsChatRoute() {
  if (typeof window === 'undefined') return false;
  const hash = window.location.hash.toLowerCase();
  const path = window.location.pathname.toLowerCase();
  return hash.startsWith('#/chat') || hash.startsWith('#chat') || path === '/chat';
}

export default function App() {
  useTemplateEffects();

  const [currentRoute, setCurrentRoute] = useState(resolvePage);
  const [isChatOpen, setIsChatOpen] = useState(checkIsChatRoute);

  useEffect(() => {
    const handleRoute = () => {
      const isChat = checkIsChatRoute();
      if (!isChat) {
        setCurrentRoute(resolvePage());
      }
      setIsChatOpen(isChat);
    };

    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('popstate', handleRoute);
    return () => {
      window.removeEventListener('hashchange', handleRoute);
      window.removeEventListener('popstate', handleRoute);
    };
  }, []);

  useEffect(() => {
    // 1. Immediately scroll to top when main page route changes
    if (window.smoother && typeof window.smoother.scrollTo === 'function') {
      window.smoother.scrollTo(0, false);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // 2. Comprehensive Animation, AOS & Visibility Sync
    const syncView = () => {
      if (window.AOS) {
        try {
          window.AOS.refreshHard();
        } catch (e) {}
      }

      if (window.ScrollTrigger) {
        try {
          window.ScrollTrigger.refresh();
        } catch (e) {}
      }

      if (window.PureCounter) {
        try {
          new window.PureCounter();
        } catch (e) {}
      }

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

  // Mobile-only body scroll lock so desktop remains free to scroll & browse
  useEffect(() => {
    const syncMobileScrollLock = () => {
      const isMobile = window.innerWidth <= 768;
      if (isChatOpen && isMobile) {
        document.body.classList.add('rishi-chat-mobile-open');
        if (window.smoother && typeof window.smoother.paused === 'function') {
          window.smoother.paused(true);
        }
      } else {
        document.body.classList.remove('rishi-chat-mobile-open');
        if (window.smoother && typeof window.smoother.paused === 'function') {
          window.smoother.paused(false);
        }
      }
    };

    syncMobileScrollLock();
    window.addEventListener('resize', syncMobileScrollLock);
    return () => {
      window.removeEventListener('resize', syncMobileScrollLock);
      document.body.classList.remove('rishi-chat-mobile-open');
      if (window.smoother && typeof window.smoother.paused === 'function') {
        window.smoother.paused(false);
      }
    };
  }, [isChatOpen]);

  const handleOpenChat = () => {
    setIsChatOpen(true);
    if (!window.location.hash.toLowerCase().includes('chat')) {
      window.location.hash = '#/chat';
    }
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    if (window.location.hash.toLowerCase().includes('chat')) {
      const targetHash = currentRoute === 'home' ? '#/' : `#/${currentRoute}`;
      window.location.hash = targetHash;
    }
  };

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
      <ChatBot isOpen={isChatOpen} onClose={handleCloseChat} />
      {!isChatOpen && <ChatLauncher onOpen={handleOpenChat} />}
    </>
  );
}
