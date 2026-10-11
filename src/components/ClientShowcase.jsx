export default function ClientShowcase() {
  const clients = [
    {
      id: 'prem-sweets',
      name: 'Prem Sweets',
      src: '/assets/client-showcase/prem-sweets.png',
      heightClass: 'h-[64px] sm:h-[74px] lg:h-[82px]',
      maxWClass: 'max-w-[175px]',
      alt: 'Prem Sweets',
    },
    {
      id: 'nimbark-organic',
      name: 'Nimbark Organic Foods',
      src: '/assets/client-showcase/nimbark-organic-hero-dark.png',
      heightClass: 'h-[32px] sm:h-[38px] lg:h-[42px]',
      maxWClass: 'max-w-[170px]',
      alt: 'Nimbark Organic Foods',
    },
    {
      id: 'mera-halwai',
      name: 'Mera Halwai',
      src: '/assets/client-showcase/mera-halwai.png',
      heightClass: 'h-[36px] sm:h-[42px] lg:h-[46px]',
      maxWClass: 'max-w-[155px]',
      alt: 'Mera Halwai',
    },
    {
      id: 'the-seafu',
      name: 'THE SEAFU',
      src: '/assets/client-showcase/the-seafu-dark.png',
      heightClass: 'h-[28px] sm:h-[34px] lg:h-[38px]',
      maxWClass: 'max-w-[165px]',
      alt: 'THE SEAFU',
    },
    {
      id: 'al-novelle',
      name: 'Al Novelle',
      src: '/assets/client-showcase/al-novelle-dark.png',
      heightClass: 'h-[30px] sm:h-[36px] lg:h-[40px]',
      maxWClass: 'max-w-[165px]',
      alt: 'Al Novelle',
    },
    {
      id: 'harvest-table-co',
      name: 'The Harvest Table Co.',
      src: '/assets/client-showcase/harvest-table-co.png',
      heightClass: 'h-[36px] sm:h-[42px] lg:h-[46px]',
      maxWClass: 'max-w-[165px]',
      alt: 'The Harvest Table Co.',
    },
    {
      id: 'darzies-couture',
      name: 'Darzies Couture',
      src: '/assets/client-showcase/darzies-couture.png',
      heightClass: 'h-[60px] sm:h-[70px] lg:h-[78px]',
      maxWClass: 'max-w-[115px]',
      alt: 'Darzies Couture',
    },
    {
      id: 'burger-bazaar',
      name: 'Burger Bazaar',
      src: '/assets/client-showcase/burger-bazaar.png',
      heightClass: 'h-[36px] sm:h-[42px] lg:h-[46px]',
      maxWClass: 'max-w-[155px]',
      alt: 'Burger Bazaar',
    },
    {
      id: 'mango',
      name: 'Mango',
      src: '/assets/client-showcase/mango-dark.png',
      heightClass: 'h-[28px] sm:h-[34px] lg:h-[38px]',
      maxWClass: 'max-w-[160px]',
      alt: 'Mango',
    },
    {
      id: 'shaheen-express',
      name: 'Shaheen Express',
      src: '/assets/client-showcase/shaheen-express.png',
      heightClass: 'h-[36px] sm:h-[42px] lg:h-[46px]',
      maxWClass: 'max-w-[160px]',
      alt: 'Shaheen Express',
    },
  ];

  return (
    <section
      id="clients"
      aria-label="Client Showcase"
      className="relative w-full max-w-full overflow-hidden bg-[#EBEBED] text-[#0A0A0A] py-14 sm:py-18 lg:py-22 px-4 sm:px-8 lg:px-12"
    >
      <div className="w-full max-w-[1460px] mx-auto min-w-0">
        {/* Header: Refined, clean text sizing & left-aligned layout */}
        <div className="text-left max-w-[760px] mb-8 sm:mb-10 lg:mb-12">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium text-[#777777] font-sans block mb-2 select-none">
            01.5 // CLIENT RELATIONSHIPS
          </span>
          <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-medium tracking-[-0.03em] text-[#0A0A0A] leading-[1.12] font-sans">
            In Good Company
          </h2>
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#555555] font-normal leading-[1.5] mt-2 sm:mt-2.5 font-sans max-w-[620px]">
            Building meaningful experiences for brands across industries.
          </p>
        </div>

        {/* Minimal Swiss Grid of 10 with Thin Black Border and Sharp Square Edges */}
        <div className="relative w-full rounded-none border border-black/[0.12] bg-black/[0.12] shadow-[0_2px_16px_rgba(0,0,0,0.02)]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px">
            {clients.map((client, idx) => (
              <div
                key={client.id}
                className="group relative bg-[#EBEBED] hover:bg-[#F3F3F5] transition-colors duration-200 p-5 sm:p-6 lg:p-7 flex flex-col justify-between items-start rounded-none min-h-[160px] sm:min-h-[180px] lg:min-h-[195px]"
                title={client.name}
              >
                {/* Top-Left: Minimal Monospace Counter */}
                <span className="text-[10px] sm:text-[11px] font-mono text-black/35 tracking-widest uppercase select-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Center / Body: Significantly Larger, Unified Clean Monochrome Logos */}
                <div className="w-full flex-1 flex items-center justify-center py-3 sm:py-4">
                  <img
                    src={client.src}
                    alt={client.alt}
                    loading="lazy"
                    className={`${client.heightClass} ${client.maxWClass} w-auto object-contain grayscale opacity-75 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.04)]`}
                  />
                </div>

                {/* Bottom Spacer */}
                <div className="w-full h-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
