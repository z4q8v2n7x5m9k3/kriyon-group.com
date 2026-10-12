import PixelatedIcon from './PixelatedIcon';
import PixelText from './PixelText';

export default function ClientShowcase() {
  const clients = [
    {
      id: 'prem-sweets',
      name: 'Prem Sweets',
      src: '/assets/client-showcase/prem-sweets-updated.png',
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
      id: 'ara-beauty-club',
      name: 'ARA The Beauty Club',
      src: '/assets/client-logos/06-ara-the-beauty-club.png',
      heightClass: 'h-[30px] sm:h-[34px] md:h-[38px]',
      maxWClass: 'max-w-[170px]',
      alt: 'ARA The Beauty Club',
    },
    {
      id: 'nd-chair-parts',
      name: 'ND Chair Parts',
      src: '/assets/client-logos/05-nd-chair-parts.png',
      heightClass: 'h-[76px] sm:h-[84px] md:h-[90px]',
      maxWClass: 'max-w-[180px]',
      alt: 'ND Chair Parts',
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
      className="relative w-full max-w-full overflow-hidden bg-[#EBEBED] text-[#0A0A0A] py-10 sm:py-14 lg:py-16 px-3 sm:px-6 lg:px-10"
    >
      <div className="w-full max-w-[1500px] mx-auto min-w-0">
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2.5 mb-3 select-none">
            <div className="flex items-center shrink-0">
              <PixelatedIcon className="w-[20px] h-[10.5px]" color="#111111" />
            </div>
            <span className="text-[11.5px] sm:text-[12px] font-sans font-medium tracking-[0.18em] text-[#111111] uppercase">
              <PixelText text="01 // SELECTED CLIENTS" delay={0.06} />
            </span>
          </div>
          <h2 className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[36px] font-medium tracking-[-0.03em] text-[#0A0A0A] leading-[1.14] font-sans">
            <PixelText text="In good company." delay={0.12} stagger={0.06} />
          </h2>
          <p className="mt-2 flex items-baseline gap-1.5 text-[13.5px] sm:text-[14px] font-normal leading-[1.45] text-black/50 font-sans">
            <span className="text-[17px] sm:text-[18px] font-semibold tracking-[-0.025em] text-black">38+</span>
            <span>brands we’ve helped bring to life.</span>
          </p>
        </div>

        <div className="relative w-full">
          <div className="grid auto-rows-fr grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5">
            {clients.map((client) => (
              <div
                key={client.id}
                className="group relative isolate aspect-[1.4] sm:aspect-[1.5] lg:aspect-[1.55] overflow-hidden bg-white/[0.22] hover:bg-white/[0.34] transition-all duration-500 ease-out px-4 py-5 sm:px-6 sm:py-6 flex items-center justify-center rounded-[18px] sm:rounded-[20px] border border-white/75 hover:border-white shadow-[0_6px_20px_rgba(0,0,0,0.018)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.035)] hover:-translate-y-0.5"
                title={client.name}
              >
                <div className="relative z-10 flex h-full w-full items-center justify-center">
                  <img
                    src={client.src}
                    alt={client.alt}
                    loading="lazy"
                    className={`${client.id === 'prem-sweets' ? 'max-h-[86%] max-w-[82%]' : client.id === 'nd-chair-parts' ? 'max-h-[82%] max-w-[62%]' : client.id === 'the-seafu' ? 'max-h-[48%] max-w-[68%]' : 'max-h-[56%] max-w-[76%]'} h-auto w-auto object-contain opacity-[0.88] group-hover:opacity-100 group-hover:scale-[1.035] transition-all duration-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.06)]`}
                    style={{
                      filter: client.id === 'prem-sweets'
                        ? 'grayscale(1) contrast(1.03) brightness(0.93)'
                        : 'grayscale(1) saturate(0) contrast(0) brightness(0.87)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
