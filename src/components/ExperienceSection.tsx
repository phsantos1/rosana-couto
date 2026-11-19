import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import { HERO_CAMPAIGN_IMAGE } from '../data/salonData';
import { HairPhotoFrame } from './EditorialArtworks';

gsap.registerPlugin(ScrollTrigger);

export const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current || !parallaxRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        parallaxRef.current,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#38251F] text-[#FFFCF8] py-24 sm:py-32 overflow-hidden"
    >
      {/* Subtle Champagne Ambient Glow */}
      <div
        className="absolute -top-32 right-0 w-[440px] h-[440px] rounded-full bg-[#B99764]/12 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium uppercase tracking-[0.26em] text-[#E8D6BC]">
                Seu Momento de Beleza
              </span>
              <span className="w-12 h-[1px] bg-[#B99764]" aria-hidden="true" />
            </div>

            <h2 className="font-editorial text-[clamp(2.1rem,3.8vw,3.4rem)] leading-[1.08] text-[#FFFCF8]">
              Mais do que um atendimento. Um momento só seu.
            </h2>

            <div className="w-full h-[1px] bg-[#E8D6BC]/20 my-8" aria-hidden="true" />

            <div className="space-y-5 text-base sm:text-[17px] leading-[1.8] text-[#E8D6BC]/90 max-w-xl">
              <p>
                Entre a rotina e os compromissos, você também merece um momento dedicado a si
                mesma.
              </p>
              <p>
                No Espaço Rosana Couto, a beleza encontra o cuidado, e cada visita pode se tornar
                uma experiência especial.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-[#E8D6BC]/80">
              <span>Beleza que começa no cuidado</span>
              <span aria-hidden="true">·</span>
              <span>Atendimento personalizado</span>
            </div>
          </motion.div>

          {/* Parallax Close-up Hair Texture Study */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8D6BC]/20 aspect-[4/3] sm:aspect-[5/4] bg-[#281A15]">
              <div ref={parallaxRef} className="w-full h-[115%] -mt-[7.5%]">
                <HairPhotoFrame
                  src={HERO_CAMPAIGN_IMAGE}
                  alt="Close-up cinematográfico de cabelos macios, alinhados e com brilho natural"
                  className="w-full h-full"
                  imgClassName="object-cover object-[18%_48%]"
                />
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-tr from-[#171413]/55 via-transparent to-[#E8D6BC]/15 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
