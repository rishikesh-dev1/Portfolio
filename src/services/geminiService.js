import { PORTFOLIO_PROFILE, CORE_SERVICES, PROJECTS_LIST, SYSTEM_INSTRUCTION } from '../data/portfolioKnowledge.js';

/**
 * Retrieve the active Gemini API key from environment variables (.env)
 * or localStorage fallback.
 */
export function getActiveApiKey() {
  const envKey =
    (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GEMINI_API_KEY) ||
    (typeof process !== 'undefined' && process.env && process.env.VITE_GEMINI_API_KEY) ||
    '';
  if (envKey && envKey.trim().length > 0) {
    return envKey.trim();
  }
  const customKey = typeof window !== 'undefined' ? localStorage.getItem('rishi_gemini_api_key') : null;
  if (customKey && customKey.trim().length > 0) {
    return customKey.trim();
  }
  return '';
}

/**
 * Clean up text response formatting
 */
export function cleanBotResponse(text) {
  if (!text) return '';
  return text
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/**
 * Instant offline fallback answer generator for seamless resilience
 */
function getOfflineAnswer(query) {
  const q = (query || '').toLowerCase().trim();

  if (q.includes('kay nahi') || q.includes('kahi nahi') || q.includes('kuch nahi') || q.includes('nothing') || q === 'nahi' || q === 'nako') {
    return `### काही हरकत नाही! 🙏\n\nमी **Rishi AI**, ऋषिकेश वाकचौरे यांचा AI असिस्टंट आहे. मी तुम्हाला कशी मदत करू शकतो?\n\nतुम्ही ऋषिकेशचे **AI सोल्युशन्स, फुल-स्टॅक प्रोजेक्ट्स (MERN), AWS क्लाउड अनुभव, किंवा संपर्क माहिती** याबद्दल कोणताही प्रश्न विचारू शकता!`;
  }

  if (q.includes('kashi ahes') || q.includes('kasa ahes') || q.includes('kay chalalay') || q.includes('namaskar') || q.includes('marathi')) {
    return `### नमस्कार! ऋषिकेश वाकचौरे यांच्या पोर्टफोलिओमध्ये आपले स्वागत आहे! 🙏\n\nमी **Rishi AI** आहे. मी अगदी मजेत आहे! मी तुम्हाला ऋषिकेशच्या कामाबद्दल, प्रोजेक्ट्सबद्दल किंवा तंत्रज्ञानाबद्दल माहिती देऊ शकतो.\n\nतुम्हाला खालीलपैकी कशाबद्दल जाणून घ्यायला आवडेल?\n- **प्रोजेक्ट्स:** Aanvitha Technologies, RestroBazaar, AKHD Media\n- **सेवा:** AI Agents, Full Stack (MERN), Cloud & AWS\n- **कामाचा अनुभव:** Gamotech Solutions, Infosys Springboard`;
  }

  if (q.includes('hindi') || q.includes('kaise ho') || q.includes('namaste') || q.includes('kya haal hai')) {
    return `### नमस्ते! ऋषिकेश वाकचौरे के पोर्टफोलियो में आपका स्वागत है! 🙏\n\nमैं **Rishi AI** हूँ, ऋषिकेश का आधिकारिक AI सहायक। आप मुझसे ऋषिकेश के **AI प्रोजेक्ट्स, MERN डेवलपमेंट, कंपनी अनुभव और संपर्क जानकारी** के बारे में कुछ भी पूछ सकते हैं!`;
  }

  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('hire') || q.includes('call')) {
    return `### Contact Rishikesh Wakchaure 📬\n\nRishikesh is actively available for full-time software developer opportunities, freelance engineering, and AI agent consulting:\n\n- **Email:** [${PORTFOLIO_PROFILE.email}](mailto:${PORTFOLIO_PROFILE.email})\n- **Phone / WhatsApp:** [${PORTFOLIO_PROFILE.phone}](tel:${PORTFOLIO_PROFILE.phone})\n- **Location:** ${PORTFOLIO_PROFILE.location}\n- **LinkedIn:** [linkedin.com/in/rishikesh-wakchaure](https://linkedin.com/in/rishikesh-wakchaure-06055524b)\n- **GitHub:** [github.com/rishikesh5577](https://github.com/rishikesh5577)\n- **Portfolio:** [rishiwakchaure.vercel.app](https://rishiwakchaure.vercel.app/)\n\nYou can also jump directly to the **[Contact Section](#contact)** to send a message!`;
  }

  if (q.includes('service') || q.includes('offer') || q.includes('skill') || q.includes('stack') || q.includes('tech')) {
    return `### Rishikesh's Core Services & Tech Stack 🚀\n\nRishikesh specializes in scalable, modern web and AI architectures:\n\n1. **AI Agents & LLM Solutions:** Intelligent chatbots, RAG pipelines, and automated customer engagement.\n2. **Full Stack & MERN Development:** High-performance React 19 frontends, robust Node.js & Express.js REST APIs, and MongoDB.\n3. **Cloud Infrastructure & AWS:** Deployments and architectures across AWS EC2, S3, Vercel, and Render.\n4. **System Integrations:** Payment gateways (Stripe), EmailJS, WhatsApp APIs, and webhooks.\n\nAsk me about any specific service for more details!`;
  }

  if (q.includes('project') || q.includes('work') || q.includes('aanvitha') || q.includes('restrobazaar') || q.includes('akhd')) {
    return `### Featured Production Projects 💻\n\nRishikesh has engineered 8+ live and enterprise platforms:\n\n- **Aanvitha Technologies:** Enterprise AI, Fintech & SaaS platform with streaming Gemini AI ([Live](https://www.aanvitha.tech))\n- **RestroBazaar:** Multi-vendor eCommerce food & restaurant supply platform with admin and vendor dashboards ([Live](https://restrobazaar.in/))\n- **AKHD Media:** High-speed video streaming & entertainment portal on MERN & AWS S3 ([Live](https://www.akhdmedia.com))\n- **Fashion-Cart:** Modern fashion e-commerce with Stripe payments ([Live](https://www.fashion-cart.in/))\n- **Dynamic World & Club Zeno:** Production platforms for education and wellness\n\nCheck out the **[Works Page](#/works)** for the complete portfolio showcase!`;
  }

  if (q.includes('experience') || q.includes('gamotech') || q.includes('infosys') || q.includes('job') || q.includes('company')) {
    return `### Professional Experience 💼\n\n- **Gamotech Solutions Pvt. Ltd.** *(Associate Software Developer | Jan 2026 – Present)*:\n  Engineers reusable React.js components, develops Node.js/Express REST APIs, builds LLM-powered AI chatbot agents for business automation, and manages AWS cloud deployments.\n\n- **Infosys Springboard** *(Software Developer Intern | Oct 2025 – Jan 2026)*:\n  Hands-on full-stack development, database architecture, REST APIs, and Git teamwork.\n\n- **Education:** B.E. in Information Technology, Amrutvahini College of Engineering, SPPU (CGPA: 7.89 / 10.00).`;
  }

  return `### Hello from Rishi AI! 👋\n\nI am the AI representative for **Rishikesh Wakchaure**—Associate Software Developer, Full-Stack Engineer, and AI Specialist.\n\nFeel free to ask me about:\n- **Rishikesh's Projects** (Aanvitha Tech, RestroBazaar, AKHD Media)\n- **Technical Services** (AI Agents, MERN Stack, Cloud & APIs)\n- **Experience & Education** (Gamotech Solutions, Infosys, SPPU)\n- **How to Contact or Hire Rishikesh**`;
}

