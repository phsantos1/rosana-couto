export type ServiceId =
  | 'alisamento'
  | 'botox'
  | 'cauterizacao'
  | 'penteados';

export interface ServiceItem {
  id: ServiceId;
  number: string;
  name: string;
  headline: string;
  description: string;
  ctaLabel: string;
  gridSpan: 'wide' | 'narrow';
  tone: 'photo' | 'champagne' | 'espresso' | 'rose';
  imageUrl?: string;
  imagePosition?: string;
}

export interface TransformationItem {
  id: string;
  serviceId: ServiceId;
  categoryLabel: string;
  title: string;
  caption: string;
  aspect: 'tall' | 'wide' | 'square';
  variant: 'gloss-waves' | 'silk-align' | 'cuticle-ritual' | 'bridal-updo' | 'soft-movement';
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  serviceName?: string;
  rating: number;
  comment: string;
  photoUrl?: string;
}

export interface InstagramEditorialItem {
  id: string;
  title: string;
  category: string;
  tone: 'photo-alisamento' | 'photo-botox' | 'espresso-gold' | 'photo-penteado' | 'pearl-line' | 'photo-rosana';
}

export const HERO_CAMPAIGN_IMAGE =
  '/assets/aistudio/M5EzrsU2pxuEVa_7npUVwv3ttP0KTg0wJKoK-8ipn35KKsAcxn3QPDJbnni6IbwTZmh05pRtqxdcUPhoorqecA1aIz34-HpHbPk50aO0MKUq1n3EWXh_cWu1hgDoufabr2GqTVcGE_2PV-tj3yQtdqJd09TRJcOTpjENAarQTWsCK123e1gOhB8GlwKwURJF_96d122b0.jpg';

export const ROSANA_PORTRAIT_IMAGE = '/assets/aistudio/image_8d1af6f1.png';
export const ALISAMENTO_RESULT_IMAGE = '/assets/aistudio/image_a1d272c0.png';
export const BOTOX_RESULT_IMAGE = '/assets/aistudio/image_e53c6c44.png';
export const PENTEADO_RESULT_IMAGE = '/assets/aistudio/image_7b8dcba7.png';

/**
 * Dados institucionais confirmados.
 * Campos ainda não informados permanecem vazios para evitar dados fictícios.
 */
export const SALON_CONFIG = {
  brandName: 'Espaço Rosana Couto',
  professionalName: 'Rosana Couto',
  instagramHandle: '@espacorosanacouto',
  instagramUrl: 'https://www.instagram.com/espacorosanacouto/',
  /**
   * Preencher com DDI + DDD + número (ex: "5511999999999") após confirmação oficial da profissional.
   */
  whatsappNumber: '',
  whatsappDisplay: '',
  cityState: '',
  address: '',
  businessHours: '',
} as const;

export const SERVICES: ServiceItem[] = [
  {
    id: 'alisamento',
    number: '01',
    name: 'Alisamento Capilar',
    headline: 'A elegância de fios alinhados.',
    description:
      'Conheça as opções de alisamento disponíveis e descubra o tratamento mais adequado para seus cabelos, após avaliação profissional.',
    ctaLabel: 'Quero saber mais',
    gridSpan: 'wide',
    tone: 'photo',
    imageUrl: ALISAMENTO_RESULT_IMAGE,
    imagePosition: 'object-[50%_42%]',
  },
  {
    id: 'botox',
    number: '02',
    name: 'Botox Capilar',
    headline: 'Cuidado que valoriza cada fio.',
    description:
      'Tratamento capilar voltado ao cuidado e à melhora da aparência dos fios, conforme a técnica e os produtos utilizados.',
    ctaLabel: 'Agendar avaliação',
    gridSpan: 'narrow',
    tone: 'photo',
    imageUrl: BOTOX_RESULT_IMAGE,
    imagePosition: 'object-[50%_26%]',
  },
  {
    id: 'cauterizacao',
    number: '03',
    name: 'Cauterização Capilar',
    headline: 'Um ritual especial de cuidado.',
    description:
      'Um tratamento para quem deseja investir no cuidado dos cabelos e na aparência dos fios.',
    ctaLabel: 'Conhecer tratamento',
    gridSpan: 'narrow',
    tone: 'espresso',
  },
  {
    id: 'penteados',
    number: '04',
    name: 'Penteados',
    headline: 'Para momentos que merecem ser inesquecíveis.',
    description:
      'Penteados que valorizam sua personalidade e complementam sua produção para ocasiões especiais.',
    ctaLabel: 'Quero meu penteado',
    gridSpan: 'wide',
    tone: 'photo',
    imageUrl: PENTEADO_RESULT_IMAGE,
    imagePosition: 'object-[50%_22%]',
  },
];

