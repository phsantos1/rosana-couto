import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { HERO_CAMPAIGN_IMAGE } from '../data/salonData';
import { HairPhotoFrame } from './EditorialArtworks';

interface FinalCtaSectionProps {
  onBookClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onBookClick }) => {
  return (
    <section className="relative min-h-[520px] sm:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#38251F]">
      {/* Full-bleed background photography */}
      <div className="absolute inset-0">
        <HairPhotoFrame
          src={HERO_CAMPAIGN_IMAGE}
          alt="Cabelos saudáveis com brilho natural e suavidade"
          className="w-full h-full"
          imgClassName="object-cover object-[55%_28%]"
        />
        <div
          className="absolute inset-0 bg-[#38251F]/78 backdrop-blur-[1px]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#171413]/75 via-transparent to-[#171413]/40"
          aria-hidden="true"
        />
      </div>

      {/* Centered Editorial Copy */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 py-24 text-center text-[#FFFCF8]"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#B99764]" aria-hidden="true" />
          <span className="text-xs uppercase tracking-[0.26em] text-[#E8D6BC]">
            Espaço Rosana Couto
          </span>
          <span className="w-8 h-[1px] bg-[#B99764]" aria-hidden="true" />
        </div>

        <h2 className="font-editorial text-[clamp(2.25rem,4.5vw,3.9rem)] leading-[1.08] text-[#FFFCF8]">
          O cabelo dos seus sonhos começa com um cuidado especial.
        </h2>

        <p className="mt-5 text-base sm:text-lg text-[#E8D6BC] max-w-xl mx-auto leading-relaxed">
          Permita-se viver uma experiência de beleza no Espaço Rosana Couto.
        </p>

        <div className="mt-9">
          <button
            type="button"
            onClick={onBookClick}
            className="gold-sheen-btn inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#E8D6BC] text-[#171413] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#FFFCF8] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFCF8]"
          >
            <span>Quero agendar meu horário</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};
