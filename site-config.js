/*
  Edit this file to update the business details, theme colors, and page copy.
  To override more page text, add a CSS selector and replacement text to `copy`.
  Target leaf elements where possible so nested markup and styling stay intact.
*/
window.SITE_CONFIG = {
  title: 'CODIGOOO | Web App Development & Design',
  description: 'CODIGOOO builds and designs web apps for clients worldwide.',
  theme: {
    ink: '#0A0A0B',
    coal: '#131315',
    smoke: '#1E1E21',
    paper: '#F4F2ED',
    bone: '#EDEAE2',
    lime: '#D4FF3F',
    blaze: '#FF3D00',
    viol: '#7C5CFF',
    muted: '#8A8A93'
  },
  contact: {
    email: 'vedantbhayani00@gmail.com',
    phone: '+919687524884',
    displayPhone: '+91 96875 24884',
    whatsapp: '+919687524884',
    whatsappMessage: "Hi CODIGOOO, I'm interested in developing a web app. Can we discuss my project?",
    serviceArea: 'Remote web app development and design for clients worldwide',
    availability: 'Available 24/7',
    responseTime: 'Replies within 1 hour'
  },
  content: {
    hero: {
      titleLines: ['WE BUILD', 'DIGITAL', 'MONSTERS', 'THAT EAT', 'COMPETITION'],
      description: 'We design and develop web apps for clients around the world.',
      primaryButton: 'START YOUR PROJECT ↗',
      availability: '24/7 AVAILABILITY'
    },
    proof: {
      revenue: '$480M',
      rating: '4.9/5',
      clientCount: '180+',
      avatarCount: '250+',
      productsLive: '37',
      stats: [
        { value: 250, suffix: '+', label: 'PROJECTS SHIPPED' },
        { value: 480, prefix: '$', suffix: 'M', label: 'CLIENT REVENUE DRIVEN' },
        { value: 98, suffix: '%', label: 'CLIENT RETENTION' },
        { value: 26, suffix: '×', label: 'DESIGN AWARDS' }
      ]
    },
    featuredProjects: [1, 2, 5, 3],
    projects: [
      { id: 1, cat: 'saas', tag: 'SAAS • WEB APP', title: 'PULSEBOARD', sub: 'Real-time analytics OS for e-com brands', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop', color: '#7C5CFF', stats: [['+312%', 'ARR growth'], ['40k', 'Active users'], ['0.6s', 'Load time']], desc: 'Pulseboard came to us with a spreadsheet nightmare and left with a real-time analytics monster. Next.js + WebSockets + a design system so clean it hurts. They closed their Series A three months after launch — the deck featured our UI on slide one.' },
      { id: 2, cat: 'ecom', tag: 'E-COMMERCE • BRAND', title: 'VELVET & VICE', sub: 'DTC fashion storefront that prints money', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80&auto=format&fit=crop', color: '#FF3D00', stats: [['+248%', 'Conversion rate'], ['$4.2M', 'First-year revenue'], ['1.1s', 'Page load']], desc: 'A headless Shopify + Next.js build with 3D product views, AI size recommendations and a checkout so smooth it feels illegal. Velvet & Vice went from $30k/mo to $350k/mo in eight months.' },
      { id: 3, cat: 'mobile', tag: 'MOBILE • iOS + ANDROID', title: 'MUNCHR', sub: 'Food delivery with a 4.9★ obsession', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=80&auto=format&fit=crop', color: '#D4FF3F', stats: [['2.1M', 'Downloads'], ['4.9★', 'App Store'], ['#3', 'Food & Drink']], desc: 'Flutter build with live order tracking, gamified loyalty and checkout in two taps. Featured by Apple, loved by hangry humans everywhere. Retention runs 3× the category average.' },
      { id: 4, cat: 'web', tag: 'WEB • FINTECH', title: 'LEDGERLY', sub: 'Banking-grade dashboard, consumer-grade fun', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80&auto=format&fit=crop', color: '#0A0A0B', stats: [['$180M', 'Processed / year'], ['99.99%', 'Uptime'], ['SOC2', 'Certified']], desc: 'React + Node fintech platform with real-time ledgering, KYC flows and a fraud-detection UI. Passed the SOC2 audit on the first try. Handles $15M per month without breaking stride.' },
      { id: 5, cat: 'saas', tag: 'AI • SAAS', title: 'SYNTHIA AI', sub: 'LLM copilot for legal teams', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80&auto=format&fit=crop', color: '#7C5CFF', stats: [['10×', 'Faster review'], ['500+', 'Law firms'], ['$8M', 'Seed raised']], desc: 'We wrapped GPT-class models in an interface lawyers actually enjoy. RAG pipeline, redlining, one-click briefs. Synthia raised $8M on the back of this product — built in 10 weeks.' },
      { id: 6, cat: 'mobile', tag: 'MOBILE • FITNESS', title: 'FORGE', sub: 'AI personal trainer in your pocket', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80&auto=format&fit=crop', color: '#FF3D00', stats: [['850k', 'Athletes'], ['38%', 'D30 retention'], ['4.8★', 'Play Store']], desc: 'Native iOS + Android with on-device AI form correction, Apple Health sync and social streaks. Forge hit 850k users with zero paid ads — pure product-led growth.' },
      { id: 7, cat: 'web', tag: 'WEB • REAL ESTATE', title: 'KEYSTONE', sub: 'Property platform with 3D tours', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80&auto=format&fit=crop', color: '#0A0A0B', stats: [['+190%', 'Qualified leads'], ['120k', 'Listings'], ['22', 'Markets']], desc: 'Map-first search, instant 3D tours and a mortgage calculator baked into every listing. Keystone now dominates 22 markets and counting.' },
      { id: 8, cat: 'ecom', tag: 'E-COM • BEAUTY', title: 'GLOWHAUS', sub: 'Skincare subscription that went viral', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80&auto=format&fit=crop', color: '#D4FF3F', stats: [['65k', 'Subscribers'], ['+400%', 'TikTok revenue'], ['4.9★', '12k reviews']], desc: 'Quiz-driven personalization, a subscription engine and a UGC wall. Glowhaus sold out four launches in a row. Their TikTok Shop integration did $1M in a single weekend.' }
    ],
    testimonials: [
      { quote: "Codigooo didn't build us a website. They built us a money machine. Conversion up 248% in 60 days. I've stopped questioning them — I just say yes now.", name: 'Sarah Chen', role: 'CEO, Velvet & Vice', img: 'https://i.pravatar.cc/100?img=47', metric: '+248% conversion' },
      { quote: "Fastest team I've ever worked with. Prototype in 3 days, full app in 7 weeks. Apple featured us. Our investors think we hired 20 engineers. It was 5 Codigooo killers.", name: 'Marcus Webb', role: 'Founder, Munchr', img: 'https://i.pravatar.cc/100?img=13', metric: '2.1M downloads' },
      { quote: 'They think like co-founders, not vendors. Pushed back on my bad ideas, doubled down on the good ones. Our Series A deck was basically screenshots of their work.', name: 'Priya Sharma', role: 'CEO, Pulseboard', img: 'https://i.pravatar.cc/100?img=45', metric: '$12M Series A' },
      { quote: "I've burned $200k on agencies before. Codigooo delivered more in 6 weeks than others did in 6 months. Brutally honest, insanely talented, zero ego.", name: 'David Okafor', role: 'Founder, Forge', img: 'https://i.pravatar.cc/100?img=59', metric: '850k users, $0 ads' }
    ],
    steps: [
      { n: '01', t: 'DISCOVER', d: 'We learn about your users, goals, and competitors before defining the project scope.', tags: ['Strategy', 'Research', 'Scope'], time: 'Week 1' },
      { n: '02', t: 'DESIGN', d: 'We create wireframes, interface designs, and a prototype for review.', tags: ['UX', 'UI', 'Prototype'], time: 'Week 2–3' },
      { n: '03', t: 'DEVELOP', d: 'We build in clear stages and share progress through a testable preview.', tags: ['Code', 'QA', 'Staging'], time: 'Week 3–8' },
      { n: '04', t: 'DEPLOY', d: 'We prepare the product for launch, including hosting, analytics, and quality checks.', tags: ['Launch', 'DevOps', 'SEO'], time: 'Week 8–9' },
      { n: '05', t: 'SUPPORT', d: 'We can continue improving the product after launch based on user feedback.', tags: ['Growth', 'AI', 'Scale'], time: 'Ongoing' }
    ],
    faqs: [
      { q: 'How long does a project take?', a: 'Timing depends on the features and scope. We agree on milestones before work begins and share progress throughout the project.' },
      { q: 'Do you work with early-stage startups?', a: 'Yes. We can help shape an idea, design a prototype, or build a first version of a web app.' },
      { q: 'Who owns the code and design?', a: 'Ownership and handover are agreed in writing before the project starts.' },
      { q: 'What technologies do you use?', a: 'We choose tools to fit the project, with a focus on maintainable web technologies.' },
      { q: 'What if I already have a team?', a: 'We can collaborate with your in-house team on design, development, or specific project work.' }
    ],
    clients: ['NEXAFLOW', 'VELVET&VICE', 'PULSEBOARD', 'MUNCHR', 'FORGE', 'LEDGERLY', 'SYNTHIA', 'KEYSTONE', 'GLOWHAUS', 'ORBITPAY'],
    technologies: [
      ['REACT ⚛', 'NEXT.JS ▲', 'FLUTTER 💙', 'SWIFT 🍎', 'KOTLIN 🤖', 'NODE.JS 🟢', 'PYTHON 🐍', 'TYPESCRIPT 🔷'],
      ['AWS ☁️', 'OPENAI 🤖', 'STRIPE 💳', 'POSTGRES 🐘', 'FIGMA 🎨', 'WEBGL ✨', 'SUPABASE ⚡', 'DOCKER 🐳']
    ],
    bootWords: ['WEB APP DEVELOPMENT', 'PRODUCT DESIGN', 'WORLDWIDE SERVICE', 'CODIGOOO', 'LET\'S BUILD SOMETHING']
  },
  copy: {
    '#hero-clutch-copy': '#1 RATED DEV STUDIO ON CLUTCH 2026',
    '#hero-title-lead': 'WE BUILD',
    '#hero-title-prefix': 'DIGITAL',
    '#hero-title-accent': 'MONSTERS',
    '#hero-title-outro': 'THAT EAT',
    '#comp-word': 'COMPETITION',
    '#hero-description': 'We design and develop web apps for clients around the world.',
    '#hero-cta': 'START YOUR PROJECT ↗',
    '#hero-revenue': '$480M',
    '#manifesto-text': 'We build clear, useful digital products for businesses around the world.',
    '#manifesto .grid h3': ['SPEED IS A FEATURE', 'DESIGN THAT WORKS', 'CODE THAT SCALES'],
    '#manifesto .grid p': [
      'We plan practical milestones and keep the project moving.',
      'We create accessible interfaces shaped around your users.',
      'We build maintainable products ready to grow with your needs.'
    ],
    '.service-row h3': ['WEB DEVELOPMENT', 'APP DEVELOPMENT', 'UI/UX & BRANDING', 'AI & CLOUD'],
    '.srv-desc > p': [
      'Responsive websites and web apps designed around your business needs.',
      'Mobile apps designed and developed for iOS and Android.',
      'Research, interface design, prototypes, and visual identity.',
      'Practical AI integrations and reliable cloud infrastructure.'
    ],
    '#work-label': 'SELECTED WORK',
    '#work-title-first': 'PROJECTS',
    '#work-title-second': 'WE BUILT',
    '#work-intro': 'A selection of projects and product work.',
    '#process-title-first': 'OUR PROCESS',
    '#process-title-second': 'CLEAR STEPS.',
    '#process-intro': 'A clear process from first discussion through launch.',
    '#testimonials-label': 'CLIENT FEEDBACK',
    '#testimonials-title': 'CLIENT STORIES.',
    '#faq-title': 'COMMON QUESTIONS',
    '#footer-service-area': 'Remote • Worldwide',
    '#footer-newsletter-note': 'Send a request to receive occasional email updates.',
    '#footer-newsletter-heading': 'NEWSLETTER',
    '.hero-reply-copy': 'AVAILABLE 24/7 • REPLIES WITHIN 1 HOUR',
    '#live-viewers': '24/7',
    '#live-viewer-label': 'AVAILABILITY',
    '.nav-link': ['WORK', 'SERVICES', 'PROCESS', 'STUDIO'],
    '#menu-overlay .menu-link': ['WORK', 'SERVICES', 'PROCESS', 'CONTACT ↗'],
    '.srv-tag': [
      'REACT / NEXT.JS', 'HEADLESS CMS', 'E-COMMERCE', 'WEBGL',
      'iOS / ANDROID', 'FLUTTER / RN', 'SWIFT / KOTLIN',
      'DESIGN SYSTEMS', 'PROTOTYPING', 'MOTION / 3D',
      'LLM INTEGRATION', 'DEVOPS / AWS', 'AUTOMATION'
    ],
    '.srv-stat': [
      '⚡ 0.8s avg load', '📈 +187% avg conversion lift',
      '📱 8M+ downloads driven', '🏆 Featured by Apple 6×',
      '🎨 Awwwards SOTD ×5', '🧠 Tested on 10k users',
      '🤖 30+ AI features shipped', '☁️ 99.99% uptime SLA'
    ],
    '.filter-pill': ['ALL', 'WEB', 'MOBILE', 'SAAS', 'E-COM'],
    '#love .outcome-badge p': ['4.9★', 'CLUTCH RATING', '180+', 'VERIFIED REVIEWS', '3.4M', 'USERS TOUCHED', '92%', 'REFERRAL RATE'],
    '#contact-form label': ['YOUR NAME *', 'EMAIL *', 'WHAT ARE WE BUILDING? *', 'SPILL THE IDEA *'],
    '#contact .grid.grid-cols-2 > a p:first-child': ['PHONE', 'WHATSAPP'],
    '#contact .reveal.flex.gap-3 a': ['IG', '𝕏', 'IN', 'DR', 'GH'],
    'footer .grid > div:nth-child(1) a': ['Work', 'Services', 'Process'],
    'footer .grid > div:nth-child(2) span': ['Web App Development', 'App Development', 'UI/UX Design', 'AI Integration']
  },
  attributes: {
    '#f-name': { placeholder: 'Your name' },
    '#f-email': { placeholder: 'you@example.com' },
    '#f-msg': { placeholder: 'Tell us about your project…' },
    '#chat-input': { placeholder: 'Ask about your project…' },
    '#nl-input': { placeholder: 'your@email.com' }
  }
};

(function applySiteConfig(config) {
  const root = document.documentElement;
  Object.entries(config.theme).forEach(([name, value]) => {
    root.style.setProperty('--' + name, value);
  });

  document.title = config.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = config.description;

  const defaultCopy = {
    '#contact-intro': config.contact.serviceArea + '. ' + config.contact.availability + '; ' + config.contact.responseTime + '.',
    '#mail-chip p:last-child': config.contact.email,
    '#contact-phone-number': config.contact.displayPhone,
    '#contact-whatsapp-number': config.contact.displayPhone,
    '#contact-response-time': config.contact.availability + ' • ' + config.contact.responseTime,
    '#menu-contact-details': config.contact.email + ' — ' + config.contact.displayPhone,
    '.hero-reply-copy': (config.contact.availability + ' • ' + config.contact.responseTime).toUpperCase()
  };
  const contentCopy = {
    ...defaultCopy,
    '#hero-title-lead': config.content.hero.titleLines[0],
    '#hero-title-prefix': config.content.hero.titleLines[1],
    '#hero-title-accent': config.content.hero.titleLines[2],
    '#hero-title-outro': config.content.hero.titleLines[3],
    '#comp-word': config.content.hero.titleLines[4],
    '#hero-description': config.content.hero.description,
    '#hero-cta': config.content.hero.primaryButton,
    '#hero-revenue': config.content.proof.revenue,
    '#hero-rating-value': config.content.proof.rating,
    '#hero-founder-count': 'FROM ' + config.content.proof.clientCount + ' FOUNDERS & CMOS',
    '#hero-avatar-count': config.content.proof.avatarCount,
    '#products-live-value': config.content.proof.productsLive,
    '#hero-reply-copy': (config.contact.availability + ' • ' + config.contact.responseTime).toUpperCase(),
    '#live-viewers': config.contact.availability,
    '#live-viewer-label': 'READY TO TALK',
    '#faq-wrap .faq-q': config.content.faqs.map((item) => item.q),
    '#faq-wrap .faq-answer p': config.content.faqs.map((item) => item.a),
    '#process-steps .process-card h3': config.content.steps.map((item) => item.t),
    '#process-steps .process-card > p': config.content.steps.map((item) => item.d)
  };
  const copy = { ...contentCopy, ...config.copy };

  const setText = (element, text) => {
    const textNodes = Array.from(element.childNodes).filter((node) => node.nodeType === Node.TEXT_NODE);
    if (textNodes.length) {
      textNodes[0].textContent = text;
      textNodes.slice(1).forEach((node) => { node.textContent = ''; });
    } else {
      element.textContent = text;
    }
  };

  const applyCopy = () => {
    Object.entries(copy).forEach(([selector, value]) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        const text = Array.isArray(value) ? value[index] : value;
        if (typeof text === 'string' && element.textContent.trim() !== text) setText(element, text);
      });
    });
  };

  const applyAttributes = () => {
    Object.entries(config.attributes).forEach(([selector, values]) => {
      document.querySelectorAll(selector).forEach((element) => {
        Object.entries(values).forEach(([name, value]) => element.setAttribute(name, value));
      });
    });
  };

  const applyContactLinks = () => {
    const phoneHref = 'tel:' + config.contact.phone.replace(/[^+\d]/g, '');
    document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
      link.href = phoneHref;
    });

    const whatsappNumber = config.contact.whatsapp.replace(/\D/g, '');
    const whatsappLink = document.querySelector('#contact-whatsapp');
    if (whatsappLink) {
      whatsappLink.href = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(config.contact.whatsappMessage);
    }
  };

  const initialize = () => {
    applyCopy();
    applyAttributes();
    applyContactLinks();
    new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
        });
      });
      applyCopy();
      applyAttributes();
      applyContactLinks();
    }).observe(document.body, { childList: true, subtree: true });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})(window.SITE_CONFIG);
