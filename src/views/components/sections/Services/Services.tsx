import { ServiceData } from '@/models/types';
import { ServiceCard } from './ServiceCard';
import { useServicesViewModel } from './Services.viewmodel';

export function Services() {
  const { services } = useServicesViewModel();

  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-gold">Serviços</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções completas em contabilidade para atender todas as necessidades do seu
            negócio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service: ServiceData, index: number | undefined) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}