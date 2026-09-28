import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, AudioLines, Camera, Globe2, Link2, Megaphone, MoreHorizontal, Palette, X } from 'lucide-react';
import PixelatedIcon from './PixelatedIcon';

const QUICK_ACTIONS = [
  { id: 'website', label: 'Need a Website', icon: Globe2 },
  { id: 'campaign', label: 'Start a Campaign', icon: Megaphone },
  { id: 'content', label: 'Content / Social Media', icon: Camera },
  { id: 'branding', label: 'Branding & Identity', icon: Palette },
  { id: 'onelink', label: 'OneLink / Digital Presence', icon: Link2 },
  { id: 'other', label: 'Something Else', icon: MoreHorizontal },
];

const FLOWS = {
  website: {
    question: 'Sure. What are you looking to build?',
    options: ['Company Website', 'E-commerce', 'Web App', 'Landing Page', 'Not Sure'],
    venture: 'RepixelX',
    whatsapp: "Hi Kriyon, I’m interested in discussing a website project.",
  },
  campaign: {
    question: 'What are you launching or promoting?',
    options: ['Product Launch', 'Brand Campaign', 'Event', 'Not Sure'],
    venture: 'Kriyon Media',
    whatsapp: 'Hi Kriyon, I’d like to discuss a campaign / creative production requirement.',
  },
  content: {
    question: 'What kind of content do you need?',
    options: ['Reels', 'Photography', 'Product Visuals', 'CGI & 3D', 'Ongoing Content'],
    venture: 'Kriyon Media',
    whatsapp: 'Hi Kriyon, I’m looking for content / social media production.',
  },
  branding: {
    question: 'Is this for a new brand or an existing one?',
    options: ['New Brand', 'Rebrand', 'Identity System', 'Not Sure'],
    venture: 'RepixelX',
    whatsapp: 'Hi Kriyon, I’d like to discuss a branding and identity project.',
  },
  onelink: {
    question: 'What would you like OneLink to help customers do?',
    options: ['Business Profile', 'Bookings & Payments', 'Reviews & QR', 'Not Sure'],
    venture: 'OneLink',
    whatsapp: 'Hi Kriyon, I’d like to know more about OneLink.',
  },
  other: {
    question: 'Tell me briefly what you are trying to build or improve.',
    options: [],
    venture: 'Kriyon Group',
    whatsapp: 'Hi Kriyon, I’d like to discuss a project.',
  },
};

function WhatsAppIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12.04 2A9.84 9.84 0 0 0 2.2 11.84c0 1.73.45 3.42 1.31 4.91L2.1 21.9l5.27-1.38a9.84 9.84 0 1 0 4.67-18.52Zm0 17.88a8 8 0 0 1-4.08-1.12l-.29-.17-3.13.82.84-3.05-.19-.31a8.04 8.04 0 1 1 6.85 3.83Zm4.41-6.02c-.24-.12-1.43-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

