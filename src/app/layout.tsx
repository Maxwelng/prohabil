import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@/views/components/shared/Analytics';
import { AppStoreProvider } from '@/viewmodels/stores';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.prohabil.com.br'),
  title: {
    default: 'Prohabil - Serviços Contábeis em São Paulo',
    template: '%s | Prohabil Contabilidade',
  },
  description:
    'Escritório de contabilidade com mais de 30 anos de experiência em São Paulo. Abertura de empresas, IRPF, assessoria mensal e serviços contábeis completos.',
  keywords: [
    'contabilidade',
    'contador',
    'abertura de empresa',
    'IRPF',
    'imposto de renda',
    'São Paulo',
    'assessoria contábil',
    'Penha',
  ],
  authors: [{ name: 'Prohabil Contabilidade' }],
  creator: 'Prohabil',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.prohabil.com.br',
    siteName: 'Prohabil Contabilidade',
    title: 'Prohabil - Serviços Contábeis em São Paulo',
    description: 'Escritório de contabilidade com mais de 30 anos de experiência',
    images: [
      {
        url: '/images/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'Prohabil Contabilidade',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prohabil - Serviços Contábeis em São Paulo',
    description: 'Escritório de contabilidade com mais de 30 anos de experiência',
    images: ['/images/og/default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'seu-codigo-de-verificacao',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-sans antialiased">
        <AppStoreProvider>{children}</AppStoreProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}