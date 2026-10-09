export default function ClientShowcase() {
  const clients = [
    {
      id: 'prem-sweets',
      name: 'Prem Sweets',
      src: '/assets/client-showcase/prem-sweets.png',
      heightClass: 'h-[50px] sm:h-[56px] md:h-[62px]',
      maxWClass: 'max-w-[150px]',
      alt: 'Prem Sweets',
    },
    {
      id: 'nimbark-organic',
      name: 'Nimbark Organic Foods',
      src: '/assets/client-showcase/nimbark-organic-hero-dark.png',
      heightClass: 'h-[24px] sm:h-[28px] md:h-[32px]',
      maxWClass: 'max-w-[145px]',
      alt: 'Nimbark Organic Foods',
    },
    {
      id: 'mera-halwai',
      name: 'Mera Halwai',
      src: '/assets/client-showcase/mera-halwai.png',
      heightClass: 'h-[28px] sm:h-[32px] md:h-[36px]',
      maxWClass: 'max-w-[130px]',
      alt: 'Mera Halwai',
    },
    {
      id: 'the-seafu',
      name: 'THE SEAFU',
      src: '/assets/client-showcase/the-seafu.png',
      heightClass: 'h-[22px] sm:h-[25px] md:h-[28px]',
      maxWClass: 'max-w-[140px]',
      alt: 'THE SEAFU',
    },
    {
      id: 'al-novelle',
      name: 'Al Novelle',
      src: '/assets/client-showcase/al-novelle.png',
      heightClass: 'h-[24px] sm:h-[27px] md:h-[30px]',
      maxWClass: 'max-w-[140px]',
      alt: 'Al Novelle',
    },
    {
      id: 'harvest-table-co',
      name: 'The Harvest Table Co.',
      src: '/assets/client-showcase/harvest-table-co.png',
      heightClass: 'h-[28px] sm:h-[32px] md:h-[35px]',
      maxWClass: 'max-w-[145px]',
      alt: 'The Harvest Table Co.',
    },
    {
      id: 'darzies-couture',
      name: 'Darzies Couture',
      src: '/assets/client-showcase/darzies-couture.png',
      heightClass: 'h-[36px] sm:h-[42px] md:h-[46px]',
      maxWClass: 'max-w-[85px]',
      alt: 'Darzies Couture',
    },
    {
      id: 'burger-bazaar',
      name: 'Burger Bazaar',
      src: '/assets/client-showcase/burger-bazaar.png',
      heightClass: 'h-[28px] sm:h-[32px] md:h-[35px]',
      maxWClass: 'max-w-[130px]',
      alt: 'Burger Bazaar',
    },
    {
      id: 'mango',
      name: 'Mango',
      src: '/assets/client-showcase/mango.png',
      heightClass: 'h-[22px] sm:h-[25px] md:h-[28px]',
      maxWClass: 'max-w-[135px]',
      alt: 'Mango',
    },
    {
      id: 'shaheen-express',
      name: 'Shaheen Express',
      src: '/assets/client-showcase/shaheen-express.png',
      heightClass: 'h-[28px] sm:h-[32px] md:h-[35px]',
      maxWClass: 'max-w-[135px]',
      alt: 'Shaheen Express',
    },
  ];

  return (
    <section
      id="clients"
      aria-label="Client Showcase"
      className="relative w-full max-w-full overflow-hidden bg-[#EBEBED] text-[#0A0A0A] py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12"
    >
      <div className="w-full max-w-[1460px] mx-auto min-w-0">
        {/* Header: All Left-Aligned Text in PP Neue Montreal font-sans */}
        <div className="text-left max-w-[760px] mb-8 sm:mb-10 lg:mb-12">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium text-[#777777] font-sans block mb-2 select-none">
            01.5 // CLIENT RELATIONSHIPS
          </span>
          <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-medium tracking-[-0.03em] text-[#0A0A0A] leading-[1.15] font-sans">
            In Good Company
          </h2>
          <p className="text-[14px] sm:text-[15.5px] lg:text-[16px] text-[#555555] font-normal leading-[1.55] mt-2 sm:mt-2.5 font-sans">
            Building meaningful experiences for brands across industries.
          </p>
        </div>

        {/* Minimal Swiss Grid of 10 with Thin Black Border and Square Edges */}
        <div className="relative w-full rounded-none border border-black/[0.12] bg-black/[0.12] shadow-[0_2px_16px_rgba(0,0,0,0.02)]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px">
            {clients.map((client, idx) => (
              <div
                key={client.id}
                className="group relative bg-[#EBEBED] hover:bg-[#F3F3F5] transition-colors duration-200 p-5 sm:p-6 lg:p-7 flex flex-col justify-between items-start rounded-none min-h-[140px] sm:min-h-[155px] lg:min-h-[165px]"
                title={client.name}
              >
                {/* Top-Left: Minimal Monospace Counter (Square edge aesthetic) */}
                <span className="text-[10px] sm:text-[10.5px] font-mono text-black/35 tracking-widest uppercase select-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Center / Body: Pure Clean Logo */}
                <div className="w-full flex-1 flex items-center justify-center py-2 sm:py-3">
                  <img
                    src={client.src}
                    alt={client.alt}
                    loading="lazy"
                    className={`${client.heightClass} ${client.maxWClass} w-auto object-contain opacity-85 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.04)]`}
                  />
                </div>

                {/* Subtle bottom indicator spacer */}
                <div className="w-full h-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
