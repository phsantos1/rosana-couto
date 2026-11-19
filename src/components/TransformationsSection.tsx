import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { ServiceId, TRANSFORMATIONS, TransformationItem } from '../data/salonData';
import { TransformationArtwork } from './EditorialArtworks';
import { BeforeAfterComparator } from './BeforeAfterComparator';

interface TransformationsSectionProps {
  onBookClick: () => void;
}

const FILTERS: { id: 'all' | ServiceId; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'alisamento', label: 'Alisamento' },
  { id: 'botox', label: 'Botox Capilar' },
  { id: 'cauterizacao', label: 'Cauterização' },
  { id: 'penteados', label: 'Penteados' },
];

export const TransformationsSection: React.FC<TransformationsSectionProps> = ({
  onBookClick,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | ServiceId>('all');
  const [selectedItem, setSelectedItem] = useState<TransformationItem | null>(null);

  const filteredItems =
    activeFilter === 'all'
      ? TRANSFORMATIONS
      : TRANSFORMATIONS.filter((item) => item.serviceId === activeFilter);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') {
        setSelectedItem(null);
      } else if (e.key === 'ArrowRight') {
        const idx = filteredItems.findIndex((i) => i.id === selectedItem.id);
        if (idx >= 0) {
          setSelectedItem(filteredItems[(idx + 1) % filteredItems.length]);
        }
      } else if (e.key === 'ArrowLeft') {
        const idx = filteredItems.findIndex((i) => i.id === selectedItem.id);
        if (idx >= 0) {
          setSelectedItem(filteredItems[(idx - 1 + filteredItems.length) % filteredItems.length]);
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedItem, filteredItems]);

  return (
    <section id="resultados" className="relative bg-[#FFFCF8] py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header + Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#8A6A3B]">
                Galeria de Transformações
              </span>
              <span className="w-10 h-[1px] bg-[#B99764]/60" aria-hidden="true" />
            </div>
            <h2 className="font-editorial text-[clamp(2.1rem,3.8vw,3.4rem)] leading-[1.1] text-[#38251F]">
              Resultados que contam histórias.
            </h2>
            <p className="mt-4 text-base sm:text-[17px] leading-[1.7] text-[#5E463D]">
              Cada cabelo tem sua beleza. Cada transformação merece ser celebrada.
            </p>
          </motion.div>

          {/* Interactive Service Filters */}
          <div
            role="tablist"
            aria-label="Filtrar resultados por tratamento"
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#F7F0E9] border border-[#38251F]/10 self-start"
          >
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99764] ${
                    isActive
                      ? 'bg-[#38251F] text-[#FFFCF8] shadow-xs'
                      : 'text-[#5E463D] hover:text-[#38251F] hover:bg-[#E8D6BC]/40'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Before & After Comparator */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <BeforeAfterComparator />
        </motion.div>

        {/* Asymmetric Editorial Gallery (Horizontal rail on mobile, editorial grid on desktop) */}
        <div className="flex md:grid md:grid-cols-12 gap-5 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory">
          {filteredItems.map((item, idx) => {
            const desktopSpan =
              activeFilter !== 'all'
                ? 'md:col-span-6 min-h-[300px]'
                : idx === 0
                ? 'md:col-span-5 md:row-span-2 min-h-[380px] md:min-h-[540px]'
                : idx === 1 || idx === 2
                ? 'md:col-span-7 min-h-[260px]'
                : 'md:col-span-6 min-h-[280px]';

            return (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative shrink-0 w-[82vw] sm:w-[60vw] md:w-auto snap-center rounded-2xl overflow-hidden border border-[#38251F]/10 ${desktopSpan}`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  aria-label={`Ampliar ${item.title}`}
                  className="relative w-full h-full text-left block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99764]"
                >
                  <div className="absolute inset-0">
                    <TransformationArtwork item={item} />
                  </div>

                  <div className="relative z-10 h-full min-h-[inherit] p-6 sm:p-7 flex flex-col justify-between text-[#FFFCF8]">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#E8D6BC]">
                        {item.categoryLabel}
                      </span>
                      <span className="w-9 h-9 rounded-full bg-[#FFFCF8]/15 backdrop-blur-xs border border-[#FFFCF8]/20 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5 text-[#FFFCF8]" />
                      </span>
                    </div>

                    <div className="mt-24">
                      <h3 className="font-editorial text-2xl sm:text-[26px] leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-[#FFFCF8]/80 max-w-md">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </button>
              </motion.article>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={onBookClick}
            className="gold-sheen-btn inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#38251F] text-[#FFFCF8] text-xs font-medium uppercase tracking-[0.16em] hover:bg-[#171413] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99764]"
          >
            <span>Quero cuidar do meu cabelo também</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          className="fixed inset-0 z-50 bg-[#171413]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-[#FFFCF8] border border-[#E8D6BC]/25 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full">
              <TransformationArtwork item={selectedItem} />
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Fechar visualização"
                className="absolute top-4 right-4 w-11 h-11 rounded-full bg-[#171413]/75 text-[#FFFCF8] flex items-center justify-center hover:bg-[#171413] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#8A6A3B]">
                  {selectedItem.categoryLabel}
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#38251F] mt-1">
                  {selectedItem.title}
                </h3>
                <p className="mt-1.5 text-sm text-[#5E463D]">{selectedItem.caption}</p>
              </div>

              {filteredItems.length > 1 && (
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    aria-label="Anterior"
                    onClick={() => {
                      const idx = filteredItems.findIndex((i) => i.id === selectedItem.id);
                      setSelectedItem(
                        filteredItems[(idx - 1 + filteredItems.length) % filteredItems.length]
                      );
                    }}
                    className="w-11 h-11 rounded-full border border-[#38251F]/15 flex items-center justify-center text-[#38251F] hover:bg-[#E8D6BC]/40 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Próximo"
                    onClick={() => {
                      const idx = filteredItems.findIndex((i) => i.id === selectedItem.id);
                      setSelectedItem(filteredItems[(idx + 1) % filteredItems.length]);
                    }}
                    className="w-11 h-11 rounded-full border border-[#38251F]/15 flex items-center justify-center text-[#38251F] hover:bg-[#E8D6BC]/40 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
