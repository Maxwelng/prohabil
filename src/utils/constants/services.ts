import { ServiceData } from '@/models/types';

export const SERVICES_DATA: ServiceData[] = [
  {
    id: '1',
    title: 'Imposto de Renda PF',
    description:
      'Declaração completa de IRPF com análise detalhada para maximizar restituições.',
    icon: 'Calculator',
    slug: 'imposto-de-renda',
  },
  {
    id: '2',
    title: 'Abertura de Empresas',
    description:
      'Assessoria completa na abertura e regularização de empresas com agilidade.',
    icon: 'Building2',
    slug: 'abertura-de-empresas',
  },
  {
    id: '3',
    title: 'Escrituração Contábil',
    description: 'Classificação e escrituração seguindo normas contábeis vigentes.',
    icon: 'FileText',
    slug: 'escrituracao-contabil',
  },
  {
    id: '4',
    title: 'Assessoria Mensal',
    description: 'Acompanhamento contínuo com relatórios gerenciais especializados.',
    icon: 'TrendingUp',
    slug: 'assessoria-mensal',
  },
  {
    id: '5',
    title: 'Obrigações Acessórias',
    description: 'Entrega de todas as obrigações fiscais dentro dos prazos legais.',
    icon: 'Shield',
    slug: 'obrigacoes-acessorias',
  },
  {
    id: '6',
    title: 'Consultoria Empresarial',
    description: 'Orientação estratégica para tomada de decisões baseada em dados.',
    icon: 'Users',
    slug: 'consultoria-empresarial',
  },
];

export const SERVICE_CATEGORIES = {
  FISCAL: 'fiscal',
  CORPORATE: 'corporate',
  CONSULTING: 'consulting',
} as const;