export const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: 't1',
    serviceId: 'alisamento',
    categoryLabel: 'Alisamento Capilar',
    title: 'Alinhamento com movimento natural',
    caption: 'Espaço curado para registros reais do portfólio @espacorosanacouto.',
    aspect: 'tall',
    variant: 'silk-align',
  },
  {
    id: 't2',
    serviceId: 'botox',
    categoryLabel: 'Botox Capilar',
    title: 'Maciez e aparência renovada',
    caption: 'Cuidado direcionado à textura e ao toque sedoso dos fios.',
    aspect: 'square',
    variant: 'gloss-waves',
  },
  {
    id: 't3',
    serviceId: 'cauterizacao',
    categoryLabel: 'Cauterização Capilar',
    title: 'Ritual de cuidado da fibra',
    caption: 'Atenção aos fios em cada etapa do atendimento personalizado.',
    aspect: 'square',
    variant: 'cuticle-ritual',
  },
  {
    id: 't4',
    serviceId: 'penteados',
    categoryLabel: 'Penteados',
    title: 'Construção para ocasiões especiais',
    caption: 'Acabamento pensado para harmonizar com o estilo de cada mulher.',
    aspect: 'wide',
    variant: 'bridal-updo',
  },
  {
    id: 't5',
    serviceId: 'alisamento',
    categoryLabel: 'Alisamento Capilar',
    title: 'Brilho espelhado e leveza',
    caption: 'Avaliação individual para definir a técnica mais indicada.',
    aspect: 'wide',
    variant: 'soft-movement',
  },
];

/**
 * Componente preparado para exibir depoimentos reais autorizados.
 * Permanece oculto automaticamente enquanto não houver avaliações reais cadastradas.
 */
export const TESTIMONIALS: TestimonialItem[] = [];

export const INSTAGRAM_GALLERY: InstagramEditorialItem[] = [
  {
    id: 'ig-1',
    title: 'Alisamento & Brilho',
    category: 'Alisamento Capilar',
    tone: 'photo-alisamento',
  },
  {
    id: 'ig-2',
    title: 'Cuidado em cada detalhe',
    category: 'Botox Capilar',
    tone: 'photo-botox',
  },
  {
    id: 'ig-3',
    title: 'Ritual de Essência',
    category: 'Cauterização',
    tone: 'espresso-gold',
  },
  {
    id: 'ig-4',
    title: 'Produções Especiais',
    category: 'Penteados',
    tone: 'photo-penteado',
  },
  {
    id: 'ig-5',
    title: 'Beleza Única',
    category: 'Atendimento Personalizado',
    tone: 'pearl-line',
  },
  {
    id: 'ig-6',
    title: 'Rosana Couto',
    category: 'Espaço Rosana Couto',
    tone: 'photo-rosana',
  },
];

export function buildBookingMessage(params: {
  name: string;
  service: string;
  preferredDate: string;
  preferredPeriod: string;
  notes?: string;
}): string {
  const formattedDate = params.preferredDate
    ? params.preferredDate.split('-').reverse().join('/')
    : 'A combinar';
  const notesText = params.notes?.trim() ? params.notes.trim() : 'Nenhuma observação adicional.';

  return [
    'Olá, Rosana! Conheci seu trabalho pelo site e gostaria de solicitar um agendamento.',
    '',
    `Meu nome: ${params.name.trim()}`,
    `Serviço: ${params.service}`,
    `Data de preferência: ${formattedDate}`,
    `Período: ${params.preferredPeriod}`,
    `Observações: ${notesText}`,
  ].join('\n');
}

export function getWhatsAppUrl(message: string): string | null {
  const digits = SALON_CONFIG.whatsappNumber.replace(/\D/g, '');
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
