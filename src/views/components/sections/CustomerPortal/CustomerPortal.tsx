'use client';

import { ArrowRight } from 'lucide-react';

export function CustomerPortal() {
  return (
    <section id="portal" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Lado esquerdo - descrição */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Portal do <span className="text-gold">Cliente</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              O Portal do Cliente centraliza documentos, guias e informações contábeis em
              um ambiente digital seguro. A plataforma garante organização, agilidade no
              acesso aos dados e proteção das informações, facilitando a comunicação entre
              empresa e contabilidade com total transparência.
            </p>

            <a
              href="https://onvio.com.br/clientcenter/pt/auth?r=%2Fhome%3Fiss%3Dhttps:%252F%252Fauth.thomsonreuters.com%252F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gold text-white hover:brightness-110 focus:ring-gold rounded-full px-6 py-3 font-semibold transition-all"
            >
              Acesse Aqui
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>

          {/* Lado direito - bloco visual */}
          <div className="relative">
            <div className="bg-gold rounded-3xl p-6 sm:p-8 text-white shadow-2xl transition-all duration-700">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold mb-2 text-white">
                    Organização
                  </div>
                  <div className="text-sm sm:text-base text-white/80">
                    Documentos e guias centralizados
                  </div>
                </div>
                <div className="h-px bg-white/40 my-4 sm:my-6" />
                <div>
                  <div className="text-2xl sm:text-3xl font-bold mb-2 text-white">
                    Agilidade
                  </div>
                  <div className="text-sm sm:text-base text-white/80">
                    Acesso rápido e seguro às informações
                  </div>
                </div>
                <div className="h-px bg-white/40 my-4 sm:my-6" />
                <div>
                  <div className="text-2xl sm:text-3xl font-bold mb-2 text-white">
                    Transparência
                  </div>
                  <div className="text-sm sm:text-base text-white/80">
                    Comunicação clara entre empresa e contabilidade
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
