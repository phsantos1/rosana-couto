import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/salonData';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Não exibir depoimentos fictícios: oculto até que avaliações reais autorizadas sejam inseridas.
  if (TESTIMONIALS.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="depoimentos" className="relative bg-[#F7F0E9] py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#8A6A3B]">
            Confiança Real
          </span>
          <h2 className="mt-3 font-editorial text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.12] text-[#38251F]">
            A beleza de cada experiência está nos detalhes.
          </h2>
        </div>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-[#E8D6BC]/45 border border-[#38251F]/10 p-8 sm:p-12 text-center"
        >
          <div className="flex items-center justify-center gap-1 mb-6" aria-label={`Avaliação ${current.rating} de 5`}>
            {Array.from({ length: current.rating }).map((_, idx) => (
              <Star key={idx} className="w-4 h-4 fill-[#B99764] text-[#B99764]" />
            ))}
          </div>

          <blockquote className="font-editorial italic text-2xl sm:text-3xl leading-relaxed text-[#38251F] max-w-2xl mx-auto">
            “{current.comment}”
          </blockquote>

          <div className="mt-8 flex flex-col items-center gap-2">
            {current.photoUrl && (
              <img
                src={current.photoUrl}
                alt={current.clientName}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover border border-[#B99764]/50"
              />
            )}
            <p className="text-sm font-semibold text-[#38251F]">{current.clientName}</p>
            {current.serviceName && (
              <p className="text-xs uppercase tracking-[0.18em] text-[#5E463D]">
                {current.serviceName}
              </p>
            )}
          </div>
        </motion.div>

        {TESTIMONIALS.length > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Depoimento anterior"
              className="w-11 h-11 rounded-full border border-[#38251F]/20 flex items-center justify-center text-[#38251F] hover:bg-[#E8D6BC]/60 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Próximo depoimento"
              className="w-11 h-11 rounded-full border border-[#38251F]/20 flex items-center justify-center text-[#38251F] hover:bg-[#E8D6BC]/60 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