const getReply = (input) => {
  const value = input.toLowerCase();
  const hinglish = /[\u0900-\u097f]|\b(mujhe|hum|hume|chahiye|banana|banwana|karna|karwana|kaise|kya|hai|hain|wala|wali|bhai)\b/i.test(value);
  const hasAny = (...terms) => terms.some((term) => value.includes(term));

  const brandTech = hasAny('brand', 'branding', 'website', 'web app', 'mobile app', 'app ', 'e-commerce', 'ecommerce', 'ui/ux', 'ui ux', 'digital product', 'automation', 'technology', 'tech');
  const creative = hasAny('campaign', 'photography', 'photo', 'video', 'film', 'reel', 'content', 'cgi', '3d', 'product visual', 'shoot');
  const presence = hasAny('booking', 'payment', 'review', 'qr', 'digital presence', 'one link', 'onelink', 'location', 'enquiry', 'social profile');
  const matchedAreas = [brandTech, creative, presence].filter(Boolean).length;

  if (/^(hello|hi|hey|namaste)(\s|[!.?]|$)/i.test(value.trim())) {
    return { text: hinglish ? 'Hi. Aap kya build, improve ya launch karna chahte hain?' : 'Hi. What are you looking to build, improve or launch?' };
  }

  if (hasAny('what does kriyon', 'what is kriyon', 'about kriyon', 'kriyon kya', 'kriyon do')) {
    return {
      text: hinglish
        ? 'Kriyon Group brand, technology, creative production aur digital presence par specialist ventures ke through kaam karta hai. Aap kya build ya improve karna chahte hain?'
        : 'Kriyon Group works across brand, technology, creative production and digital presence through specialist ventures. Tell me what you’re looking to build or improve and I’ll point you in the right direction.',
      action: { label: 'Explore capabilities', href: '#expertise' },
    };
  }

  if (hasAny('address', 'registered office', 'office location')) {
    return {
      text: hinglish
        ? 'Registered Office: Room No. 2, First Floor, Tawi Enclave, Village Nandini, Gol Gujral, Jammu, Jammu & Kashmir 180002, India.'
        : 'Registered Office: Room No. 2, First Floor, Tawi Enclave, Village Nandini, Gol Gujral, Jammu, Jammu & Kashmir 180002, India.',
      action: { label: 'Open contact page', href: '/contact' },
    };
  }

  if (hasAny('contact', 'phone', 'call', 'email', 'whatsapp', 'talk to', 'speak with', 'reach')) {
    return {
      text: hinglish
        ? 'Kriyon Group se +91 96221 21100 ya hello@kriyongroup.com par connect karein. Project brief Contact page se bhi bhej sakte hain.'
        : 'You can reach Kriyon Group at +91 96221 21100 or hello@kriyongroup.com, or start a project through the Contact page.',
      action: { label: 'Open contact page', href: '/contact' },
    };
  }

  if (hasAny('legal', 'privacy', 'terms', 'policy', 'refund', 'disclosure')) {
    return {
      text: hinglish ? 'Company policies aur disclosures Legal page par mil jayenge.' : 'You’ll find company policies and disclosures on the Legal page.',
      action: { label: 'View legal information', href: '/legal' },
    };
  }

  if (matchedAreas > 1) {
    return {
      text: hinglish
        ? 'Is requirement mein multiple capabilities chahiye. Kriyon Group relevant specialist teams ko ek saath coordinate kar sakta hai.'
        : 'This needs more than one capability. Kriyon Group can coordinate the relevant specialist teams together.',
      action: { label: 'Start a project', href: '/contact' },
    };
  }

  if (brandTech) {
    return {
      text: hinglish
        ? 'Is requirement ke liye RepixelX best fit hai—brand aur technology specialist. Aap naya build kar rahe hain ya existing product improve karna hai?'
        : 'RepixelX is the right fit for this—it specialises in brand and technology. Are you building something new or improving an existing product?',
      action: { label: 'Visit RepixelX', href: 'https://repixelx.com' },
    };
  }

  if (creative) {
    return {
      text: hinglish
        ? 'Iske liye Kriyon Media relevant hai—campaigns, photography, films, CGI aur product visuals ke liye. Aapko campaign chahiye ya single production?'
        : 'Kriyon Media is the relevant team for campaigns, photography, films, CGI and product visuals. Is this for a campaign or a single production?',
      action: { label: 'Visit Kriyon Media', href: 'https://www.kriyonmedia.com' },
    };
  }

  if (presence) {
    return {
      text: hinglish
        ? 'OneLink aapke business info aur customer actions—WhatsApp, bookings, payments, reviews aur QR—ko ek digital destination mein la sakta hai.'
        : 'OneLink can bring your business information and customer actions—such as WhatsApp, bookings, payments, reviews and QR access—into one digital destination.',
      action: { label: 'Visit OneLink', href: 'https://www.onelink.cards' },
    };
  }

  if (value.includes('venture') || value.includes('team')) {
    return {
      text: hinglish ? 'Aapko pehle venture choose karne ki zarurat nahi. Bas batayein: brand/tech, creative production, ya customer actions?' : 'You don’t need to choose a venture first. Is your need mainly brand and technology, creative production, or customer action?',
      action: { label: 'Explore capabilities', href: '#expertise' },
    };
  }

  if (hasAny('price', 'cost', 'budget', 'timeline', 'how long')) {
    return {
      text: hinglish ? 'Pricing aur timeline scope par depend karte hain. Apni requirement short mein share karein, team relevant next step confirm karegi.' : 'Pricing and timelines depend on the scope. Share a short requirement and the team will confirm the right next step.',
      action: { label: 'Start a project', href: '/contact' },
    };
  }

  if (value.includes('project') || value.includes('start')) {
    return {
      text: hinglish ? 'Bilkul. Contact page par apni basic details aur requirement share karein, ya +91 96221 21100 par WhatsApp karein.' : 'Share your basic details and requirement on the Contact page, or WhatsApp the team at +91 96221 21100.',
      action: { label: 'Open contact page', href: '/contact' },
    };
  }

  return {
    text: hinglish ? 'Aap kya build, improve ya launch karna chahte hain? Ek line mein batayein, main sahi team suggest kar dunga.' : 'What are you looking to build, improve or launch? Tell me in one line and I’ll suggest the right team.',
  };
};

