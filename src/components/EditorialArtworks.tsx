import React, { useState } from 'react';
import {
  ALISAMENTO_RESULT_IMAGE,
  BOTOX_RESULT_IMAGE,
  HERO_CAMPAIGN_IMAGE,
  InstagramEditorialItem,
  PENTEADO_RESULT_IMAGE,
  ROSANA_PORTRAIT_IMAGE,
  TransformationItem,
} from '../data/salonData';

export const BrandLogoMark: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="20" cy="20" r="18.5" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
    <path
      d="M14 27C14 19 18 13 24.5 11.5C21.5 15.5 20.5 21 21 27"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M19 28.5C21 22.5 24 18 28.5 16C25.5 19.5 24.5 23.5 25.5 28"
      stroke="#B99764"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export const CircularExperienceSeal: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-28 h-28 md:w-32 md:h-32 select-none ${className}`} aria-hidden="true">
    <svg viewBox="0 0 140 140" className="w-full h-full animate-slow-spin">
      <defs>
        <path
          id="experience-circle-path"
          d="M 70, 70 m -52, 0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
        />
      </defs>
      <text
        fill="#38251F"
        fontSize="9.2"
        fontWeight="500"
        letterSpacing="3.1"
        className="uppercase"
      >
        <textPath href="#experience-circle-path" startOffset="0%">
          BEAUTY &amp; HAIR EXPERIENCE · ESPAÇO ROSANA COUTO ·
        </textPath>
      </text>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-11 h-11 rounded-full border border-[#B99764]/50 bg-[#FFFCF8]/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
        <span className="font-editorial italic text-base text-[#38251F]">RC</span>
      </div>
    </div>
  </div>
);

export const HairPhotoFrame: React.FC<{
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}> = ({ src, alt, className = '', imgClassName = '' }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-[#E8D6BC] via-[#D9B4AD]/45 to-[#38251F]/20 flex items-center justify-center p-6 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="text-center">
          <BrandLogoMark className="w-10 h-10 mx-auto text-[#38251F]/70 mb-2" />
          <p className="font-editorial italic text-lg text-[#38251F]/80">Espaço Rosana Couto</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#E8D6BC]/40 ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
};

export const AboutPortraitComposition: React.FC = () => (
  <div className="relative w-full aspect-[4/4.2] max-w-lg mx-auto lg:max-w-none overflow-hidden bg-[#FFFCF8] group">
    <HairPhotoFrame
      src={ROSANA_PORTRAIT_IMAGE}
      alt="Rosana Couto, profissional especialista em beleza e cuidados capilares"
      className="w-full h-full bg-[#FFFCF8]"
      imgClassName="object-cover object-[46%_14%] scale-[1.03] transition-transform duration-700 ease-out group-hover:scale-[1.06]"
    />
    {/* Soft multi-edge degradê blending seamlessly into #FFFCF8 */}
    <div
      className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#FFFCF8] via-[#FFFCF8]/35 to-transparent pointer-events-none"
      aria-hidden="true"
    />
    <div
      className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FFFCF8] via-[#FFFCF8]/55 to-transparent pointer-events-none"
      aria-hidden="true"
    />
    <div
      className="absolute inset-y-0 left-0 w-16 sm:w-20 bg-gradient-to-r from-[#FFFCF8] via-[#FFFCF8]/35 to-transparent pointer-events-none"
      aria-hidden="true"
    />
    <div
      className="absolute inset-y-0 right-0 w-24 sm:w-28 bg-gradient-to-l from-[#FFFCF8] via-[#FFFCF8]/50 to-transparent pointer-events-none"
      aria-hidden="true"
    />
  </div>
);

export const ServiceCardArtwork: React.FC<{
  tone: 'photo' | 'champagne' | 'espresso' | 'rose';
  imageUrl?: string;
  imagePosition?: string;
  alt?: string;
}> = ({ tone, imageUrl, imagePosition = 'object-center', alt = 'Tratamento capilar Espaço Rosana Couto' }) => {
  if (tone === 'photo') {
    return (
      <div className="relative w-full h-full overflow-hidden">
        <HairPhotoFrame
          src={imageUrl || HERO_CAMPAIGN_IMAGE}
          alt={alt}
          className="w-full h-full"
          imgClassName={`${imagePosition} transition-transform duration-700 ease-out group-hover:scale-105`}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#171413]/90 via-[#171413]/40 to-[#171413]/25 pointer-events-none"
          aria-hidden="true"
        />
      </div>
    );
  }

  if (tone === 'champagne') {
    return (
      <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-[#F7F0E9] via-[#E8D6BC] to-[#D9B4AD]/50">
        <svg
          viewBox="0 0 480 360"
          fill="none"
          className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path
            d="M-30 250C70 190 150 290 255 215C345 150 415 210 510 140"
            stroke="#B99764"
            strokeOpacity="0.55"
            strokeWidth="1.5"
          />
          <path
            d="M-30 278C80 218 165 312 270 236C360 172 425 232 515 162"
            stroke="#38251F"
            strokeOpacity="0.2"
            strokeWidth="1.2"
          />
          <path
            d="M-20 220C80 160 145 256 245 186C335 122 405 180 500 110"
            stroke="#FFFCF8"
            strokeOpacity="0.85"
            strokeWidth="2"
          />
          <circle cx="345" cy="110" r="64" stroke="#B99764" strokeOpacity="0.35" strokeWidth="1" />
          <circle cx="345" cy="110" r="42" stroke="#38251F" strokeOpacity="0.14" strokeWidth="1" />
        </svg>
      </div>
    );
  }

  if (tone === 'espresso') {
    return (
      <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-[#38251F] via-[#2B1C17] to-[#171413]">
        <svg
          viewBox="0 0 480 360"
          fill="none"
          className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="cautGlow" cx="68%" cy="32%" r="60%">
              <stop offset="0%" stopColor="#B99764" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#171413" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="480" height="360" fill="url(#cautGlow)" />
          <path
            d="M70 340C140 240 165 130 295 45"
            stroke="#E8D6BC"
            strokeOpacity="0.35"
            strokeWidth="1.25"
          />
          <path
            d="M115 350C185 252 212 146 340 60"
            stroke="#B99764"
            strokeOpacity="0.55"
            strokeWidth="1.5"
          />
          <path
            d="M160 355C230 264 256 164 385 80"
            stroke="#D9B4AD"
            strokeOpacity="0.32"
            strokeWidth="1"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-[#D9B4AD]/55 via-[#E8D6BC]/65 to-[#F7F0E9]">
      <svg
        viewBox="0 0 640 380"
        fill="none"
        className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M410 380V170C410 98 462 48 525 48C588 48 640 98 640 170V380"
          stroke="#38251F"
          strokeOpacity="0.16"
          strokeWidth="1.2"
        />
        <path
          d="M370 380V188C370 110 434 52 515 52"
          stroke="#B99764"
          strokeOpacity="0.55"
          strokeWidth="1.3"
        />
        <path
          d="M280 285C350 220 435 160 545 180C490 225 455 275 430 340"
          stroke="#38251F"
          strokeOpacity="0.22"
          strokeWidth="1.2"
        />
        <circle cx="520" cy="145" r="36" stroke="#38251F" strokeOpacity="0.18" strokeWidth="1" />
      </svg>
    </div>
  );
};

export const TransformationArtwork: React.FC<{ item: TransformationItem }> = ({ item }) => {
  if (item.variant === 'silk-align') {
    return (
      <div className="relative w-full h-full overflow-hidden bg-[#2B1C17]">
        <HairPhotoFrame
          src={ALISAMENTO_RESULT_IMAGE}
          alt={item.title}
          className="w-full h-full"
          imgClassName="object-[50%_42%] transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171413]/85 via-[#171413]/25 to-transparent pointer-events-none" />
      </div>
    );
  }

  if (item.variant === 'gloss-waves') {
    return (
      <div className="relative w-full h-full overflow-hidden bg-[#2B1C17]">
        <HairPhotoFrame
          src={BOTOX_RESULT_IMAGE}
          alt={item.title}
          className="w-full h-full"
          imgClassName="object-[50%_26%] transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171413]/85 via-[#171413]/25 to-transparent pointer-events-none" />
      </div>
    );
  }

  if (item.variant === 'bridal-updo') {
    return (
      <div className="relative w-full h-full overflow-hidden bg-[#2B1C17]">
        <HairPhotoFrame
          src={PENTEADO_RESULT_IMAGE}
          alt={item.title}
          className="w-full h-full"
          imgClassName="object-[50%_22%] transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171413]/85 via-[#171413]/25 to-transparent pointer-events-none" />
      </div>
    );
  }

  if (item.variant === 'soft-movement') {
    return (
      <div className="relative w-full h-full overflow-hidden bg-[#38251F]">
        <HairPhotoFrame
          src={HERO_CAMPAIGN_IMAGE}
          alt={item.title}
          className="w-full h-full"
          imgClassName="object-[78%_30%] transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171413]/85 via-[#171413]/25 to-transparent pointer-events-none" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-[#38251F] via-[#281A15] to-[#171413]">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M-20 260C80 180 175 285 270 190C340 120 390 155 430 110"
          stroke="#B99764"
          strokeOpacity="0.6"
          strokeWidth="1.6"
        />
        <path
          d="M-20 295C90 215 185 320 285 225C355 155 400 185 435 145"
          stroke="#E8D6BC"
          strokeOpacity="0.25"
          strokeWidth="1.2"
        />
        <circle cx="290" cy="115" r="56" stroke="#B99764" strokeOpacity="0.35" strokeWidth="1" />
      </svg>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#171413]/85 via-transparent to-transparent" />
    </div>
  );
};

export const InstagramCardArtwork: React.FC<{ item: InstagramEditorialItem }> = ({ item }) => {
  if (item.tone === 'photo-alisamento') {
    return (
      <HairPhotoFrame
        src={ALISAMENTO_RESULT_IMAGE}
        alt={item.title}
        className="w-full h-full"
        imgClassName="object-[50%_42%] transition-transform duration-700 ease-out group-hover:scale-105"
      />
    );
  }

  if (item.tone === 'photo-botox') {
    return (
      <HairPhotoFrame
        src={BOTOX_RESULT_IMAGE}
        alt={item.title}
        className="w-full h-full"
        imgClassName="object-[50%_26%] transition-transform duration-700 ease-out group-hover:scale-105"
      />
    );
  }

  if (item.tone === 'photo-penteado') {
    return (
      <HairPhotoFrame
        src={PENTEADO_RESULT_IMAGE}
        alt={item.title}
        className="w-full h-full"
        imgClassName="object-[50%_22%] transition-transform duration-700 ease-out group-hover:scale-105"
      />
    );
  }

  if (item.tone === 'photo-rosana') {
    return (
      <HairPhotoFrame
        src={ROSANA_PORTRAIT_IMAGE}
        alt={item.title}
        className="w-full h-full"
        imgClassName="object-[50%_15%] transition-transform duration-700 ease-out group-hover:scale-105"
      />
    );
  }

  const toneStyles: Record<string, { bg: string; text: string; sub: string; line: string }> = {
    'espresso-gold': {
      bg: 'bg-gradient-to-br from-[#38251F] via-[#2B1C17] to-[#171413]',
      text: 'text-[#FFFCF8]',
      sub: 'text-[#E8D6BC]',
      line: '#B99764',
    },
    'pearl-line': {
      bg: 'bg-gradient-to-tr from-[#F7F0E9] via-[#FFFCF8] to-[#E8D6BC]/70',
      text: 'text-[#38251F]',
      sub: 'text-[#5E463D]',
      line: '#8A6A3B',
    },
  };

  const st = toneStyles[item.tone] || toneStyles['espresso-gold'];

  return (
    <div
      className={`relative w-full h-full p-6 flex flex-col justify-between transition-transform duration-700 ease-out group-hover:scale-105 ${st.bg}`}
    >
      <svg
        viewBox="0 0 240 320"
        fill="none"
        className="absolute inset-0 w-full h-full opacity-45 pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M25 290V115C25 65 67 28 120 28C173 28 215 65 215 115V290"
          stroke={st.line}
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <path
          d="M-10 215C55 165 115 235 250 140"
          stroke={st.line}
          strokeOpacity="0.4"
          strokeWidth="1.2"
        />
      </svg>
      <span className={`relative z-10 text-[11px] uppercase tracking-[0.2em] ${st.sub}`}>
        {item.category}
      </span>
      <div className="relative z-10">
        <p className={`font-editorial italic text-2xl leading-tight ${st.text}`}>{item.title}</p>
        <p className={`mt-2 text-[11px] tracking-[0.16em] uppercase ${st.sub}`}>
          @espacorosanacouto
        </p>
      </div>
    </div>
  );
};