// Ultra-fast lightweight models prioritized for sub-second latency
const FAST_MODELS = [
  'gemini-2.5-flash',
  'gemini-2.5-flash-lite',
  'gemini-3.5-flash-lite',
  'gemini-3.5-flash',
  'gemini-flash-latest',
  'gemini-flash-lite-latest'
];

/**
 * Real-time Streaming Gemini request with sliding memory window
 * @param {Array<{ role: 'user' | 'model', content: string }>} conversationHistory
 * @param {(text: string) => void} onChunk
 * @returns {Promise<string>}
 */
export async function streamGeminiMessage(conversationHistory, onChunk) {
  const apiKey = getActiveApiKey();

  if (!apiKey) {
    const lastUserMessage = [...conversationHistory].reverse().find((m) => m.role === 'user')?.content || '';
    const fallback = getOfflineAnswer(lastUserMessage);
    if (onChunk) onChunk(fallback);
    return fallback;
  }

  // Sliding memory window: Keep last 6 messages to keep payloads small & latency under 1s
  const historyToSend = conversationHistory.slice(-6);
  const contents = historyToSend.map((msg) => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.content }],
  }));

  const requestBody = {
    system_instruction: {
      parts: [{ text: `${SYSTEM_INSTRUCTION}\n\nCRITICAL LANGUAGE MANDATE: Always reply in the visitor's EXACT language (English, Marathi, Hindi, etc.). Never switch languages!` }],
    },
    contents: contents,
    generationConfig: {
      temperature: 0.5,
      topP: 0.9,
      maxOutputTokens: 800,
    },
  };

  for (const model of FAST_MODELS) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${apiKey}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) continue;

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullText = '';
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const jsonStr = line.slice(6).trim();
            if (!jsonStr || jsonStr === '[DONE]') continue;
            try {
              const parsed = JSON.parse(jsonStr);
              const chunk = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
              if (chunk) {
                fullText += chunk;
                const cleaned = cleanBotResponse(fullText);
                if (onChunk) onChunk(cleaned);
              }
            } catch (e) {
              // Ignore partial chunk parse errors
            }
          }
        }
      }

      const finalCleaned = cleanBotResponse(fullText);
      if (finalCleaned.length > 0) {
        return finalCleaned;
      }
    } catch (err) {
      console.warn(`Streaming attempt on ${model} failed, trying fallback:`, err);
    }
  }

  // Fallback to standard request if streaming reader failed
  return sendGeminiMessage(conversationHistory);
}

