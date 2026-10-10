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
        <div className="mb-7 sm:mb-9 lg:mb-10">
          <div className="inline-flex items-center gap-2.5 mb-4 select-none">
            <div className="flex items-center shrink-0">
              <PixelatedIcon className="w-[20px] h-[10.5px]" color="#111111" />
            </div>
            <span className="text-[12px] sm:text-[13px] font-sans font-medium tracking-[0.18em] text-[#111111] uppercase">
              <PixelText text="01 // SELECTED CLIENTS" delay={0.06} />
            </span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium tracking-[-0.03em] text-[#0A0A0A] leading-[1.12] font-sans">
            <PixelText text="In good company." delay={0.12} stagger={0.06} />
          </h2>
          <p className="mt-2 text-[14px] sm:text-[15px] font-normal leading-[1.45] text-black/52 font-sans">
            38+ Brand Projects.
          </p>
        </div>

        <div className="relative w-full">
          <div className="grid auto-rows-fr grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5">
            {clients.map((client) => (
              <div
                key={client.id}
                className="group relative isolate aspect-[1.4] sm:aspect-[1.5] lg:aspect-[1.55] overflow-hidden bg-white/34 hover:bg-white/58 backdrop-blur-xl transition-all duration-500 ease-out px-4 py-5 sm:px-6 sm:py-6 flex items-center justify-center rounded-[18px] sm:rounded-[20px] border border-white/55 hover:border-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_24px_rgba(0,0,0,0.025)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_14px_34px_rgba(0,0,0,0.045)] hover:-translate-y-0.5"
                title={client.name}
              >
                <div className="absolute -right-8 -top-10 h-24 w-24 rounded-full bg-white/70 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                <div className="relative z-10 flex h-full w-full items-center justify-center">
                  <img
                    src={client.src}
                    alt={client.alt}
                    loading="lazy"
                    className={`${client.id === 'prem-sweets' ? 'max-h-[86%] max-w-[82%]' : client.id === 'nd-chair-parts' ? 'max-h-[82%] max-w-[62%]' : client.id === 'the-seafu' ? 'max-h-[48%] max-w-[68%]' : 'max-h-[56%] max-w-[76%]'} h-auto w-auto object-contain opacity-[0.88] group-hover:opacity-100 group-hover:scale-[1.035] transition-all duration-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.06)]`}
                    style={{
                      filter: client.id === 'prem-sweets'
                        ? 'grayscale(1) contrast(1.06) brightness(0.82)'
                        : client.id === 'darzies-couture'
                          ? 'grayscale(1) contrast(0.94) brightness(0.9)'
                          : 'grayscale(1) saturate(0) contrast(0) brightness(0.72)',
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
