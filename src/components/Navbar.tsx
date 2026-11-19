import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { SALON_CONFIG, TESTIMONIALS } from '../data/salonData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'Resultados', href: '#resultados' },
    ...(TESTIMONIALS.length > 0 ? [{ label: 'Depoimentos', href: '#depoimentos' }] : []),
    { label: 'Contato', href: '#agendamento' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#E8D6BC]/80 backdrop-blur-md border-b border-[#38251F]/10 shadow-[0_8px_30px_rgba(56,37,31,0.06)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Scroll Progress Hairline */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-[#B99764] origin-left z-50"
          style={{ scaleX }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#inicio');
            }}
            className="font-editorial text-xl sm:text-2xl font-medium tracking-tight text-[#38251F] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99764] rounded"
          >
            {SALON_CONFIG.brandName}
          </a>

          {/* Zone 2: Clean single-line nav links */}
          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide text-[#38251F]/85"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="group relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-[#171413] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99764] rounded"
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B99764] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>

          {/* Zone 3: Single Primary Action + Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onBookClick}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium tracking-[0.12em] uppercase bg-[#38251F] text-[#FFFCF8] rounded-full hover:bg-[#171413] transition-colors duration-200 whitespace-nowrap shrink-0 gold-sheen-btn cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99764]"
            >
              Agendar horário
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#38251F]/15 bg-[#FFFCF8]/75 backdrop-blur-sm text-[#38251F] hover:bg-[#E8D6BC]/60 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99764]"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-[#171413]/40 backdrop-blur-xs"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        aria-label="Menu mobile"
        className={`fixed top-0 right-0 bottom-0 z-50 w-[84%] max-w-sm bg-[#FFFCF8] border-l border-[#38251F]/10 p-8 flex flex-col justify-between transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#38251F]/10">
            <span className="font-editorial text-xl text-[#38251F]">{SALON_CONFIG.brandName}</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Fechar menu"
              className="w-11 h-11 rounded-full border border-[#38251F]/15 flex items-center justify-center text-[#38251F] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-editorial text-3xl text-[#38251F] hover:text-[#8A6A3B] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-[#38251F]/10 space-y-4">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onBookClick();
            }}
            className="w-full py-3.5 px-6 rounded-full bg-[#38251F] text-[#FFFCF8] text-xs font-medium tracking-[0.16em] uppercase hover:bg-[#171413] transition-colors cursor-pointer"
          >
            Agendar meu horário
          </button>
          <p className="text-xs text-center text-[#5E463D]">
            {SALON_CONFIG.instagramHandle}
          </p>
        </div>
      </aside>
    </>
  );
};
