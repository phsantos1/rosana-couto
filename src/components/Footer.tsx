import React, { useEffect, useState } from 'react';
import { Instagram, MessageCircle, X } from 'lucide-react';
import { SALON_CONFIG, TESTIMONIALS, getWhatsAppUrl } from '../data/salonData';
import { BrandLogoMark } from './EditorialArtworks';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const whatsappUrl = getWhatsAppUrl(
    'Olá, Rosana! Vim pelo site e gostaria de mais informações sobre os cuidados capilares.'
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPrivacyOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'Resultados', href: '#resultados' },
    ...(TESTIMONIALS.length > 0 ? [{ label: 'Depoimentos', href: '#depoimentos' }] : []),
    { label: 'Agendamento', href: '#agendamento' },
  ];

  return (
    <footer className="bg-[#171413] text-[#FFFCF8] pt-16 pb-10 border-t border-[#E8D6BC]/12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E8D6BC]/12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <BrandLogoMark className="w-8 h-8 text-[#E8D6BC]" />
              <span className="font-editorial text-2xl text-[#FFFCF8]">
                {SALON_CONFIG.brandName}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#E8D6BC]/80 max-w-sm">
              Beleza e cuidados capilares pensados para valorizar sua essência com atenção,
              delicadeza e respeito aos seus fios.
            </p>
            <p className="mt-6 font-editorial italic text-xl text-[#E8D6BC]">
              Espaço Rosana Couto — Sua beleza merece esse cuidado.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.22em] text-[#B99764] mb-4">Navegação</p>
            <ul className="space-y-2.5 text-sm text-[#E8D6BC]/85">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-[#FFFCF8] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Verified Channels */}
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[#B99764] mb-4">
              Canais &amp; Atendimento
            </p>
            <div className="space-y-3 text-sm text-[#E8D6BC]/85">
              <a
                href={SALON_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-[#FFFCF8] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#B99764]" />
                <span>Instagram {SALON_CONFIG.instagramHandle}</span>
              </a>

              {whatsappUrl && SALON_CONFIG.whatsappDisplay && (
                <div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 hover:text-[#FFFCF8] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#B99764]" />
                    <span>WhatsApp: {SALON_CONFIG.whatsappDisplay}</span>
                  </a>
                </div>
              )}

              {(SALON_CONFIG.address || SALON_CONFIG.cityState) && (
                <p className="text-xs leading-relaxed text-[#E8D6BC]/75 pt-1">
                  {[SALON_CONFIG.address, SALON_CONFIG.cityState].filter(Boolean).join(' · ')}
                </p>
              )}

              {SALON_CONFIG.businessHours ? (
                <p className="text-xs leading-relaxed text-[#E8D6BC]/75">
                  Horários: {SALON_CONFIG.businessHours}
                </p>
              ) : (
                <p className="text-xs leading-relaxed text-[#E8D6BC]/75">
                  Atendimento mediante solicitação e confirmação de horário.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8D6BC]/65">
          <p>
            © {currentYear} {SALON_CONFIG.brandName}. Todos os direitos reservados.
          </p>
          <button
            type="button"
            onClick={() => setPrivacyOpen(true)}
            className="hover:text-[#FFFCF8] underline underline-offset-4 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99764] rounded"
          >
            Política de Privacidade
          </button>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
          className="fixed inset-0 z-50 bg-[#171413]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setPrivacyOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-[#FFFCF8] text-[#38251F] border border-[#E8D6BC] p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#38251F]/10">
              <h3 id="privacy-modal-title" className="font-editorial text-2xl text-[#38251F]">
                Política de Privacidade
              </h3>
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                aria-label="Fechar política de privacidade"
                className="w-10 h-10 rounded-full border border-[#38251F]/15 flex items-center justify-center text-[#38251F] hover:bg-[#E8D6BC]/40 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-[#5E463D]">
              <p>
                As informações preenchidas no formulário de solicitação de agendamento (nome,
                serviço desejado, preferência de data, período e observações) são utilizadas
                exclusivamente para compor a mensagem de atendimento encaminhada por você ao{' '}
                {SALON_CONFIG.brandName}.
              </p>
              <p>
                Este site não armazena seus dados pessoais em banco de dados externo nem realiza
                compartilhamento com terceiros. Fotografias de clientes e depoimentos só são
                publicados mediante autorização expressa.
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
