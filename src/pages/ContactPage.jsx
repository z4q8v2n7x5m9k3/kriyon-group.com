import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Mail,
  Phone,
} from 'lucide-react';
import PixelatedIcon from '../components/PixelatedIcon';

const PROCESS = [
  {
    number: '01',
    title: 'You share the ambition',
    copy: 'A short brief is enough. Tell us what you are building, changing, or trying to grow.',
  },
  {
    number: '02',
    title: 'We assemble the right team',
    copy: 'Strategy, design, technology and production come together around the requirement.',
  },
  {
    number: '03',
    title: 'One plan. One owner.',
    copy: 'You receive a clear scope, timeline and a single Kriyon lead accountable for delivery.',
  },
];

const FAQS = [
  {
    q: 'Do I need to choose a Kriyon venture first?',
    a: 'No. Start with the business problem. We will shape the right mix of RepixelX AI Studio, Kriyon Media and OneLink Cards around it.',
  },
  {
    q: 'Can one project use multiple specialist teams?',
    a: 'Yes. That is the point of the group model: brand, product, technology and content can work as one connected delivery team.',
  },
  {
    q: 'What happens after I send the brief?',
    a: 'A Kriyon lead reviews it, contacts you within one working day and shares the recommended next step. Larger scopes begin with a discovery call.',
  },
  {
    q: 'Where does Kriyon work?',
    a: 'Our registered office is in Jammu, J&K, and our distributed specialists collaborate with businesses across India and beyond.',
  },
];

const ease = [0.16, 1, 0.3, 1];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.7, delay, ease },
});

