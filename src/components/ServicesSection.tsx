import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/salonData';
import { ServiceCardArtwork } from './EditorialArtworks';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="tratamentos" className="relative bg-[#F7F0E9] paper-grain py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#8A6A3B]">
              Hair Experience
            </span>
            <span className="w-10 h-[1px] bg-[#B99764]/60" aria-hidden="true" />
          </div>
          <h2 className="font-editorial text-[clamp(2.1rem,3.8vw,3.4rem)] leading-[1.1] text-[#38251F]">
            Seu cabelo. Sua essência. Seu momento.
          </h2>
          <p className="mt-4 text-base sm:text-[17px] leading-[1.7] text-[#5E463D]">
            Conheça os cuidados e tratamentos que fazem parte do universo Espaço Rosana Couto.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7">
          {SERVICES.map((service, idx) => {
            const isDark = service.tone === 'photo' || service.tone === 'espresso';
            const colSpan =
              service.gridSpan === 'wide' ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${colSpan} group relative rounded-2xl overflow-hidden border border-[#38251F]/12 min-h-[380px] sm:min-h-[420px] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1`}
              >
                {/* Background Editorial Visual */}
                <div className="absolute inset-0">
                  <ServiceCardArtwork
                    tone={service.tone}
                    imageUrl={service.imageUrl}
                    imagePosition={service.imagePosition}
                    alt={service.name}
                  />
                </div>

                {/* Foreground Content */}
                <div
                  className={`relative z-10 p-7 sm:p-9 h-full flex flex-col justify-between ${
                    isDark ? 'text-[#FFFCF8]' : 'text-[#38251F]'
                  }`}
                >
                  {/* Top Row: Editorial Index + Service Name */}
                  <div className="flex items-center justify-between gap-4 border-b border-current/15 pb-4">
                    <span
                      className={`font-editorial italic text-2xl ${
                        isDark ? 'text-[#E8D6BC]' : 'text-[#8A6A3B]'
                      }`}
                    >
                      {service.number}
                    </span>
                    <span
                      className={`text-xs uppercase tracking-[0.2em] ${
                        isDark ? 'text-[#E8D6BC]' : 'text-[#5E463D]'
                      }`}
                    >
                      {service.name}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="mt-16 sm:mt-20 max-w-lg">
                    <h3 className="font-editorial text-2xl sm:text-3xl leading-[1.15]">
                      {service.headline}
                    </h3>
                    <p
                      className={`mt-3 text-sm sm:text-[15px] leading-[1.65] ${
                        isDark ? 'text-[#FFFCF8]/85' : 'text-[#5E463D]'
                      }`}
                    >
                      {service.description}
                    </p>

                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={() => onSelectService(service)}
                        className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-medium uppercase tracking-[0.15em] transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99764] ${
                          isDark
                            ? 'bg-[#FFFCF8] text-[#171413] hover:bg-[#E8D6BC]'
                            : 'bg-[#38251F] text-[#FFFCF8] hover:bg-[#171413]'
                        }`}
                      >
                        <span>{service.ctaLabel}</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