/**
 * Standard non-streaming Gemini API request (fallback)
 * @param {Array<{ role: 'user' | 'model', content: string }>} conversationHistory 
 * @returns {Promise<string>}
 */
export async function sendGeminiMessage(conversationHistory) {
  const apiKey = getActiveApiKey();

  if (!apiKey) {
    const lastUserMessage = [...conversationHistory].reverse().find((m) => m.role === 'user')?.content || '';
    return getOfflineAnswer(lastUserMessage);
  }

  const historyToSend = conversationHistory.slice(-6);
  const contents = historyToSend.map((msg) => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.content }],
  }));

  const requestBody = {
    system_instruction: {
      parts: [{ text: SYSTEM_INSTRUCTION }],
    },
    contents: contents,
    generationConfig: {
      temperature: 0.5,
      topP: 0.9,
      maxOutputTokens: 800,
    },
  };

  let lastError = null;

  for (const model of FAST_MODELS) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorJson = await response.json().catch(() => ({}));
        const errorMessage = errorJson?.error?.message || response.statusText;
        lastError = new Error(`Gemini API error (${response.status}): ${errorMessage}`);
        continue;
      }

      const data = await response.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (text && text.trim().length > 0) {
        return cleanBotResponse(text.trim());
      }
    } catch (err) {
      lastError = err;
    }
  }

  if (lastError) {
    console.warn('Gemini request fallback:', lastError.message);
  }
  const lastUserMessage = [...conversationHistory].reverse().find((m) => m.role === 'user')?.content || '';
  return getOfflineAnswer(lastUserMessage);
}
