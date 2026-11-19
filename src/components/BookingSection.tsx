import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Copy, Instagram, MessageCircle } from 'lucide-react';
import {
  SALON_CONFIG,
  SERVICES,
  buildBookingMessage,
  getWhatsAppUrl,
} from '../data/salonData';

interface BookingSectionProps {
  preselectedService: string;
}

const PERIOD_OPTIONS = ['Manhã', 'Tarde', 'Flexível'] as const;

export const BookingSection: React.FC<BookingSectionProps> = ({ preselectedService }) => {
  const [name, setName] = useState('');
  const [service, setService] = useState(preselectedService || SERVICES[0].name);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredPeriod, setPreferredPeriod] = useState<string>('Flexível');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<{ name?: string; date?: string }>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const todayIso = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: { name?: string; date?: string } = {};

    if (name.trim().length < 2) {
      nextErrors.name = 'Por favor, informe seu nome completo ou como prefere ser chamada.';
    }
    if (!preferredDate) {
      nextErrors.date = 'Selecione uma data de preferência para analisarmos a agenda.';
    } else if (preferredDate < todayIso) {
      nextErrors.date = 'Escolha uma data igual ou posterior a hoje.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    const message = buildBookingMessage({
      name,
      service,
      preferredDate,
      preferredPeriod,
      notes,
    });

    setSubmittedMessage(message);
    setCopied(false);

    const whatsappUrl = getWhatsAppUrl(message);
    if (whatsappUrl) {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopyMessage = async () => {
    if (!submittedMessage) return;
    try {
      await navigator.clipboard.writeText(submittedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch {
      setCopied(false);
    }
  };

  const whatsappDirectUrl = submittedMessage ? getWhatsAppUrl(submittedMessage) : null;

  return (
    <section id="agendamento" className="relative bg-[#FFFCF8] py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Editorial Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#8A6A3B]">
                Agendamento Personalizado
              </span>
              <span className="w-10 h-[1px] bg-[#B99764]/60" aria-hidden="true" />
            </div>

            <h2 className="font-editorial text-[clamp(2.1rem,3.8vw,3.3rem)] leading-[1.08] text-[#38251F]">
              Sua próxima transformação começa aqui.
            </h2>

            <p className="mt-5 text-base sm:text-[17px] leading-[1.75] text-[#5E463D] max-w-md">
              Escolha seu cuidado, tire suas dúvidas e converse diretamente para encontrar o melhor
              horário para você.
            </p>

            <div className="mt-10 pt-8 border-t border-[#38251F]/10 space-y-4 text-sm text-[#5E463D]">
              <p>
                <strong className="font-medium text-[#38251F]">Solicitação de horário:</strong> o
                envio do formulário organiza suas preferências e encaminha o pedido diretamente para
                avaliação de disponibilidade.
              </p>
              <p>
                <strong className="font-medium text-[#38251F]">Instagram oficial:</strong>{' '}
                <a
                  href={SALON_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#B99764] underline-offset-4 hover:text-[#38251F] transition-colors"
                >
                  {SALON_CONFIG.instagramHandle}
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right Luxury Form Surface */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl bg-[#F7F0E9] border border-[#38251F]/12 p-6 sm:p-10 space-y-6"
            >
              {/* Nome */}
              <div>
                <label
                  htmlFor="booking-name"
                  className="block text-xs font-medium uppercase tracking-[0.18em] text-[#38251F] mb-2"
                >
                  Seu nome
                </label>
                <input
                  id="booking-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  placeholder="Como gostaria de ser chamada"
                  required
                  className="w-full rounded-xl bg-[#FFFCF8] border border-[#38251F]/15 px-4 py-3.5 text-sm text-[#38251F] placeholder:text-[#5E463D]/50 focus:outline-none focus:border-[#B99764] focus:ring-2 focus:ring-[#B99764]/25 transition-all"
                />
                {errors.name && (
                  <p role="alert" className="mt-1.5 text-xs text-[#8A3B32]">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Serviço desejado */}
              <div>
                <label
                  htmlFor="booking-service"
                  className="block text-xs font-medium uppercase tracking-[0.18em] text-[#38251F] mb-2"
                >
                  Serviço desejado
                </label>
                <select
                  id="booking-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-xl bg-[#FFFCF8] border border-[#38251F]/15 px-4 py-3.5 text-sm text-[#38251F] focus:outline-none focus:border-[#B99764] focus:ring-2 focus:ring-[#B99764]/25 transition-all cursor-pointer"
                >
                  {SERVICES.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                  <option value="Outros tratamentos / Avaliação capilar">
                    Outros tratamentos / Avaliação capilar
                  </option>
                </select>
              </div>

              {/* Data + Período */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="booking-date"
                    className="block text-xs font-medium uppercase tracking-[0.18em] text-[#38251F] mb-2"
                  >
                    Data de preferência
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    min={todayIso}
                    value={preferredDate}
                    onChange={(e) => {
                      setPreferredDate(e.target.value);
                      if (errors.date) setErrors((prev) => ({ ...prev, date: undefined }));
                    }}
                    required
                    className="w-full rounded-xl bg-[#FFFCF8] border border-[#38251F]/15 px-4 py-3.5 text-sm text-[#38251F] focus:outline-none focus:border-[#B99764] focus:ring-2 focus:ring-[#B99764]/25 transition-all"
                  />
                  {errors.date && (
                    <p role="alert" className="mt-1.5 text-xs text-[#8A3B32]">
                      {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <span className="block text-xs font-medium uppercase tracking-[0.18em] text-[#38251F] mb-2">
                    Período de preferência
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {PERIOD_OPTIONS.map((period) => {
                      const active = preferredPeriod === period;
                      return (
                        <button
                          key={period}
                          type="button"
                          onClick={() => setPreferredPeriod(period)}
                          aria-pressed={active}
                          className={`py-3.5 px-2 rounded-xl text-xs font-medium transition-all cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99764] ${
                            active
                              ? 'bg-[#38251F] text-[#FFFCF8] border-[#38251F]'
                              : 'bg-[#FFFCF8] text-[#5E463D] border-[#38251F]/15 hover:border-[#B99764]'
                          }`}
                        >
                          {period}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Observações opcionais */}
              <div>
                <label
                  htmlFor="booking-notes"
                  className="block text-xs font-medium uppercase tracking-[0.18em] text-[#38251F] mb-2"
                >
                  Observações opcionais
                </label>
                <textarea
                  id="booking-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Conte brevemente sobre seus fios, histórico recente ou dúvidas..."
                  className="w-full rounded-xl bg-[#FFFCF8] border border-[#38251F]/15 px-4 py-3.5 text-sm text-[#38251F] placeholder:text-[#5E463D]/50 focus:outline-none focus:border-[#B99764] focus:ring-2 focus:ring-[#B99764]/25 transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="gold-sheen-btn w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#38251F] text-[#FFFCF8] text-xs font-medium uppercase tracking-[0.18em] hover:bg-[#171413] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99764]"
                >
                  <span>Solicitar agendamento</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="mt-3 text-center text-xs text-[#5E463D]">
                  Este envio representa uma solicitação de horário, sujeita à confirmação pela
                  profissional.
                </p>
              </div>

              {/* Confirmation / Ready-to-Send Message Box */}
              {submittedMessage && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-6 rounded-xl bg-[#FFFCF8] border border-[#B99764]/50 p-5 space-y-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#8A6A3B]">
                        Solicitação preparada
                      </p>
                      <p className="mt-1 text-sm text-[#38251F]">
                        {whatsappDirectUrl
                          ? 'Sua mensagem foi aberta no WhatsApp. Caso não tenha iniciado, use os botões abaixo:'
                          : 'Mensagem pronta para envio. Copie abaixo ou envie diretamente pelo Instagram oficial enquanto o WhatsApp oficial é confirmado:'}
                      </p>
                    </div>
                  </div>

                  <pre className="whitespace-pre-wrap font-sans text-xs leading-relaxed text-[#5E463D] bg-[#F7F0E9] rounded-lg p-4 border border-[#38251F]/10">
                    {submittedMessage}
                  </pre>

                  <div className="flex flex-wrap items-center gap-3">
                    {whatsappDirectUrl && (
                      <a
                        href={whatsappDirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#38251F] text-[#FFFCF8] text-xs font-medium uppercase tracking-[0.14em] hover:bg-[#171413] transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Abrir WhatsApp</span>
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#38251F]/20 bg-[#F7F0E9] text-[#38251F] text-xs font-medium uppercase tracking-[0.14em] hover:bg-[#E8D6BC] transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Mensagem copiada' : 'Copiar mensagem'}</span>
                    </button>

                    <a
                      href={SALON_CONFIG.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#38251F]/20 text-[#38251F] text-xs font-medium uppercase tracking-[0.14em] hover:bg-[#E8D6BC]/50 transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>Enviar pelo Instagram</span>
                    </a>
                  </div>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
