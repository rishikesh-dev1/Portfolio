import { useState, useRef, useEffect } from 'react';
import './ChatBot.css';
import { streamGeminiMessage, cleanBotResponse } from '../services/geminiService';

// Exact 3D Robot Avatar from Aanvitha
const AANVI_ROBOT_AVATAR =
  'https://res.cloudinary.com/vpqvkwtj/image/upload/v1788778171/08ffbcb6-0ef4-42f1-b00f-4073d402a82b.png';

const INITIAL_MESSAGE = {
  id: 'welcome',
  role: 'model',
  content: `Hello! 👋 I'm **Rishi AI**, your interactive guide for **Rishikesh Wakchaure** (Associate Software Developer & Full-Stack AI Engineer).\n\nFeel free to ask me anything about Rishikesh's **AI solutions, live production projects (Aanvitha Tech, RestroBazaar), tech stack, experience**, or how to get in touch!`,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
};

const QUICK_SUGGESTIONS = [
  'What services do you offer?',
  'Tell me about your projects',
  'What is your tech stack?',
  'What is your work experience?',
  'How can I contact Rishikesh?',
];

/**
 * Lightweight safe markdown renderer for chat messages
 */
function MarkdownText({ text }) {
  if (!text) return null;

  const lines = text.split('\n');
  const elements = [];
  let currentList = null;
  let listType = null;

  const handleLinkClick = (e, url) => {
    if (url.startsWith('#')) {
      e.preventDefault();
      const targetId = url.replace(/^#\/?/, '');
      if (targetId === 'works' || targetId === 'contact') {
        window.location.hash = targetId;
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.hash = targetId;
        }
      }
    }
  };

  const renderInline = (str) => {
    const parts = str.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (linkMatch) {
        const [, label, url] = linkMatch;
        const isInternal = url.startsWith('#');
        return (
          <a
            key={i}
            href={url}
            onClick={(e) => handleLinkClick(e, url)}
            target={isInternal ? '_self' : '_blank'}
            rel={isInternal ? '' : 'noopener noreferrer'}
          >
            {label}
          </a>
        );
      }
      return part;
    });
  };

  const flushList = () => {
    if (currentList) {
      if (listType === 'ol') {
        elements.push(<ol key={`list-${elements.length}`}>{currentList}</ol>);
      } else {
        elements.push(<ul key={`list-${elements.length}`}>{currentList}</ul>);
      }
      currentList = null;
      listType = null;
    }
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      return;
    }

    if (trimmed.startsWith('### ')) {
      flushList();
      elements.push(<h3 key={idx}>{renderInline(trimmed.replace(/^###\s+/, ''))}</h3>);
      return;
    }

    const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
    if (numMatch) {
      if (listType !== 'ol') {
        flushList();
        listType = 'ol';
        currentList = [];
      }
      currentList.push(<li key={`item-${idx}`}>{renderInline(numMatch[2])}</li>);
      return;
    }

    if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('• ')) {
      if (listType !== 'ul') {
        flushList();
        listType = 'ul';
        currentList = [];
      }
      currentList.push(
        <li key={`item-${idx}`}>
          {renderInline(trimmed.replace(/^[-*•]\s+/, ''))}
        </li>
      );
      return;
    }

    flushList();
    elements.push(<p key={idx}>{renderInline(trimmed)}</p>);
  });

  flushList();

  return <>{elements}</>;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll when new messages arrive
  useEffect(() => {
    if (isOpen && hasStarted) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, hasStarted, isLoading]);

  // Focus input when moving to chat flow
  useEffect(() => {
    if (isOpen && hasStarted) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen, hasStarted]);

  const handleClearChat = () => {
    if (window.confirm('Restart conversation?')) {
      setMessages([
        {
          ...INITIAL_MESSAGE,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  };

  const handleSendMessage = async (customPrompt = null) => {
    const prompt = typeof customPrompt === 'string' ? customPrompt.trim() : inputText.trim();
    if (!prompt || isLoading) return;

    setInputText('');

    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const botMsgId = `model-${Date.now()}`;
    const placeholderBotMessage = {
      id: botMsgId,
      role: 'model',
      content: '',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedHistory = [...messages, userMessage];
    setMessages([...updatedHistory, placeholderBotMessage]);
    setIsLoading(true);

    try {
      const conversationPayload = updatedHistory.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      let accumulatedText = '';
      const replyText = await streamGeminiMessage(conversationPayload, (streamedText) => {
        accumulatedText = streamedText;
        setMessages((prev) =>
          prev.map((msg) => (msg.id === botMsgId ? { ...msg, content: streamedText } : msg))
        );
      });

      const finalContent = cleanBotResponse(replyText || accumulatedText);
      setMessages((prev) =>
        prev.map((msg) => (msg.id === botMsgId ? { ...msg, content: finalContent } : msg))
      );
    } catch (err) {
      console.error('Gemini streaming error:', err);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMsgId
            ? {
                ...msg,
                content:
                  'I apologize, our AI assistant encountered a brief connection glitch. Please feel free to email Rishikesh directly at [wakchaurerishi5555@gmail.com](mailto:wakchaurerishi5555@gmail.com) or try asking again!',
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="aanvi-chatbot-wrapper">
      {/* Floating launcher button */}
      {!isOpen && (
        <button
          type="button"
          className="aanvi-launcher-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Assistant"
        >
          <div className="aanvi-launcher-icon-wrap">
            <span className="aanvi-pulse-ring" />
            <img src={AANVI_ROBOT_AVATAR} alt="Rishi AI" className="aanvi-launcher-img" />
          </div>
          <span className="aanvi-launcher-label">Ask Rishi AI</span>
        </button>
      )}

      {/* Chat window modal */}
      {isOpen && (
        <div className="aanvi-chat-card" role="dialog" aria-modal="true" aria-label="Rishi AI Assistant">
          {!hasStarted ? (
            /* ── Pre-Chat Onboarding / Welcome Screen (Aanvitha Reference UI) ── */
            <div className="aanvi-onboarding-screen">
              {/* Top Bar: Close Button */}
              <div className="aanvi-onboarding-top">
                <button
                  type="button"
                  className="aanvi-icon-btn aanvi-close-btn"
                  title="Close Chat"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Chat"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Center Stage: Futuristic Concentric Orbits, Floating Crystals & 3D Robot */}
              <div className="aanvi-onboarding-center">
                <div className="aanvi-orbit-stage">
                  {/* Glowing Wireframe Concentric Orbits */}
                  <svg className="aanvi-orbit-svg" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <radialGradient id="rishiStageGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ff5100" stopOpacity="0.45" />
                        <stop offset="48%" stopColor="#ff8c00" stopOpacity="0.18" />
                        <stop offset="85%" stopColor="#08080a" stopOpacity="0" />
                      </radialGradient>
                      <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#ff914d" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#ff5100" stopOpacity="0.12" />
                      </linearGradient>
                      <linearGradient id="orbitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ffa048" stopOpacity="0.75" />
                        <stop offset="60%" stopColor="#ff6b00" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#ffa048" stopOpacity="0.12" />
                      </linearGradient>
                    </defs>

                    {/* Central Atmosphere Glow */}
                    <circle cx="170" cy="170" r="150" fill="url(#rishiStageGlow)" />

                    {/* Elliptical Wireframe Orbits */}
                    <ellipse cx="170" cy="170" rx="155" ry="105" stroke="url(#orbitGrad1)" strokeWidth="1.1" strokeDasharray="5 7" opacity="0.5" transform="rotate(-18 170 170)" />
                    <ellipse cx="170" cy="170" rx="134" ry="84" stroke="url(#orbitGrad2)" strokeWidth="1.3" opacity="0.7" transform="rotate(14 170 170)" />
                    <ellipse cx="170" cy="170" rx="110" ry="62" stroke="url(#orbitGrad1)" strokeWidth="1.6" opacity="0.85" transform="rotate(-22 170 170)" />
                    <ellipse cx="170" cy="170" rx="84" ry="44" stroke="#ff6b00" strokeWidth="1.2" strokeDasharray="3 5" opacity="0.8" transform="rotate(20 170 170)" />
                  </svg>

                  {/* Floating Cosmic Shards */}
                  <div className="aanvi-floating-shard shard-1" />
                  <div className="aanvi-floating-shard shard-2" />
                  <div className="aanvi-floating-shard shard-3" />
                  <div className="aanvi-floating-shard shard-4" />

                  {/* Centered Robot Avatar */}
                  <div className="aanvi-hero-avatar-wrap">
                    <img
                      src={AANVI_ROBOT_AVATAR}
                      alt="Rishi AI Robot"
                      className="aanvi-hero-avatar-img"
                    />
                  </div>
                </div>

                {/* Greeting Title */}
                <div className="aanvi-onboarding-copy">
                  <div className="aanvi-onboarding-hi">Hi, I'm Rishi AI! 👋</div>
                  <h2 className="aanvi-onboarding-title">
                    How may I help you<br />today!
                  </h2>
                </div>
              </div>

              {/* Bottom Action: Get Started Button */}
              <div className="aanvi-onboarding-bottom">
                <button
                  type="button"
                  className="aanvi-get-started-btn"
                  onClick={() => {
                    setHasStarted(true);
                    setTimeout(() => inputRef.current?.focus(), 250);
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          ) : (
            /* ── Active Chat Conversation Screen ── */
            <div className="aanvi-chat-active-flow">
              {/* Header */}
              <div className="aanvi-chat-header">
                <div className="aanvi-header-identity">
                  <div className="aanvi-header-avatar-box">
                    <img src={AANVI_ROBOT_AVATAR} alt="Rishi AI" className="aanvi-header-avatar-img" />
                  </div>
                  <div className="aanvi-header-titles">
                    <div className="aanvi-header-name">Rishi AI</div>
                    <div className="aanvi-header-sub">Rishikesh Wakchaure Portfolio</div>
                  </div>
                </div>

                <div className="aanvi-header-actions">
                  <button
                    type="button"
                    className="aanvi-icon-btn aanvi-restart-btn"
                    title="Restart Chat"
                    onClick={handleClearChat}
                    aria-label="Restart Chat"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                      <path d="M21 3v5h-5" />
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                      <path d="M8 16H3v5" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="aanvi-icon-btn aanvi-close-btn"
                    title="Close Chat"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close Chat"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Messages Body */}
              <div className="aanvi-chat-messages">
                {messages.map((msg) => (
                  <div key={msg.id} className={`aanvi-msg-row ${msg.role}`}>
                    {msg.role === 'model' && (
                      <div className="aanvi-msg-avatar">
                        <img src={AANVI_ROBOT_AVATAR} alt="Rishi AI" className="aanvi-msg-avatar-img" />
                      </div>
                    )}
                    <div className="aanvi-msg-bubble">
                      {msg.content ? (
                        <MarkdownText text={msg.content} />
                      ) : (
                        <div style={{ display: 'flex', gap: '5px', padding: '6px 4px', alignItems: 'center' }}>
                          <span className="aanvi-typing-dot" />
                          <span className="aanvi-typing-dot" />
                          <span className="aanvi-typing-dot" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Suggestions (Shown when idle & conversation is fresh) */}
              {!isLoading && messages.length <= 3 && (
                <div className="aanvi-chips-container">
                  <div className="aanvi-chips-scroll">
                    {QUICK_SUGGESTIONS.map((suggestion, idx) => (
                      <button
                        key={idx}
                        className="aanvi-suggestion-pill"
                        onClick={() => handleSendMessage(suggestion)}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer with Input */}
              <div className="aanvi-chat-footer">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="aanvi-input-wrap"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    className="aanvi-input-field"
                    placeholder="Ask about projects, skills, experience, or contact..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    className="aanvi-send-btn"
                    disabled={!inputText.trim() || isLoading}
                    aria-label="Send Message"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </form>

                <div className="aanvi-footer-powered">
                  Powered by <span>Google Gemini</span> • Portfolio & Company Info
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
