import React, { useCallback, useRef, useState } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { HERO_CAMPAIGN_IMAGE } from '../data/salonData';
import { HairPhotoFrame } from './EditorialArtworks';

export const BeforeAfterComparator: React.FC = () => {
  const [position, setPosition] = useState(52);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    const raw = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(8, Math.min(92, raw));
    setPosition(clamped);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateFromClientX(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 10 : 3;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPosition((p) => Math.max(8, p - step));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPosition((p) => Math.min(92, p + step));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setPosition(8);
    } else if (e.key === 'End') {
      e.preventDefault();
      setPosition(92);
    }
  };

  return (
    <div className="rounded-2xl border border-[#38251F]/12 bg-[#FFFCF8] p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-[#38251F]/10">
        <div>
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#8A6A3B]">
            Comparador Interativo
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#38251F]">
            Antes &amp; Depois — Estudo de Alinhamento
          </h3>
        </div>
        <span className="text-xs text-[#5E463D]">
          Arraste o controle ou use as setas do teclado
        </span>
      </div>

      {/* Interactive Split Container */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden select-none touch-none cursor-ew-resize bg-[#281A15]"
      >
        {/* Right / "Depois" Layer */}
        <div className="absolute inset-0">
          <HairPhotoFrame
            src={HERO_CAMPAIGN_IMAGE}
            alt="Depois — Fios alinhados, macios e com brilho natural"
            className="w-full h-full"
            imgClassName="object-cover object-[50%_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171413]/45 via-transparent to-transparent pointer-events-none" />
          <span className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-md bg-[#171413]/75 backdrop-blur-xs text-[11px] uppercase tracking-[0.2em] text-[#FFFCF8]">
            Depois
          </span>
        </div>

        {/* Left / "Antes" Layer (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          {/* Editorial Before Study — honest visual illustration of unaligned/textured strands */}
          <div className="relative w-full h-full bg-gradient-to-br from-[#4D372F] via-[#3B2821] to-[#261813]">
            <svg
              viewBox="0 0 960 540"
              fill="none"
              className="w-full h-full opacity-75"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <path
                d="M-30 140C90 95 160 190 270 125C375 65 445 170 560 105C680 40 760 155 990 95"
                stroke="#E8D6BC"
                strokeOpacity="0.34"
                strokeWidth="2"
              />
              <path
                d="M-20 205C105 150 175 255 285 190C390 130 465 235 585 170C705 105 790 215 990 160"
                stroke="#D9B4AD"
                strokeOpacity="0.3"
                strokeWidth="1.6"
              />
              <path
                d="M-30 275C85 220 185 315 295 250C405 185 480 295 600 230C715 165 810 280 990 220"
                stroke="#E8D6BC"
                strokeOpacity="0.28"
                strokeWidth="1.5"
              />
              <path
                d="M-10 345C110 295 195 385 310 320C425 255 505 360 625 295C745 230 825 340 990 285"
                stroke="#B99764"
                strokeOpacity="0.35"
                strokeWidth="1.4"
              />
              <path
                d="M-20 415C100 365 205 445 330 385C450 325 530 420 655 360C775 300 845 395 990 345"
                stroke="#E8D6BC"
                strokeOpacity="0.22"
                strokeWidth="1.2"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-start px-8 sm:px-14 pointer-events-none">
              <div className="max-w-xs text-[#FFFCF8]/90">
                <p className="font-editorial italic text-2xl sm:text-3xl leading-snug">
                  Fios naturais antes da avaliação e do cuidado
                </p>
                <p className="mt-2 text-xs text-[#E8D6BC]/80 leading-relaxed">
                  Área reservada para fotografia real do atendimento, preservando luz e ângulo
                  originais.
                </p>
              </div>
            </div>
            <span className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-md bg-[#171413]/75 backdrop-blur-xs text-[11px] uppercase tracking-[0.2em] text-[#E8D6BC]">
              Antes
            </span>
          </div>
        </div>

        {/* Vertical Divider & Accessible Handle */}
        <div
          role="slider"
          tabIndex={0}
          aria-label="Controle comparador Antes e Depois"
          aria-valuemin={8}
          aria-valuemax={92}
          aria-valuenow={Math.round(position)}
          onKeyDown={handleKeyDown}
          style={{ left: `${position}%` }}
          className="absolute inset-y-0 -translate-x-1/2 z-20 flex items-center justify-center focus-visible:outline-none group"
        >
          <div className="w-[1.5px] h-full bg-[#FFFCF8]/85 shadow-[0_0_12px_rgba(23,20,19,0.5)]" />
          <div className="absolute w-11 h-11 rounded-full bg-[#FFFCF8] text-[#38251F] border border-[#B99764] shadow-lg flex items-center justify-center transition-transform duration-150 group-hover:scale-105 group-focus-visible:ring-4 group-focus-visible:ring-[#B99764]/50">
            <MoveHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-[#5E463D] leading-relaxed">
        Nota de transparência: fotografias comparativas reais são publicadas mediante autorização
        das clientes, mantendo iluminação natural e sem manipulação artificial dos fios.
      </p>
    </div>
  );
};
