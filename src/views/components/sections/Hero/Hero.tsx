import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/views/components/ui/Button';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-gray-800"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold-dark rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Contabilidade que <span className="text-gold">impulsiona</span> seu negócio
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            Mais de 30 anos de experiência oferecendo soluções contábeis completas para
            empresas de todos os portes em São Paulo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contato">
              <Button size="lg" className="inline-flex items-center">
                Fale Conosco
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="#servicos">
              <Button variant="outline" size="lg">
                Nossos Serviços
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F9FAFB"
          />
        </svg>
      </div>
    </section>
  );
}