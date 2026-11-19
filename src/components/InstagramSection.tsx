import React from 'react';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { INSTAGRAM_GALLERY, SALON_CONFIG } from '../data/salonData';
import { InstagramCardArtwork } from './EditorialArtworks';

export const InstagramSection: React.FC = () => {
  return (
    <section className="relative bg-[#F7F0E9] paper-grain py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#8A6A3B]">
                Beleza em Movimento · {SALON_CONFIG.instagramHandle}
              </span>
              <span className="w-10 h-[1px] bg-[#B99764]/60" aria-hidden="true" />
            </div>
            <h2 className="font-editorial text-[clamp(2.1rem,3.8vw,3.3rem)] leading-[1.1] text-[#38251F]">
              Inspire-se. Apaixone-se. Transforme-se.
            </h2>
          </motion.div>

          <a
            href={SALON_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border border-[#38251F]/25 bg-[#FFFCF8]/70 text-[#38251F] text-xs font-medium uppercase tracking-[0.16em] hover:bg-[#38251F] hover:text-[#FFFCF8] transition-all duration-200 whitespace-nowrap self-start md:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99764]"
          >
            <Instagram className="w-4 h-4" />
            <span>Acompanhe no Instagram</span>
          </a>
        </div>

        {/* 6-Image Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {INSTAGRAM_GALLERY.map((item, idx) => (
            <motion.a
              key={item.id}
              href={SALON_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              aria-label={`Ver ${item.title} no Instagram ${SALON_CONFIG.instagramHandle}`}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-[#38251F]/10 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99764]"
            >
              <InstagramCardArtwork item={item} />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#171413]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-[#FFFCF8]/95 text-[#38251F] flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Instagram className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
