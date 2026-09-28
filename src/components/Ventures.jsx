import { ArrowRight, ArrowUpRight } from 'lucide-react';

const ventures = [
  {
    step: '01',
    name: 'REPIXELX',
    discipline: 'Brand × Technology',
    description: 'We build identities, websites, applications and digital products from strategy to launch.',
    actionText: 'Visit RepixelX',
    url: 'https://repixelx.com',
    displayUrl: 'repixelx.com',
  },
  {
    step: '02',
    name: 'KRIYON MEDIA',
    discipline: 'Creative × Production',
    description: 'We create campaigns, product imagery, films, fashion, CGI and visual content built to earn attention.',
    actionText: 'Visit Kriyon Media',
    url: 'https://kriyonmedia.com',
    displayUrl: 'kriyonmedia.com',
  },
  {
    step: '03',
    name: 'ONELINK',
    discipline: 'Presence × Action',
    description: 'One customised digital destination connecting everything your audience needs to see, reach, book, buy or explore.',
    actionText: 'Explore OneLink',
    url: 'https://onelink.cards',
    displayUrl: 'onelink.cards',
  },
];

export default function Ventures() {
  return (
    <section id="ventures" className="py-28 sm:py-36 bg-[#08090C] text-white relative overflow-hidden border-t border-white/10">
      {/* Ambient Grid Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#88EA15]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 pb-10 border-b border-white/10">
          <span className="text-[11px] uppercase tracking-[0.24em] font-mono text-[#88EA15] block mb-3 font-bold">
            02 · Specialist Ecosystem
          </span>
          <h2 className="font-sans font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-white leading-none">
            Specialised <br />
            <span className="text-[#88EA15]">By Design.</span>
          </h2>
          <p className="text-base sm:text-xl text-white/70 max-w-2xl mt-6 font-sans">
            Different disciplines deserve specialist thinking. Kriyon Group brings them together under one parent company.
          </p>
        </div>

        {/* 3 Horizontal Venture Showcase Rows */}
        <div className="divide-y divide-white/10">
          {ventures.map((venture) => (
            <div
              key={venture.step}
              className="py-12 sm:py-16 group relative transition-all duration-300 hover:bg-white/[0.03] px-4 sm:px-6 rounded-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start lg:items-center">
                {/* Step & Name */}
                <div className="lg:col-span-5 flex items-baseline space-x-6 sm:space-x-8">
                  <span className="font-mono text-sm sm:text-base font-bold text-[#88EA15]">
                    {venture.step}
                  </span>
                  <div>
                    <h3 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white group-hover:text-[#88EA15] transition-colors">
                      {venture.name}
                    </h3>
                    <p className="text-base sm:text-lg text-white/50 font-mono mt-1">
                      {venture.discipline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="lg:col-span-4">
                  <p className="text-base sm:text-lg text-white/80 leading-relaxed font-sans">
                    {venture.description}
                  </p>
                  <span className="font-mono text-xs text-[#88EA15]/80 mt-2 block tracking-wider">
                    {venture.displayUrl}
                  </span>
                </div>

                {/* External Action Button */}
                <div className="lg:col-span-3 flex lg:justify-end items-center">
                  <a
                    href={venture.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-bold text-white border border-white/20 rounded-full px-7 py-3.5 group-hover:border-[#88EA15] group-hover:bg-[#88EA15] group-hover:text-black transition-all duration-300 shadow-md"
                  >
                    <span>{venture.actionText}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-white/60">
          <span className="font-bold text-white">
            Three Specialist Ventures · One Kriyon Group Private Limited
          </span>
          <span className="text-[#88EA15]">Single Partner Accountability</span>
        </div>
      </div>
    </section>
  );
}
