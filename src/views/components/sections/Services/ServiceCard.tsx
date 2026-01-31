'use client';

import { ServiceCardProps } from '@/models/types';
import { useIntersectionObserver } from '@/viewmodels/hooks';
import * as Icons from 'lucide-react';

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const Icon = (Icons as any)[service.icon] || Icons.FileText;

  return (
    <article
      ref={ref}
      className={`bg-gray-50 rounded-2xl p-6 sm:p-8 transition-all duration-700 border-2 border-gray-200 hover:border-gold hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-yellow-100 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-6">
        <Icon className="text-gold-dark" size={32} />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        {service.description}
      </p>
    </article>
  );
}