function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.558 4.127 1.534 5.862L0 24l6.31-1.524A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.368l-.359-.214-3.747.905.952-3.664-.232-.375A9.818 9.818 0 1 1 12 21.818z" />
    </svg>
  );
}

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    document.title = 'Contact Kriyon Group | Start a Project';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Get in touch with Kriyon Group Private Limited. Start a project across brand, technology, creative production and digital presence.");
    }
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.kriyongroup.com/contact');
    }

    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      document.title = 'Kriyon Group Private Limited | Creative Technology Group';
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Kriyon Group Private Limited is an India-based creative technology group bringing together RepixelX, Kriyon Media and OneLink across brand, technology, creative production and digital presence.');
      }
      if (canonical) {
        canonical.setAttribute('href', 'https://www.kriyongroup.com/');
      }
    };
  }, []);

  const updateField = (field) => (event) => {
    setFormData((current) => ({ ...current, [field]: event.target.value }));
  };

  const whatsappMessage = () => [
    '*NEW PROJECT — KRIYON GROUP*',
    `*Name:* ${formData.name}`,
    `*Email:* ${formData.email}`,
    `*Phone:* ${formData.phone}`,
    '',
    '_Sent via the Kriyon Group website_',
  ].filter((line) => line !== null).join('\n');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setSubmitted(true);
    window.open(
      `https://wa.me/919622121100?text=${encodeURIComponent(whatsappMessage())}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#EBEBED] text-[#0A0A0A] font-sans selection:bg-black selection:text-white">
      <section className="relative px-4 pb-10 pt-28 sm:px-8 sm:pb-14 sm:pt-36 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-[1460px]">
          <motion.div {...reveal(0)} className="mb-7 inline-flex items-center gap-2.5">
            <PixelatedIcon className="h-[10.5px] w-[20px]" color="#111111" />
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] sm:text-[12px]">04 // START A CONVERSATION</span>
          </motion.div>

          <div className="grid items-end gap-6 lg:grid-cols-[1.35fr_0.75fr]">
            <motion.h1 {...reveal(0.04)} className="max-w-[820px] text-[42px] font-medium leading-[1.02] tracking-[-0.045em] sm:text-[56px] md:text-[64px] lg:text-[72px]">
              Start with <span className="text-black/30">Kriyon.</span>
            </motion.h1>
            <motion.div {...reveal(0.1)} className="max-w-[420px] pb-2 lg:justify-self-end">
              <p className="text-[14px] leading-[1.65] text-black/55 sm:text-[15.5px]">Share the ambition, challenge or opportunity. We’ll bring the right people, technology and creative capability together.</p>
              <div className="mt-5 flex items-center gap-2.5 text-[12px] font-medium text-black/55">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#88EA15] opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#70D800]" />
                </span>
                Usually replies within one working day
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-16 sm:px-8 sm:pb-[88px] lg:px-12">
        <div className="mx-auto grid max-w-[1460px] gap-4 lg:grid-cols-[0.72fr_1.28fr] lg:gap-5">
          <motion.aside {...reveal(0.04)} className="relative overflow-hidden rounded-[28px] bg-[#101010] p-7 text-white shadow-[0_24px_70px_rgba(0,0,0,0.14)] sm:p-9 lg:min-h-[625px]">
            <img src="/assets/kriyon-og.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-black/[0.62]" aria-hidden="true" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-[14px] border border-white/15 bg-black/30 backdrop-blur-xl">
                    <PixelatedIcon className="h-[10px] w-[20px]" color="#FFFFFF" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white/60 backdrop-blur-xl">Open for business</span>
                </div>
                <h2 className="max-w-[390px] text-[31px] font-medium leading-[1.06] tracking-[-0.04em] sm:text-[40px]">One conversation. The right capability.</h2>
                <p className="mt-5 max-w-[370px] text-[14px] leading-[1.7] text-white/[0.66]">You don’t need to know the solution or which venture to choose. Tell us the outcome you want and we’ll make the path clear.</p>
              </div>

              <div className="mt-12 space-y-2.5">
                {[
                  { icon: Mail, label: 'Email us', value: 'kriyon@repixelx.tech', href: 'mailto:kriyon@repixelx.tech' },
                  { icon: Phone, label: 'Call us', value: '+91 96221 21100', href: 'tel:+919622121100' },
                ].map(({ icon: Icon, label, value, href }) => {
                  const Component = href ? 'a' : 'div';
                  return (
                    <Component key={label} href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined} className="group flex items-center gap-3 rounded-[17px] border border-white/[0.08] bg-white/[0.055] p-3.5 backdrop-blur-xl transition-colors hover:bg-white/[0.09]">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-white text-black"><Icon className="h-4 w-4" /></span>
                      <span className="min-w-0">
                        <span className="block text-[10px] uppercase tracking-[0.14em] text-white/[0.45]">{label}</span>
                        <span className="mt-0.5 block truncate text-[13px] font-medium text-white/85 sm:text-[14px]">{value}</span>
                      </span>
                      {href && <ArrowUpRight className="ml-auto h-4 w-4 text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70" />}
                    </Component>
                  );
                })}
                <a href="https://wa.me/919622121100" target="_blank" rel="noopener noreferrer" className="group flex h-[52px] items-center justify-between rounded-[16px] bg-white p-1.5 text-black transition-transform active:scale-[0.99]">
                  <span className="flex h-10 w-11 items-center justify-center rounded-[12px] bg-[#111111] text-white"><WhatsAppIcon className="h-4 w-4" /></span>
                  <span className="text-[13px] font-semibold">Chat on WhatsApp</span>
                  <span className="w-8" />
                </a>
              </div>
            </div>
          </motion.aside>

          <motion.div {...reveal(0.1)} className="rounded-[28px] border border-white/80 bg-white/[0.78] p-5 shadow-[0_20px_60px_rgba(22,22,22,0.06),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-2xl sm:p-8 lg:p-9">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="sent" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex min-h-[620px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white"><Check className="h-7 w-7 stroke-[2.5]" /></div>
                  <h2 className="mt-7 text-[32px] font-medium tracking-[-0.04em]">Your details are ready.</h2>
                  <p className="mt-3 max-w-[360px] text-[14px] leading-relaxed text-black/50">WhatsApp should be opening with your contact details. If it didn’t, use the button below.</p>
                  <a href={`https://wa.me/919622121100?text=${encodeURIComponent(whatsappMessage())}`} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex h-12 items-center gap-2 rounded-[16px] bg-black px-6 text-[13px] font-medium text-white">
                    <WhatsAppIcon className="h-4 w-4" /> Open WhatsApp
                  </a>
                  <button type="button" onClick={() => setSubmitted(false)} className="mt-4 text-[12px] text-black/40 underline-offset-4 hover:text-black hover:underline">Edit the brief</button>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit}>
                  <div className="mb-7 flex items-start justify-between gap-6">
                    <div>
                      <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/45">Quick contact</span>
                      <h2 className="mt-2 text-[25px] font-medium tracking-[-0.035em] sm:text-[32px]">Leave the basics. We’ll call.</h2>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-[11px] font-medium text-black/45">Your name *</span>
                      <input required value={formData.name} onChange={updateField('name')} placeholder="Name" className="h-12 w-full rounded-[14px] border border-black/[0.06] bg-white/[0.88] px-4 text-[14px] outline-none transition focus:border-black/25 focus:bg-white focus:ring-4 focus:ring-black/[0.035]" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-[11px] font-medium text-black/45">Work email *</span>
                      <input required type="email" value={formData.email} onChange={updateField('email')} placeholder="you@company.com" className="h-12 w-full rounded-[14px] border border-black/[0.06] bg-white/[0.88] px-4 text-[14px] outline-none transition focus:border-black/25 focus:bg-white focus:ring-4 focus:ring-black/[0.035]" />
                    </label>
                  </div>

                  <label className="mt-5 block">
                    <span className="mb-2 block text-[11px] font-medium text-black/45">Phone / WhatsApp *</span>
                    <input required type="tel" inputMode="tel" value={formData.phone} onChange={updateField('phone')} placeholder="+91 00000 00000" className="h-12 w-full rounded-[14px] border border-black/[0.06] bg-white/[0.88] px-4 text-[14px] outline-none transition focus:border-black/25 focus:bg-white focus:ring-4 focus:ring-black/[0.035]" />
                  </label>

                  <button type="submit" className="group mt-6 flex h-[56px] w-full items-center justify-between rounded-[17px] bg-black p-2 text-white shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(0,0,0,0.2)] active:translate-y-0">
                    <span className="flex h-10 w-11 items-center justify-center overflow-hidden rounded-[12px] bg-white text-black"><PixelatedIcon className="h-[10px] w-[20px]" color="#111111" /></span>
                    <span className="inline-flex items-center gap-2 text-[13.5px] font-medium"><WhatsAppIcon className="h-4 w-4" /> Send contact details</span>
                    <span className="w-8" />
                  </button>
                  <p className="mt-3 text-center text-[10.5px] text-black/30">Your brief opens privately in WhatsApp. No spam, ever.</p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[#EBEBED] px-4 py-16 sm:px-8 sm:py-[88px] lg:px-12">
        <div className="mx-auto max-w-[1460px]">
          <motion.div {...reveal(0)} className="grid gap-8 border-b border-black/[0.08] pb-12 lg:grid-cols-2 lg:items-end">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">What happens next</span>
              <h2 className="mt-5 max-w-[720px] text-[34px] font-medium leading-[1.06] tracking-[-0.04em] sm:text-[44px] lg:text-[48px]">Clear from the first conversation.</h2>
            </div>
            <p className="max-w-[460px] text-[15px] leading-[1.7] text-black/50 lg:justify-self-end">The people who shape the idea stay close to the people who design, build and produce it. Less handoff. More momentum.</p>
          </motion.div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {PROCESS.map((item, index) => (
              <motion.article key={item.number} {...reveal(index * 0.08)} className="group min-h-[220px] rounded-[24px] border border-white/80 bg-white/[0.68] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.035)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium tracking-[0.16em] text-black/30">{item.number}</span>
                  <span className="h-2 w-2 rounded-full bg-[#88EA15] shadow-[0_0_0_6px_rgba(136,234,21,0.12)]" />
                </div>
                <div className="mt-14 sm:mt-16">
                  <h3 className="text-[22px] font-medium tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-3 max-w-[350px] text-[13.5px] leading-[1.65] text-black/47">{item.copy}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-[88px] lg:px-12">
        <div className="mx-auto grid max-w-[1460px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <motion.div {...reveal(0)}>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">A few useful answers</span>
            <h2 className="mt-5 text-[38px] font-medium leading-[1.04] tracking-[-0.045em] sm:text-[54px]">Before we begin.</h2>
            <p className="mt-4 max-w-[350px] text-[14px] leading-[1.7] text-black/45">Still wondering about something? Message us and a real person will respond.</p>
          </motion.div>

          <motion.div {...reveal(0.08)} className="overflow-hidden rounded-[26px] border border-white/80 bg-white/60 px-5 backdrop-blur-xl sm:px-7">
            {FAQS.map((faq, index) => {
              const open = activeFaq === index;
              return (
                <div key={faq.q} className="border-b border-black/[0.065] last:border-b-0">
                  <button type="button" onClick={() => setActiveFaq(open ? null : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6">
                    <span className="text-[14px] font-medium text-black/80 sm:text-[15px]">{faq.q}</span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${open ? 'rotate-180 bg-black text-white' : 'bg-white text-black/45'}`}><ChevronDown className="h-4 w-4" /></span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease }} className="overflow-hidden">
                        <p className="max-w-[760px] pb-6 pr-10 text-[13.5px] leading-[1.7] text-black/48">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
