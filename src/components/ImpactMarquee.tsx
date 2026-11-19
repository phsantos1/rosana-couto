import React from 'react';

const MARQUEE_WORDS = [
  'BELEZA',
  'CUIDADO',
  'ELEGÂNCIA',
  'AUTOESTIMA',
  'TRANSFORMAÇÃO',
];

export const ImpactMarquee: React.FC = () => {
  const trackItems = [...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS];

  return (
    <section
      aria-label="Valores da marca Espaço Rosana Couto"
      className="relative overflow-hidden bg-[#E8D6BC]/55 border-y border-[#38251F]/10 py-5 select-none"
    >
      <div className="flex w-max animate-editorial-marquee">
        {trackItems.map((word, index) => (
          <div key={`${word}-${index}`} className="flex items-center shrink-0">
            <span className="font-editorial text-lg sm:text-xl tracking-[0.28em] text-[#38251F] px-6 sm:px-10">
              {word}
            </span>
            <span
              className="w-1.5 h-1.5 rotate-45 bg-[#B99764] shrink-0"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
