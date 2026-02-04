'use client';

import * as Icons from 'lucide-react';
import { useIntersectionObserver } from '@/viewmodels/hooks';

const areas = [
  {
    id: 1,
    title: 'Imposto de Renda Pessoa Física',
    description: 'Atendimento especializado para declaração e regularização do IRPF.',
    icon: Icons.Briefcase,
  },
  {
    id: 2,
    title: 'Abertura, Regularização e Encerramento de Empresas',
    description: 'Suporte completo em todas as etapas do ciclo empresarial.',
    icon: Icons.Building2,
  },
  {
    id: 3,
    title: 'Assessoria Mensal',
    description: 'Acompanhamento contínuo para manter sua empresa em conformidade.',
    icon: Icons.CalendarCheck,
  },
];

export function AreasDeAtuacao() {
  return (
    <section id="areas" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Áreas de <span className="text-gold">Atuação</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça nossas principais áreas de atuação em serviços contábeis
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {areas.map((area, index) => (
            <AreaCard key={area.id} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

type AreaCardProps = {
  area: {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
  };
  index: number;
};

function AreaCard({ area, index }: AreaCardProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const Icon = area.icon;

  return (
    <article
      ref={ref}
      className={`bg-gray-50 rounded-2xl p-6 sm:p-8 transition-all duration-700 border-2 border-gray-200 hover:border-gold hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-gold w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
        <Icon className="text-white" size={32} />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        {area.description}
      </p>
    </article>
  );
}
