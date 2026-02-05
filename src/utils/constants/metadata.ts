export const SITE_METADATA = {
  name: 'Prohabil Contabilidade',
  title: 'Prohabil - Serviços Contábeis em São Paulo',
  description:
    'Escritório de contabilidade com mais de 30 anos de experiência em São Paulo. Abertura de empresas, IRPF, assessoria mensal e serviços contábeis completos.',
  keywords: [
    'contabilidade',
    'contador',
    'abertura de empresa',
    'IRPF',
    'imposto de renda',
    'São Paulo',
    'assessoria contábil',
    'Penha',
    'serviços contábeis',
    'escritório de contabilidade',
  ],
  url: 'https://www.prohabil.com.br',
  ogImage: 'https://www.prohabil.com.br/images/og/default.jpg',
  phone: '+55 11 4329-3129',
  phoneFormatted: '(11) 4329-3129',
  phoneSecondary: '+55 11 4329-3139',
  phoneSecondaryFormatted: '(11) 4329-3139',
  email: 'maxnunes0711@gmail.com',
  whatsapp: '5511943293129',
  address: {
    street: 'Rua Padre João, 444',
    complement: 'Conjuntos 111 e 112',
    neighborhood: 'Penha',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '03636-000',
    fullAddress: 'Rua Padre João, 444 - Conjuntos 111 e 112, Penha - São Paulo - SP, 03636-000',
  },
  social: {
    facebook: 'https://www.facebook.com/prohabil',
    instagram: 'https://www.instagram.com/prohabil',
    linkedin: 'https://www.linkedin.com/company/prohabil',
  },
  business: {
    founded: '1993',
    yearsOfExperience: 30,
    clientsServed: 500,
    qualityCommitment: 100,
  },
  openingHours: {
    weekdays: {
      days: 'Segunda a Sexta',
      hours: '9h às 18h',
    },
    saturday: {
      days: 'Sábado',
      hours: '9h às 12h',
    },
    sunday: {
      days: 'Domingo',
      hours: 'Fechado',
    },
  },
} as const;

export const SEO_DEFAULTS = {
  titleTemplate: '%s | Prohabil Contabilidade',
  defaultTitle: 'Prohabil - Serviços Contábeis em São Paulo',
  robotsNoIndex: false,
  robotsNoFollow: false,
  openGraphType: 'website',
  twitterCard: 'summary_large_image',
} as const;