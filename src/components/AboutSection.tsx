import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { AboutPortraitComposition } from './EditorialArtworks';

interface AboutSectionProps {
  onExploreWork: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreWork }) => {
  return (
    <section id="sobre" className="relative bg-[#FFFCF8] py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Asymmetric Left Visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <AboutPortraitComposition />
          </motion.div>

          {/* Right Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:pl-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#8A6A3B]">
                Sobre Rosana Couto
              </span>
              <span className="w-10 h-[1px] bg-[#B99764]/60" aria-hidden="true" />
            </div>

            <h2 className="font-editorial text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.1] text-[#38251F] max-w-2xl">
              Por trás de cada transformação, existe cuidado.
            </h2>

            <div className="mt-8 space-y-5 text-base sm:text-[17px] leading-[1.8] text-[#5E463D] max-w-xl">
              <p>
                Mais do que transformar cabelos, o Espaço Rosana Couto é um lugar dedicado ao
                cuidado, à beleza e à autoestima.
              </p>
              <p>
                Cada atendimento é uma oportunidade de valorizar a beleza única de cada mulher,
                respeitando seus desejos e proporcionando momentos especiais de autocuidado.
              </p>
            </div>

            {/* Stylized Editorial Signature (without falsifying handwritten signature) */}
            <div className="mt-10 pt-8 border-t border-[#38251F]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p className="font-editorial italic text-3xl text-[#38251F] tracking-wide">
                  Rosana Couto
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#5E463D]">
                  Espaço Rosana Couto
                </p>
              </div>

              <button
                type="button"
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full border border-[#38251F]/25 text-[#38251F] text-xs font-medium uppercase tracking-[0.16em] hover:bg-[#38251F] hover:text-[#FFFCF8] transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99764]"
              >
                <span>Conheça meu trabalho</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
