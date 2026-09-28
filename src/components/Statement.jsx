export default function Statement() {
  return (
    <section id="statement" className="py-24 sm:py-36 bg-[#0A0B0E] text-white border-t border-white/10 relative">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-baseline">
          {/* Big Headline */}
          <div className="lg:col-span-8">
            <span className="text-[11px] uppercase tracking-[0.24em] font-mono text-[#88EA15] block mb-4 font-bold">
              03 · The Kriyon Standard
            </span>
            <h2 className="font-sans font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] uppercase tracking-tighter text-white leading-[0.92]">
              One Group.<br />
              More Capability.<br />
              <span className="text-[#88EA15]">Less Complexity.*</span>
            </h2>
          </div>

          {/* Supporting Copy */}
          <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-white/15 lg:pl-10">
            <p className="text-xl sm:text-2xl text-white/90 font-medium leading-snug font-sans">
              Start with Kriyon. We bring the right specialist capability to the table.
            </p>
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs uppercase tracking-[0.2em] font-mono text-[#88EA15] font-bold">
                India-based. Working nationally and globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
