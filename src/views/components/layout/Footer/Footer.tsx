import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' },
  ];

  const socialLinks = [
    { href: 'https://facebook.com/prohabil', icon: Facebook, label: 'Facebook' },
    { href: 'https://instagram.com/prohabil', icon: Instagram, label: 'Instagram' },
    { href: 'https://linkedin.com/company/prohabil', icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            {/* Logo estilizado */}
            <Link href="#inicio" className="inline-flex items-center mb-4">
              <Image
                src="/logo-prohabil.svg" // coloque aqui o caminho do seu logo
                alt="ProHabil Logo"
                width={160}
                height={40}
                priority
              />
            </Link>

            <p className="text-gray-400">
              Serviços contábeis de excelência para o crescimento do seu negócio.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">Redes Sociais</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-gold transition"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Prohabil Serviços Contábeis Ltda. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
