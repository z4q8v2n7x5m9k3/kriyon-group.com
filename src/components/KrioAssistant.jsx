import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Send, Sparkles, X } from 'lucide-react';
import PixelatedIcon from './PixelatedIcon';

const QUICK_PROMPTS = [
  'What does Kriyon do?',
  'Which venture do I need?',
  'Start a project',
];

const getReply = (input) => {
  const value = input.toLowerCase();

  if (value.includes('venture') || value.includes('team')) {
    return {
      text: "You don’t need to choose first. Tell us the outcome—brand, product, campaign or customer action—and Kriyon brings the right specialist team together.",
      action: { label: 'Explore capabilities', href: '#expertise' },
    };
  }

  if (value.includes('project') || value.includes('start') || value.includes('contact') || value.includes('price')) {
    return {
      text: 'Perfect. Share your name, phone and email and a Kriyon lead will reply within one working day.',
      action: { label: 'Start on WhatsApp', href: 'https://wa.me/919622121100?text=Hi%20Kriyon%2C%20I%20would%20like%20to%20start%20a%20project.' },
    };
  }

  if (value.includes('what') || value.includes('do') || value.includes('service')) {
    return {
      text: 'Kriyon connects brand and technology, creative production and digital presence through three specialist ventures: RepixelX AI Studio, Kriyon Media and OneLink Cards.',
      action: { label: 'See all capabilities', href: '#expertise' },
    };
  }

  if (value.includes('hello') || value.includes('hi') || value.includes('hey')) {
    return { text: 'Hey. I’m Krio—your quick route into Kriyon. What are you looking to build, create or connect?' };
  }

  return {
    text: 'That sounds like something the Kriyon team can help shape. Start with the outcome and we’ll connect you with the right capability.',
    action: { label: 'Talk to Kriyon', href: 'https://wa.me/919622121100?text=Hi%20Kriyon%2C%20I%20have%20a%20project%20to%20discuss.' },
  };
};

