import { ServiceData } from '@/models/types';
import { ServiceCard } from './ServiceCard';
import { useServicesViewModel } from './Services.viewmodel';
import { CheckCircle2 } from 'lucide-react';

export function Services() {
  const benefits = [
    'Parametrização de naturezas em programas emissores de notas fiscais',
    'Emissão de guias de Difal',
    'Imposto de Renda Pessoa Física',
    'BPO Financeiro',
    ' Gestão e organização de movimentação financeira e de RH',
  ];

  const { services } = useServicesViewModel();

  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-gold">Serviços</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções completas em contabilidade para atender todas as necessidades do seu negócio
          </p>
        </div>

        {/* Cards de serviços */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.slice(0, services.length - 1).map((service: ServiceData, index: number) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Último card + lista de benefícios lado a lado */}
        {/* Últimos dois cards centralizados */}
        <div className="flex justify-center gap-8 mt-8 ">
          {/* Último card */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            <div className='sm:w-[273.56px] md:w-[499px]'>
            <ServiceCard
              service={services[services.length - 1]}
              index={services.length - 1}
            />

            </div>
            <article
            className="bg-gray-50 rounded-2xl p-6 sm:p-8 transition-all duration-700 border-2 border-gray-200 hover:border-gold hover:-translate-y-2 w-full sm:w-[273.56px] md:w-[499px] h-full"
          >
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
              Serviços Complementares
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed" style={{fontSize:"0.94rem"}}>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={20} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </article>
          </div>

          {/* Lista de benefícios */}
          
        </div>

      </div>
    </section>
  );
}
