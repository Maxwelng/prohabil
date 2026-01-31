import { CheckCircle2 } from 'lucide-react';

export function About() {
  const benefits = [
    'Atendimento personalizado',
    'Consultoria via WhatsApp',
    'Relatórios gerenciais',
    'Equipe especializada',
    'Compromisso com prazos',
    'Tecnologia de ponta',
  ];

  const stats = [
    { value: '30+', label: 'Anos de Experiência' },
    { value: '500+', label: 'Clientes Atendidos' },
    { value: '100%', label: 'Compromisso e Qualidade' },
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Sua empresa em <span className="text-gold">boas mãos</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              A Prohabil é um escritório de contabilidade consolidado no mercado,
              oferecendo soluções completas para empresas que buscam excelência em gestão
              contábil e fiscal.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Nossa missão é simplificar a gestão contábil do seu negócio, permitindo que
              você foque no que realmente importa: o crescimento da sua empresa.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="gradient-gold rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
              <div className="space-y-4 sm:space-y-6">
                {stats.map((stat, index) => (
                  <div key={index}>
                    {index > 0 && <div className="h-px bg-yellow-200 mb-4 sm:mb-6" />}
                    <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm sm:text-base text-yellow-100">{stat.label}</div>
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