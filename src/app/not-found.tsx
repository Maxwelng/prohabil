import Link from 'next/link';
import { Button } from '@/views/components/ui/Button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gold mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Página não encontrada</h2>
        <p className="text-gray-600 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/" className="inline-flex items-center">
          <Button>
            <Home className="mr-2" size={20} />
            Voltar para Home
          </Button>
        </Link>
      </div>
    </div>
  );
}