function KrioOrb({ compact = false }) {
  return (
    <motion.div
      className={`relative ${compact ? 'h-[40px] w-[40px]' : 'h-[86px] w-[86px]'} shrink-0`}
      animate={{ y: [0, compact ? -1.2 : -5, 0], rotate: [-0.2, 0.2, -0.2] }}
      transition={{ duration: compact ? 5.8 : 6.8, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-[13%] rounded-full bg-[conic-gradient(from_35deg,#41DDEB,#4777FF,#9367E8,#E77BC7,#82CD5C,#41DDEB)] blur-[13px]"
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [0.94, 1.06, 0.94], rotate: [0, 150, 300] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute inset-[6%] rounded-full bg-[conic-gradient(from_20deg,#BDFBFF_0deg,#52D8EA_48deg,#5275FF_105deg,#A96BEA_165deg,#F08AC9_220deg,#EBCBFF_260deg,#8FD95E_310deg,#BDFBFF_360deg)] shadow-[0_0_18px_rgba(110,132,255,0.2)]"
        animate={{ rotate: [0, 120, 240, 360], opacity: [0.76, 0.96, 0.78] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute inset-[10%] overflow-hidden rounded-full bg-[radial-gradient(circle_at_34%_25%,rgba(255,255,255,0.34),transparent_24%),radial-gradient(circle_at_55%_58%,#0A1834_0%,#070918_58%,#02030A_100%)] shadow-[inset_-8px_-10px_18px_rgba(0,0,0,0.5),inset_7px_8px_18px_rgba(126,215,255,0.2),0_10px_25px_rgba(65,79,255,0.2)]"
        animate={{ scale: [0.985, 1.015, 0.985] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          className="absolute -inset-[35%] rounded-[44%] bg-[conic-gradient(from_10deg,rgba(0,220,255,0.02),rgba(0,194,255,0.72),rgba(92,66,255,0.5),rgba(243,74,198,0.62),rgba(0,220,255,0.02))] blur-[5px] mix-blend-screen"
          animate={{ rotate: [0, 180, 360], scale: [0.88, 1.08, 0.88] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: 'linear' }}
        />

        <motion.div
          className="absolute left-[-28%] top-[29%] h-[30%] w-[156%] rounded-[48%] bg-[linear-gradient(90deg,transparent_3%,rgba(16,224,244,0.9)_27%,rgba(75,126,255,0.9)_48%,rgba(171,81,247,0.84)_70%,transparent_96%)] blur-[2px] mix-blend-screen"
          animate={{ rotate: [-19, 14, -19], x: ['-5%', '7%', '-5%'], y: ['7%', '-7%', '7%'], scaleY: [0.72, 1.15, 0.72] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute left-[-30%] top-[44%] h-[25%] w-[160%] rounded-[50%] bg-[linear-gradient(90deg,transparent_4%,rgba(255,72,198,0.78)_26%,rgba(124,88,255,0.9)_50%,rgba(30,220,255,0.78)_74%,transparent_96%)] blur-[2.5px] mix-blend-screen"
          animate={{ rotate: [18, -15, 18], x: ['6%', '-8%', '6%'], y: ['-5%', '8%', '-5%'], scaleY: [1.08, 0.68, 1.08] }}
          transition={{ duration: 7.6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute left-[-18%] top-[38%] h-[18%] w-[138%] rounded-[50%] bg-[linear-gradient(90deg,transparent_5%,rgba(136,234,21,0.08)_30%,rgba(136,234,21,0.54)_50%,rgba(42,224,255,0.32)_69%,transparent_95%)] blur-[2px] mix-blend-screen"
          animate={{ rotate: [-7, 9, -7], x: ['-4%', '5%', '-4%'], opacity: [0.34, 0.66, 0.34] }}
          transition={{ duration: 8.2, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.34)_0%,rgba(102,162,255,0.2)_26%,transparent_68%)] blur-[4px] mix-blend-screen"
          animate={{ scale: [0.74, 1.12, 0.74], opacity: [0.32, 0.72, 0.32] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_28%_19%,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.18)_10%,transparent_26%),radial-gradient(circle_at_72%_82%,rgba(20,205,255,0.18),transparent_30%)]" />
        <div className="absolute inset-[1px] rounded-full shadow-[inset_0_0_12px_rgba(255,255,255,0.12)]" />
      </motion.div>
    </motion.div>
  );
}

export default function KrioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedRequirement, setSelectedRequirement] = useState('other');
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      text: 'Hi, I’m KRIO.\nWhat are you looking to work on?',
    },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

  const sendMessage = (message) => {
    const clean = message.trim();
    if (!clean || isTyping) return;

    const lower = clean.toLowerCase();
    if (lower.includes('website') || lower.includes('web app') || lower.includes('e-commerce')) setSelectedRequirement('website');
    else if (lower.includes('campaign') || lower.includes('launch')) setSelectedRequirement('campaign');
    else if (lower.includes('content') || lower.includes('reel') || lower.includes('photo') || lower.includes('cgi')) setSelectedRequirement('content');
    else if (lower.includes('brand') || lower.includes('identity')) setSelectedRequirement('branding');
    else if (lower.includes('onelink') || lower.includes('booking') || lower.includes('payment') || lower.includes('qr')) setSelectedRequirement('onelink');

    setMessages((current) => [...current, { id: Date.now(), role: 'user', text: clean }]);
    setInput('');
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((current) => [...current, { id: Date.now() + 1, role: 'assistant', ...getReply(clean) }]);
      setIsTyping(false);
    }, 950);
  };

  const chooseRequirement = (requirementId, label) => {
    if (isTyping) return;
    const flow = FLOWS[requirementId];
    setSelectedRequirement(requirementId);
    setMessages((current) => [...current, { id: Date.now(), role: 'user', text: label }]);
    setIsTyping(true);
    window.setTimeout(() => {
      setMessages((current) => [...current, {
        id: Date.now() + 1,
        role: 'assistant',
        text: flow.question,
        options: flow.options,
        requirementId,
      }]);
      setIsTyping(false);
    }, 720);
  };

  const chooseOption = (option, requirementId) => {
    if (isTyping) return;
    const flow = FLOWS[requirementId] || FLOWS.other;
    setMessages((current) => [...current, { id: Date.now(), role: 'user', text: option }]);
    setIsTyping(true);
    window.setTimeout(() => {
      setMessages((current) => [...current, {
        id: Date.now() + 1,
        role: 'assistant',
        text: `${flow.venture} is the right team for this. Share a short brief and we’ll take it forward.`,
        actions: [
          { label: 'Continue on WhatsApp', href: `https://wa.me/919622121100?text=${encodeURIComponent(flow.whatsapp)}` },
          { label: 'Start a Project', href: '/contact' },
        ],
      }]);
      setIsTyping(false);
    }, 800);
  };

  const whatsappHref = `https://wa.me/919622121100?text=${encodeURIComponent((FLOWS[selectedRequirement] || FLOWS.other).whatsapp)}`;

  const followAction = (href) => {
    if (href.startsWith('#')) {
      setIsOpen(false);
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (href.startsWith('/')) {
      window.location.assign(href);
      return;
    }
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-2.5 right-2.5 z-[120] sm:bottom-5 sm:right-5">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, y: 24, scale: 0.28, borderRadius: '999px', clipPath: 'circle(42px at calc(100% - 36px) calc(100% - 36px))' }}
            animate={{ opacity: 1, y: 0, scale: 1, borderRadius: '26px', clipPath: 'circle(150% at calc(100% - 36px) calc(100% - 36px))' }}
            exit={{ opacity: 0, y: 18, scale: 0.32, borderRadius: '999px', clipPath: 'circle(38px at calc(100% - 36px) calc(100% - 36px))' }}
            transition={{ duration: 0.54, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'bottom right' }}
            className="absolute bottom-0 right-0 flex h-[min(640px,calc(100vh-20px))] w-[min(410px,calc(100vw-20px))] flex-col overflow-hidden bg-white/96 shadow-[0_30px_100px_rgba(0,0,0,0.2),0_2px_10px_rgba(0,0,0,0.04)] backdrop-blur-3xl sm:bottom-[86px]"
            aria-label="Krio assistant"
          >
            <header className="relative overflow-hidden bg-white/88 px-5 py-4 text-[#111111] backdrop-blur-2xl">
              <motion.div
                className="absolute -right-24 -top-32 h-60 w-60 rounded-full bg-[conic-gradient(#7DDFFF,#8B5CF6,#FF91D8,#7DDFFF)] opacity-[0.1] blur-3xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />
              <div className="relative flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <KrioOrb compact />
                  <div>
                    <h2 className="text-[19px] font-semibold tracking-[-0.04em]">KRIO</h2>
                    <p className="mt-px text-[10px] font-medium text-black/36">Kriyon, made simple.</p>
                  </div>
                </div>
                <button type="button" onClick={() => setIsOpen(false)} aria-label="Close Krio" className="group flex h-8 w-8 items-center justify-center rounded-full text-black/38 transition-all duration-300 hover:rotate-90 hover:bg-black/[0.045] hover:text-black/70">
                  <X className="h-[15px] w-[15px] stroke-[1.7]" />
                </button>
              </div>
            </header>

            <div ref={scrollRef} className="relative min-h-0 flex-1 overflow-y-auto bg-[linear-gradient(180deg,#F8F8F8_0%,#FFFFFF_58%,#F7F8F5_100%)] px-5 py-5 [scrollbar-width:none]">
              <motion.div
                className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-black/[0.035] blur-[62px]"
                animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [0.9, 1.08, 0.9] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="pointer-events-none absolute -right-28 top-12 h-72 w-72 rounded-full bg-[#88EA15]/[0.075] blur-[68px]"
                animate={{ x: [0, -26, 0], y: [0, 34, 0], scale: [1.04, 0.9, 1.04] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-black/[0.025] blur-[70px]"
                animate={{ x: [-22, 24, -22], opacity: [0.4, 0.75, 0.4] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="relative z-[1] mb-4 flex items-center gap-3 px-0.5 text-[15px] font-semibold tracking-[-0.03em] text-black">
                <span className="flex h-10 w-11 items-center justify-center overflow-hidden rounded-[12px] bg-black shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
                  <PixelatedIcon className="h-[10px] w-[20px]" color="#FFFFFF" isHovered />
                </span>
                Ask KRIO
              </div>

              <div className="relative z-[1] space-y-3">
                {messages.map((message) => (
                  <motion.div key={message.id} initial={{ opacity: 0, y: 10, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.46, ease: [0.16, 1, 0.3, 1] }} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[90%] rounded-[20px] px-4 py-3 leading-[1.5] ${message.role === 'user' ? 'rounded-br-[6px] bg-black text-[12.5px] text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)]' : message.id === 1 ? 'rounded-bl-[6px] bg-black text-[15px] font-medium tracking-[-0.025em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.13)]' : 'rounded-bl-[6px] bg-white text-[12.5px] text-[#25222B] shadow-[0_5px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.045]'}`}>
                      <p className="whitespace-pre-line">{message.text}</p>
                      {message.action && (
                        <button type="button" onClick={() => followAction(message.action.href)} className="mt-3 inline-flex items-center gap-1.5 border-b border-[#7759D7]/25 pb-0.5 text-[11px] font-bold text-[#6F52C7]">
                          {message.action.label}<ArrowUpRight className="h-3 w-3" />
                        </button>
                      )}
                      {message.options?.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {message.options.map((option) => (
                            <button key={option} type="button" onClick={() => chooseOption(option, message.requirementId)} className="rounded-full bg-[#F4F2F8] px-2.5 py-1.5 text-[9.5px] font-medium text-black/62 transition-all hover:bg-black hover:text-white">
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                      {message.actions?.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {message.actions.map((action) => (
                            <button key={action.label} type="button" onClick={() => followAction(action.href)} className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[9.5px] font-semibold transition-transform hover:-translate-y-0.5 ${action.label.includes('WhatsApp') ? 'bg-[#88EA15] text-black' : 'bg-black text-white'}`}>
                              {action.label}<ArrowUpRight className="h-2.5 w-2.5" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                    <div className="flex items-center gap-2 rounded-[16px] rounded-bl-[6px] bg-white px-3 py-2.5 shadow-sm ring-1 ring-black/[0.045]">
                      <AudioLines className="h-3.5 w-3.5 text-[#7555E8]" />
                      <span className="text-[10px] font-medium text-black/38">Krio is typing</span>
                      <span className="flex items-end gap-[2px]">
                        {[0, 1, 2].map((dot) => <motion.span key={dot} className="w-[2px] rounded-full bg-[#7555E8]/65" animate={{ height: [3, 10 - dot * 2, 3] }} transition={{ duration: 0.65, repeat: Infinity, delay: dot * 0.11, ease: 'easeInOut' }} />)}
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>

              {messages.length === 1 && (
                <div className="relative z-[1] mt-4 grid grid-cols-2 gap-2">
                  {QUICK_ACTIONS.map((action) => {
                    const Icon = action.icon;
                    return (
                      <button key={action.id} type="button" onClick={() => chooseRequirement(action.id, action.label)} className="group flex min-h-[54px] items-center gap-2.5 rounded-[15px] bg-white/82 px-3 py-2.5 text-left text-[10px] font-medium leading-tight text-black/65 shadow-[0_5px_18px_rgba(54,43,91,0.055)] ring-1 ring-black/[0.045] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white hover:shadow-md">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px] bg-black/[0.045] text-black/55 transition-colors group-hover:bg-white/12 group-hover:text-white">
                          <Icon className="h-3.5 w-3.5 stroke-[1.7]" />
                        </span>
                        {action.label}
                      </button>
                    );
                  })}
                </div>
              )}

            </div>

            <div className="bg-white/80 px-4 pb-1 pt-3 backdrop-blur-2xl">
              <button type="button" onClick={() => followAction(whatsappHref)} className="group flex h-12 w-full items-center rounded-[15px] bg-black p-1.5 text-white shadow-[0_10px_28px_rgba(0,0,0,0.14)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(0,0,0,0.18)]">
                <span className="flex h-9 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[#88EA15] text-black"><WhatsAppIcon className="h-[17px] w-[17px]" /></span>
                <span className="flex-1 px-3 text-left text-[12px] font-semibold tracking-[-0.02em]">Continue on WhatsApp</span>
                <span className="mr-1 flex h-8 w-9 items-center justify-center overflow-hidden rounded-[10px] bg-white"><PixelatedIcon className="h-[9px] w-[18px]" color="#111111" /></span>
              </button>
            </div>

            <form onSubmit={(event) => { event.preventDefault(); sendMessage(input); }} className="bg-white/80 p-4 pt-2 backdrop-blur-2xl">
              <motion.div
                className="flex items-center gap-2 rounded-[19px] bg-[linear-gradient(110deg,#F1F1F1,#FFFFFF,#EAF4E5,#F4F4F4)] p-1.5 pl-4 shadow-[0_9px_26px_rgba(0,0,0,0.075)] transition-all focus-within:shadow-[0_12px_32px_rgba(0,0,0,0.11)]"
                style={{ backgroundSize: '220% 220%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              >
                <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask Krio anything…" aria-label="Message Krio" className="min-w-0 flex-1 bg-transparent text-[13px] text-[#26222D] outline-none placeholder:text-[#665B80]/45" />
                <button type="submit" disabled={!input.trim() || isTyping} aria-label="Send message" className="flex h-12 w-[52px] shrink-0 items-center justify-center overflow-hidden rounded-[15px] bg-black text-white shadow-[0_7px_18px_rgba(0,0,0,0.15)] transition-all hover:scale-[1.025] disabled:cursor-not-allowed disabled:opacity-20">
                  <PixelatedIcon className="h-[11px] w-[22px]" color="#FFFFFF" isHovered={Boolean(input.trim())} />
                </button>
              </motion.div>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-end gap-2.5">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3, rotate: 20 }}
              whileHover={{ scale: 1.1, rotate: -2, y: -4 }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open Krio assistant"
              className="relative rounded-full"
            >
              <motion.span
                className="absolute -top-8 right-1 whitespace-nowrap rounded-full bg-white/88 px-3 py-1.5 text-[10px] font-medium tracking-[-0.01em] text-black/65 shadow-[0_7px_20px_rgba(0,0,0,0.09)] backdrop-blur-xl"
                animate={{ y: [0, -2, 0], opacity: [0.78, 1, 0.78] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                How can I help?
              </motion.span>
              <KrioOrb />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