function KrioOrb({ compact = false }) {
  return (
    <div className={`relative ${compact ? 'h-9 w-9' : 'h-[62px] w-[62px]'} shrink-0`} aria-hidden="true">
      <motion.div
        className="absolute inset-0 rounded-full bg-black shadow-[0_12px_35px_rgba(0,0,0,0.24)]"
        animate={{ scale: [1, 1.035, 1] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-[3px] overflow-hidden rounded-full border border-white/15 bg-[#050505]">
        <motion.div
          className="absolute -inset-[45%] rounded-[42%] bg-[conic-gradient(from_0deg,#7CFF4F,#00D6FF,#7A5CFF,#FF4FD8,#7CFF4F)] opacity-80 blur-[10px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-[7px] rounded-full bg-black/90 backdrop-blur-xl" />
        <div className="absolute inset-0 flex items-center justify-center gap-[3px]">
          {[0.55, 1, 0.72, 0.92, 0.5].map((height, index) => (
            <motion.span
              key={index}
              className={`${compact ? 'w-[2px]' : 'w-[3px]'} rounded-full bg-white`}
              animate={{ height: [`${height * 9}px`, `${height * (compact ? 18 : 26)}px`, `${height * 9}px`] }}
              transition={{ duration: 0.85 + index * 0.08, repeat: Infinity, delay: index * 0.08, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function KrioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      text: 'Hi, I’m Krio. Tell me what you want to build, create or connect—and I’ll point you in the right direction.',
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

    setMessages((current) => [...current, { id: Date.now(), role: 'user', text: clean }]);
    setInput('');
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((current) => [...current, { id: Date.now() + 1, role: 'assistant', ...getReply(clean) }]);
      setIsTyping(false);
    }, 520);
  };

  const followAction = (href) => {
    if (href.startsWith('#')) {
      setIsOpen(false);
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-3 right-3 z-[120] sm:bottom-5 sm:right-5">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[74px] right-0 flex h-[min(610px,calc(100vh-110px))] w-[min(390px,calc(100vw-24px))] flex-col overflow-hidden rounded-[26px] border border-white/15 bg-[#0A0A0B] shadow-[0_28px_90px_rgba(0,0,0,0.34)] sm:rounded-[30px]"
            aria-label="Krio assistant"
          >
            <header className="relative overflow-hidden border-b border-white/10 px-4 pb-4 pt-4 text-white sm:px-5 sm:pt-5">
              <motion.div
                className="absolute -right-20 -top-28 h-56 w-56 rounded-full bg-[conic-gradient(#7CFF4F,#00D6FF,#7A5CFF,#FF4FD8,#7CFF4F)] opacity-25 blur-3xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />
              <div className="relative flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <KrioOrb compact />
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-[18px] font-semibold tracking-[-0.03em]">Krio</h2>
                      <span className="rounded-full border border-[#88EA15]/30 bg-[#88EA15]/10 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.15em] text-[#A8FF45]">Online</span>
                    </div>
                    <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white/45">Kriyon’s digital guide</p>
                  </div>
                </div>
                <button type="button" onClick={() => setIsOpen(false)} aria-label="Close Krio" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition-colors hover:bg-white hover:text-black">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </header>

            <div ref={scrollRef} className="flex-1 overflow-y-auto bg-[#F2F2F4] px-3.5 py-4 [scrollbar-width:none] sm:px-4">
              <div className="mb-4 flex items-center gap-2 px-1 text-[9px] font-bold uppercase tracking-[0.16em] text-black/38">
                <Sparkles className="h-3 w-3" /> Ask about Kriyon
              </div>

              <div className="space-y-3">
                {messages.map((message) => (
                  <motion.div key={message.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[86%] rounded-[18px] px-4 py-3 text-[13px] leading-[1.48] ${message.role === 'user' ? 'rounded-br-[6px] bg-black text-white' : 'rounded-bl-[6px] border border-black/[0.06] bg-white text-[#222] shadow-[0_5px_18px_rgba(0,0,0,0.045)]'}`}>
                      <p>{message.text}</p>
                      {message.action && (
                        <button type="button" onClick={() => followAction(message.action.href)} className="mt-3 inline-flex items-center gap-1.5 border-b border-black/20 pb-0.5 text-[11px] font-bold text-black">
                          {message.action.label}<ArrowUpRight className="h-3 w-3" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                    <div className="flex items-center gap-1 rounded-[16px] rounded-bl-[6px] border border-black/[0.06] bg-white px-4 py-3 shadow-sm">
                      {[0, 1, 2].map((dot) => <motion.span key={dot} className="h-1.5 w-1.5 rounded-full bg-black/45" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.7, repeat: Infinity, delay: dot * 0.12 }} />)}
                    </div>
                  </motion.div>
                )}
              </div>

              {messages.length === 1 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {QUICK_PROMPTS.map((prompt) => (
                    <button key={prompt} type="button" onClick={() => sendMessage(prompt)} className="rounded-full border border-black/[0.09] bg-white px-3 py-2 text-[10.5px] font-semibold text-black/75 shadow-sm transition-transform hover:-translate-y-0.5 hover:text-black">
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={(event) => { event.preventDefault(); sendMessage(input); }} className="border-t border-white/10 bg-[#0A0A0B] p-3 sm:p-3.5">
              <div className="flex items-center gap-2 rounded-[17px] border border-white/12 bg-white/[0.07] p-1.5 pl-4 focus-within:border-white/30">
                <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask Krio anything…" aria-label="Message Krio" className="min-w-0 flex-1 bg-transparent text-[13px] text-white outline-none placeholder:text-white/35" />
                <button type="submit" disabled={!input.trim() || isTyping} aria-label="Send message" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-white text-black transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-35">
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-center text-[8px] uppercase tracking-[0.12em] text-white/28">Fast guidance · Real team for project conversations</p>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-end gap-2.5">
        <AnimatePresence>
          {!isOpen && (
            <motion.button initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 8 }} type="button" onClick={() => setIsOpen(true)} className="hidden items-center gap-2 rounded-full border border-black/10 bg-white/90 px-4 py-3 text-[11px] font-bold text-black shadow-[0_10px_35px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:inline-flex">
              <MessageCircle className="h-3.5 w-3.5" /> Ask Krio
            </motion.button>
          )}
        </AnimatePresence>
        <button type="button" onClick={() => setIsOpen((current) => !current)} aria-label={isOpen ? 'Close Krio assistant' : 'Open Krio assistant'} className="relative rounded-full transition-transform hover:scale-[1.04] active:scale-95">
          <KrioOrb />
          {!isOpen && <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-[#88EA15]" />}
        </button>
      </div>
    </div>
  );
}
