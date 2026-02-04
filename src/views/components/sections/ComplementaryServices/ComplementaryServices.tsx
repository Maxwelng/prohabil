'use client';

import { CheckCircle2 } from 'lucide-react';

export function ComplementaryServices() {
  const complementares = [
    'Parametrização de naturezas em programas emissores de notas fiscais',
    'Emissão de guias de Difal',
    'Imposto de Renda Pessoa Física',
    'BPO Financeiro',
    'Gestão e organização de movimentação financeira e de RH',
  ];

  const highlights = [
    { value: '100%', label: 'Foco em Conformidade Fiscal' },
    { value: 'Agilidade', label: 'Processos Otimizados' },
    { value: 'Especialistas', label: 'Equipe Técnica Qualificada' },
  ];

  return (
    <section id="complementares" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Lado esquerdo - lista de serviços */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Serviços <span className="text-gold">Complementares</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Além dos serviços principais, oferecemos soluções complementares que
              garantem maior segurança, praticidade e eficiência para sua empresa.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {complementares.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lado direito - bloco de destaque */}
          <div className="relative">
            <div className="bg-gold rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
              <div className="space-y-4 sm:space-y-6">
                {highlights.map((highlight, index) => (
                  <div key={index}>
                    {index > 0 && <div className="h-px bg-white/40 mb-4 sm:mb-6" />}
                    <div className="text-2xl sm:text-3xl font-bold mb-2 text-white">
                      {highlight.value}
                    </div>
                    <div className="text-sm sm:text-base text-white/80">
                      {highlight.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
