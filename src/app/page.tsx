import { Header } from '@/views/components/layout/Header';
import { Footer } from '@/views/components/layout/Footer';
import { Hero } from '@/views/components/sections/Hero';
import { About } from '@/views/components/sections/About';
import { Services } from '@/views/components/sections/Services';
import { Contact } from '@/views/components/sections/Contact';
import { LocalBusinessSchema } from '@/views/components/shared/SEO';

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}