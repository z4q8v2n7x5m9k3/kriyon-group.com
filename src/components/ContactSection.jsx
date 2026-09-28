import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Mail, Phone } from 'lucide-react';
import PixelatedIcon from './PixelatedIcon';
import PixelText from './PixelText';

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.558 4.127 1.534 5.862L0 24l6.31-1.524A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.368l-.359-.214-3.747.905.952-3.664-.232-.375A9.818 9.818 0 1 1 12 21.818z" />
    </svg>
  );
}

export default function ContactSection({ onNavigateToFullContact }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const message = () => `*NEW INQUIRY — KRIYON GROUP*\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n\n_via kriyongroup.com_`;

  const submit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setSubmitted(true);
    window.open(`https://wa.me/919622121100?text=${encodeURIComponent(message())}`, '_blank', 'noopener,noreferrer');
  };

  const reveal = {
    initial: { opacity: 0, y: 16, scale: 0.99 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: '-70px' },
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white px-4 py-14 text-[#0A0A0A] sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div id="start-a-project" className="pointer-events-none absolute -top-12 left-0" />
      <div className="relative z-10 mx-auto w-full max-w-[1460px]">
        <motion.div {...reveal} className="mb-10 sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2.5">
            <PixelatedIcon className="h-[10.5px] w-[20px]" color="#111111" />
            <span className="text-[12px] font-medium uppercase tracking-[0.18em] sm:text-[13px]">
              <PixelText text="04 // START A CONVERSATION" delay={0.06} />
            </span>
          </div>
          <div className="flex flex-col mb-2">
            <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[42px] lg:text-[48px]">
              <PixelText text="Start a conversation." delay={0.1} speed={36} /><br />
              <span className="text-black/30">
                <PixelText text="We’ll take it from there." delay={0.28} speed={36} />
              </span>
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] xl:text-[16px] leading-[1.55] text-black/50 mt-3 font-sans w-full max-w-none whitespace-normal lg:whitespace-nowrap">
              Share your details. A Kriyon lead will connect within one working day and guide you to the right team.
            </p>
          </div>
        </motion.div>

        <motion.div {...reveal} className="relative isolate overflow-hidden rounded-[28px] border border-black/[0.06] bg-[#111111] p-3 shadow-[0_18px_55px_rgba(0,0,0,0.12)] sm:p-4 lg:min-h-[540px]">
          <img src="/assets/kriyon-og.png" alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 -z-10 bg-black/[0.56]" aria-hidden="true" />

          <div className="grid h-full gap-3 lg:grid-cols-12 lg:gap-4">
            <div className="flex min-h-[360px] flex-col justify-between p-5 text-white lg:col-span-5 lg:min-h-full lg:p-7">
              <div>
                <div className="mb-8 flex items-center justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-[14px] border border-white/15 bg-black/35 backdrop-blur-xl"><PixelatedIcon className="h-[10px] w-[20px]" color="#FFFFFF" /></span>
                  <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-white/65 backdrop-blur-lg">Replies within 24h</span>
                </div>
                <h3 className="max-w-[430px] text-[30px] font-medium leading-[1.05] tracking-[-0.04em] sm:text-[40px]">Start with the outcome, not the specification.</h3>
                <p className="mt-4 max-w-[390px] text-[13.5px] leading-[1.7] text-white/65">Tell us what needs to change. We’ll define the right path, team and next step.</p>
              </div>

              <div className="mt-10 space-y-2.5">
                {[
                  { icon: Mail, label: 'kriyon@repixelx.tech', href: 'mailto:kriyon@repixelx.tech' },
                  { icon: Phone, label: '+91 96221 21100', href: 'tel:+919622121100' },
                ].map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} className="group flex items-center gap-3 rounded-[15px] border border-white/[0.12] bg-black/25 p-3 backdrop-blur-lg transition-colors hover:bg-black/40">
                    <span className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-white text-black"><Icon className="h-4 w-4" /></span>
                    <span className="text-[13px] font-medium text-white/85">{label}</span>
                    <ArrowUpRight className="ml-auto h-4 w-4 text-white/[0.35] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  </a>
                ))}
                <button type="button" onClick={onNavigateToFullContact} className="group flex h-[50px] w-full items-center justify-between rounded-[16px] border border-white/20 bg-white p-1.5 text-black transition-transform active:scale-[0.99]">
                  <span className="flex h-[38px] w-[42px] items-center justify-center overflow-hidden rounded-[12px] bg-[#111111]"><PixelatedIcon className="h-[10px] w-[20px]" color="#FFFFFF" /></span>
                  <span className="text-[13px] font-semibold">View contact page</span>
                  <span className="w-8" />
                </button>
              </div>
            </div>

            <div className="rounded-[22px] border border-white bg-white/[0.94] p-5 backdrop-blur-2xl lg:col-span-7 sm:p-8">
              {submitted ? (
                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white"><Check className="h-6 w-6" /></span>
                  <h3 className="mt-5 text-[26px] font-medium tracking-[-0.03em]">Your brief is ready.</h3>
                  <p className="mt-2 max-w-[330px] text-[13px] leading-relaxed text-black/45">WhatsApp should be opening with your project brief.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-5 text-[12px] font-medium underline underline-offset-4">Edit brief</button>
                </div>
              ) : (
                <form onSubmit={submit} className="flex h-full flex-col">
                  <div className="mb-7">
                    <span className="text-[10px] font-medium uppercase tracking-[0.17em] text-black/35">A simple first step</span>
                    <h3 className="mt-2 text-[27px] font-medium tracking-[-0.035em] sm:text-[34px]">Let’s start with the basics.</h3>
                    <p className="mt-2 max-w-[500px] text-[12.5px] leading-relaxed text-black/50">No long form. Leave your details and we’ll continue the conversation personally.</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label><span className="mb-1.5 block text-[11px] text-black/40">Name *</span><input required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Your name" className="h-12 w-full rounded-[13px] border border-black/[0.06] bg-white px-4 text-[13.5px] outline-none transition focus:border-black/25 focus:ring-4 focus:ring-black/[0.035]" /></label>
                    <label><span className="mb-1.5 block text-[11px] text-black/40">Email *</span><input required type="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="you@company.com" className="h-12 w-full rounded-[13px] border border-black/[0.06] bg-white px-4 text-[13.5px] outline-none transition focus:border-black/25 focus:ring-4 focus:ring-black/[0.035]" /></label>
                  </div>

                  <label className="mt-4 block"><span className="mb-1.5 block text-[11px] text-black/40">Phone / WhatsApp *</span><input required type="tel" inputMode="tel" value={formData.phone} onChange={(event) => setFormData({ ...formData, phone: event.target.value })} placeholder="+91 00000 00000" className="h-12 w-full rounded-[13px] border border-black/[0.06] bg-white px-4 text-[13.5px] outline-none transition focus:border-black/25 focus:ring-4 focus:ring-black/[0.035]" /></label>

                  <button type="submit" className="group mt-auto flex h-[52px] w-full items-center justify-between rounded-[17px] bg-black p-1.5 text-white shadow-[0_8px_22px_rgba(0,0,0,0.14)] transition-transform active:scale-[0.99]">
                    <span className="flex h-10 w-11 items-center justify-center overflow-hidden rounded-[12px] bg-white text-black"><PixelatedIcon className="h-[10px] w-[20px]" color="#111111" /></span>
                    <span className="inline-flex items-center gap-2 text-[13px] font-medium"><WhatsAppIcon className="h-4 w-4" /> Send on WhatsApp</span>
                    <span className="w-8" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
