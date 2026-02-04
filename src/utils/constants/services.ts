import { ServiceData } from '@/models/types';

export const SERVICES_DATA: ServiceData[] = [
  {
    id: '1',
    title: 'Fiscal',
    description:
      'Acompanhamento fiscal com análise de notas, apuração de tributos, cumprimento das obrigações acessórias e suporte consultivo contínuo.',
    icon: 'Receipt',
    slug: 'fiscal',
  },
  {
    id: '2',
    title: 'Financeiro',
    description:
      'Organização e controle financeiro, com conciliação bancária, agendamento de guias e apoio à rotina da empresa.',
    icon: 'PiggyBank',
    slug: 'financeiro',
  },
  {
    id: '3',
    title: 'Contabilidade',
    description: 'Gestão contábil completa, com escrituração, relatórios, demonstrativos e suporte consultivo para acompanhamento da saúde financeira do negócio.',
    icon: 'Calculator',
    slug: 'contabilidade',
  },
  {
    id: '4',
    title: 'Certidões',
    description: 'Controle das principais certidões negativas, garantindo a regularidade fiscal e trabalhista da empresa junto aos órgãos competentes.',
    icon: 'ClipboardList',
    slug: 'certidões',
  },
  {
    id: '5',
    title: 'Certificação Digital',
    description: 'Emissão de certificado digital com baixo custo e validação por videoconferência, garantindo praticidade, segurança e validade de até 10 anos.',
    icon: 'ShieldCheck',
    slug: 'certificação-digital',
  },
  {
    id: '6',
    title: 'Trabalhista',
    description: 'Gestão das rotinas trabalhistas e previdenciárias, incluindo admissões, folha, eSocial, encargos e conformidade legal.',
    icon: 'Users',
    slug: 'trabalhista',
  },
  {
    id: '7',
    title: 'Acompanhamento Tributário Especializado',
    description: 'Acompanhamento tributário realizados por meio de parcerias estratégicas com especialistas, garantindo análises técnicas, segurança fiscal e apoio em demandas específicas e complexas.',
    icon: 'Scale',
    slug: 'Aaompanhamento-tributário-especializado',
  },
];

export const SERVICE_CATEGORIES = {
  FISCAL: 'fiscal',
  CORPORATE: 'corporate',
  CONSULTING: 'consulting',
} as const;