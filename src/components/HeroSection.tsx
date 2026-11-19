import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { HERO_CAMPAIGN_IMAGE, SALON_CONFIG } from '../data/salonData';
import { CircularExperienceSeal, HairPhotoFrame } from './EditorialArtworks';

interface HeroSectionProps {
  onBookClick: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookClick,
  onExploreServices,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        containerRef.current,
        { opacity: 0.85 },
        { opacity: 1, duration: 0.65 }
      )
        .fromTo(
          imageWrapRef.current,
          { scale: 1.08, opacity: 0.7 },
          { scale: 1, opacity: 1, duration: 1.35, ease: 'power2.out' },
          0.05
        )
        .fromTo(
          '.hero-line-reveal',
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.12 },
          0.2
        )
        .fromTo(
          '.hero-sub-reveal',
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75 },
          0.58
        )
        .fromTo(
          '.hero-cta-reveal',
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, stagger: 0.1 },
          0.72
        );

      if (sheenRef.current) {
        gsap.fromTo(
          sheenRef.current,
          { xPercent: -110 },
          { xPercent: 220, duration: 2.2, ease: 'power2.inOut', delay: 0.9 }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-[100svh] bg-[#F7F0E9] paper-grain pt-16 md:pt-20 flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle champagne ambient wash */}
      <div
        className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#E8D6BC]/50 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/3 w-[340px] h-[260px] rounded-full bg-[#D9B4AD]/25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Editorial Column (~45% desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-center px-6 sm:px-10 lg:pl-16 lg:pr-10 py-12 lg:py-20">
          {/* Small identification + subtle golden hairline with light sweep */}
          <div className="hero-line-reveal flex items-center gap-4 mb-7">
            <span className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#5E463D]">
              {SALON_CONFIG.brandName}
            </span>
            <div className="relative w-14 h-[1px] bg-[#B99764]/45 overflow-hidden">
              <div
                ref={sheenRef}
                className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-[#FFFCF8] to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-editorial text-[clamp(2.5rem,4.6vw,4.35rem)] leading-[1.04] tracking-[-0.015em] text-[#38251F] max-w-xl">
            <span className="hero-line-reveal block">A beleza dos</span>
            <span className="hero-line-reveal block">seus cabelos merece</span>
            <span className="hero-line-reveal block">
              ser{' '}
              <em className="italic font-normal text-[#8A6A3B] relative inline-block">
                extraordinária.
                <svg
                  viewBox="0 0 220 12"
                  fill="none"
                  className="w-full h-2.5 -mt-1 text-[#B99764]/60"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8.5C58 2.5 152 2 218 7.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </em>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="hero-sub-reveal mt-7 text-base sm:text-[17px] leading-[1.7] text-[#5E463D] max-w-md">
            No Espaço Rosana Couto, cada detalhe é pensado para valorizar sua beleza, cuidar dos
            seus fios e proporcionar uma experiência especial.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={onBookClick}
              className="hero-cta-reveal gold-sheen-btn inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#38251F] text-[#FFFCF8] text-xs font-medium uppercase tracking-[0.16em] hover:bg-[#171413] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99764]"
            >
              <span>Agendar meu horário</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onExploreServices}
              className="hero-cta-reveal inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-[#38251F]/20 bg-[#FFFCF8]/60 text-[#38251F] text-xs font-medium uppercase tracking-[0.16em] hover:bg-[#E8D6BC]/60 hover:border-[#38251F]/35 transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99764]"
            >
              Conhecer os tratamentos
            </button>
          </div>
        </div>

        {/* Right Cinematic Photography (~55% desktop) */}
        <div className="lg:col-span-7 relative min-h-[420px] sm:min-h-[520px] lg:min-h-full flex items-stretch">
          <div
            ref={imageWrapRef}
            className="relative w-full h-full overflow-hidden lg:rounded-tl-[2.5rem]"
          >
            <HairPhotoFrame
              src={HERO_CAMPAIGN_IMAGE}
              alt="Mulher com cabelos longos, saudáveis, brilhantes e em movimento natural"
              className="w-full h-full min-h-[420px] lg:min-h-full"
              imgClassName="object-cover object-[72%_24%]"
            />

            {/* Soft editorial gradients integrating photography with the nude canvas */}
            <div
              className="hidden lg:block absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[#F7F0E9] via-[#F7F0E9]/45 to-transparent pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="lg:hidden absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#F7F0E9] to-transparent pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#38251F]/25 to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>

          {/* Circular Beauty & Hair Experience Seal */}
          <div className="hidden md:block absolute left-0 bottom-10 -translate-x-1/2 z-20">
            <CircularExperienceSeal />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 border-t border-[#38251F]/10 bg-[#F7F0E9]/90 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-3.5 flex items-center justify-between text-xs text-[#5E463D]">
          <span className="tracking-[0.18em] uppercase">Beleza &amp; Cuidado Capilar</span>
          <button
            type="button"
            onClick={() => {
              document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-[#38251F] hover:text-[#8A6A3B] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99764] rounded"
          >
            <span>Explorar</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
