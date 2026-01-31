'use client';

import Link from 'next/link';
import { useHeaderViewModel } from './Header.viewmodel';
import { Menu, X, Phone } from 'lucide-react';

export function Header() {
  const { isScrolled, mobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useHeaderViewModel();

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            PROHABIL
          </div>
        </Link>

        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium transition-colors hover:text-gold ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="tel:1143293129"
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark hover:opacity-90 text-white px-6 py-2 rounded-full font-medium transition-all"
        >
          <Phone size={18} />
          (11) 4329-3129
        </a>

        <button
          onClick={toggleMobileMenu}
          className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block text-gray-700 hover:text-gold font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="tel:1143293129"
                className="flex items-center justify-center gap-2 gradient-gold text-white px-6 py-2 rounded-full font-medium"
              >
                <Phone size={18} />
                Ligar Agora
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}